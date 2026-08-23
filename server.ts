import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON request body parser
  app.use(express.json());

  // API Route: Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API Route: Send Contact Form Email via SMTP
  app.post("/api/send-email", async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Visi obligātie lauki (Vārds, E-pasts, Ziņojums) ir jāaizpilda.",
        });
      }

      // Check environment variables for SMTP configuration
      const smtpHost = process.env.SMTP_HOST || "server54.areait.lv";
      const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
      const smtpUser = process.env.SMTP_USER || "info@justiopro.lv";
      const smtpPass = process.env.SMTP_PASS;
      const recipientEmail = process.env.SMTP_TO_EMAIL || "info@justiopro.lv";

      if (!smtpPass) {
        console.warn(
          "⚠️ SMTP_PASS nav iestatīts vides mainīgajos. E-pasts netiks nosūtīts caur serveri."
        );
        return res.status(500).json({
          success: false,
          error:
            "E-pasta servera parole (SMTP_PASS) nav iestatīta sistēmas iestatījumos.",
        });
      }

      // Create Nodemailer Transporter
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // HTML Email Template
      const htmlContent = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
          <div style="background-color: #1a365d; padding: 24px; text-align: center; border-bottom: 3px solid #c59b27;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">JustioPro — Jauns pieteikums</h2>
            <p style="color: #cbd5e1; margin: 6px 0 0 0; font-size: 13px;">Saņemts no mājaslapas kontaktu formas</p>
          </div>
          <div style="padding: 28px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">
              <tr>
                <td style="padding: 10px 0; width: 140px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Vārds, Uzvārds:</td>
                <td style="padding: 10px 0; font-weight: 600; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">E-pasts:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #1d4ed8; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Tālrunis:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${phone ? `<a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>` : '<em>Nav norādīts</em>'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Pakalpojums:</td>
                <td style="padding: 10px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${service || 'Vispārēja juridiskā konsultācija'}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <h3 style="font-size: 14px; font-weight: 600; color: #64748b; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Klienta ziņojums:</h3>
              <div style="background-color: #f8fafc; border-left: 4px solid #1a365d; padding: 14px 16px; border-radius: 4px; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
            Lai atbildētu klientam, vienkārši spiediet <strong>"Atbildēt" (Reply)</strong> savā e-pasta programmā.
          </div>
        </div>
      `;

      // Plain Text Alternative
      const textContent = `
JustioPro — Jauns pieteikums no mājaslapas:

Vārds: ${name}
E-pasts: ${email}
Tālrunis: ${phone || 'Nav norādīts'}
Pakalpojums: ${service || 'Vispārēja konsultācija'}

Ziņojums:
${message}
      `;

      // Mail Options
      const mailOptions = {
        from: `"JustioPro Mājaslapa" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `Jauns pieteikums: ${name} (${service || 'Konsultācija'})`,
        text: textContent,
        html: htmlContent,
      };

      await transporter.sendMail(mailOptions);

      return res.json({
        success: true,
        message: "E-pasts ir veiksmīgi nosūtīts!",
      });
    } catch (err: any) {
      console.error("Kļūda nosūtot e-pastu:", err);
      return res.status(500).json({
        success: false,
        error: err.message || "Neizdevās nosūtīt e-pastu. Lūdzu, mēģiniet vēlāk.",
      });
    }
  });

  // Vite middleware for development vs static production serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveris darbojas uz porta ${PORT}`);
  });
}

startServer();
