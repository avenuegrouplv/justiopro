import nodemailer from "nodemailer";

export const handler = async (event: any) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { name, email, phone, service, message } = data;

    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          success: false,
          error: "Visi obligātie lauki (Vārds, E-pasts, Tālrunis, Ziņojums) ir jāaizpilda.",
        }),
      };
    }

    const smtpHost = process.env.SMTP_HOST || "server54.areait.lv";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER || "info@justiopro.lv";
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.SMTP_TO_EMAIL || "info@justiopro.lv";

    if (!smtpPass) {
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          success: false,
          error: "SMTP_PASS parole nav iestatīta vides mainīgajos (Environment Variables).",
        }),
      };
    }

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

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
        <div style="background-color: #0B1F33; padding: 20px; text-align: center; border-bottom: 3px solid #C9A45C;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">JustioPro — Jauns pieteikums</h2>
          <p style="color: #cbd5e1; margin: 4px 0 0 0; font-size: 12px;">Saņemts no mājaslapas kontaktu formas</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #334155; font-size: 14px;">
          <p style="margin: 0 0 8px 0;"><strong>Vārds, Uzvārds:</strong> ${name}</p>
          <p style="margin: 0 0 8px 0;"><strong>E-pasts:</strong> <a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></p>
          <p style="margin: 0 0 8px 0;"><strong>Tālrunis:</strong> <a href="tel:${phone}" style="color: #0f172a;">${phone}</a></p>
          <p style="margin: 0 0 16px 0;"><strong>Pakalpojums:</strong> ${service || 'Vispārēja konsultācija'}</p>
          <div style="margin-top: 16px; padding: 14px; background-color: #f1f5f9; border-left: 4px solid #0B1F33; border-radius: 4px;">
            <strong style="color: #0B1F33;">Klienta ziņojums:</strong><br/>
            <div style="margin-top: 6px; white-space: pre-wrap; line-height: 1.6;">${message}</div>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #64748b;">
          Lai atbildētu klientam, spiediet "Reply" savā e-pastā.
        </div>
      </div>
    `;

    const textContent = `JustioPro — Jauns pieteikums:\n\nVārds: ${name}\nE-pasts: ${email}\nTālrunis: ${phone}\nPakalpojums: ${service || 'Konsultācija'}\n\nZiņojums:\n${message}`;

    await transporter.sendMail({
      from: `"JustioPro Mājaslapa" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Jauns pieteikums: ${name} (${service || 'Konsultācija'})`,
      text: textContent,
      html: htmlContent,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true, message: "Pieteikums veiksmīgi nosūtīts!" }),
    };
  } catch (err: any) {
    console.error("SMTP error:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: false,
        error: err.message || "Neizdevās nosūtīt e-pastu caur SMTP serveri.",
      }),
    };
  }
};
