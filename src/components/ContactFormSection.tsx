import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, PRACTICE_AREAS } from '../data/content';
import { ContactFormData } from '../types';

interface ContactFormSectionProps {
  id?: string;
  isStandalonePage?: boolean;
  showBottomImage?: boolean;
}

export default function ContactFormSection({
  id = 'contact-section',
  isStandalonePage = false,
  showBottomImage = false,
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    practiceArea: 'Līgumtiesības',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Lūdzu, aizpildiet visus ar sarkanu zvaigznīti (*) atzīmētos laukus.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        practiceArea: 'Līgumtiesības',
      });
    }, 600);
  };

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden bg-gradient-to-b from-[#1E3752] via-[#14283D] to-[#0E1E2E] text-slate-100 border-t border-black/80 ${
        isStandalonePage ? 'py-16 sm:py-20' : 'py-20 sm:py-24'
      }`}
    >
      {/* Background with local high-resolution webp asset /juridiskie-pakalpojumi.webp */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/juridiskie-pakalpojumi.webp"
          alt="JustioPro juridiskie pakalpojumi"
          className="h-full w-full object-cover grayscale opacity-25 mix-blend-luminosity"
          loading="lazy"
        />
        {/* Soft radial illumination overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3A6088]/25 via-transparent to-[#081320]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          {!isStandalonePage && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/50 bg-[#06121E]/90 px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-[#C9A45C] shadow-sm backdrop-blur-xs">
              Saziņa un Konsultācijas
            </span>
          )}
          <h2 className={`text-3xl font-normal tracking-tight text-white sm:text-4xl ${!isStandalonePage ? 'mt-4' : ''}`}>
            Piesakiet juridisko konsultāciju
          </h2>
          <p className="mt-3 text-base font-light text-slate-200">
            Rakstiet mums un mēs ar Jums sazināsimies tuvāko dažu stundu laikā
          </p>
        </div>

        {/* Upper Part: Harmonious Contact Form with Dark Charcoal & Gold Accents */}
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#C9A45C]/35 bg-[#0B131E]/95 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {isSuccess ? (
            <div
              id="form-success-message"
              className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in-95 duration-300"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A45C]/15 border border-[#C9A45C]/60 text-[#C9A45C] mb-5 shadow-lg">
                <CheckCircle2 className="h-10 w-10 text-[#C9A45C]" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">
                Paldies. Jūsu ziņa ir nosūtīta.
              </h3>
              <p className="max-w-md text-sm font-light text-slate-300 mb-6">
                Mēs esam saņēmuši Jūsu pieprasījumu un tuvākajā laikā ar Jums sazināsimies uz norādīto e-pasta adresi vai tālruņa numuru.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="rounded-xl border border-[#C9A45C]/60 bg-[#0B131E] px-6 py-2.5 text-sm font-medium text-[#C9A45C] hover:bg-[#121E2E] hover:text-white transition-colors cursor-pointer"
              >
                Nosūtīt vēl vienu ziņu
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {errorMessage && (
                <div className="flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-950/60 p-4 text-xs text-rose-300">
                  <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Field: Vārds * */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold tracking-wide text-slate-200"
                  >
                    Vārds, Uzvārds <span className="text-red-400 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-300 bg-[#ECEEF2] px-4 py-3 text-sm text-[#0B1F33] font-normal placeholder-slate-500 transition-all focus:bg-white focus:border-[#C9A45C] focus:outline-none focus:ring-1 focus:ring-[#C9A45C]"
                  />
                </div>

                {/* Field: E-pasts * */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold tracking-wide text-slate-200"
                  >
                    E-pasts <span className="text-red-400 font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-300 bg-[#ECEEF2] px-4 py-3 text-sm text-[#0B1F33] font-normal placeholder-slate-500 transition-all focus:bg-white focus:border-[#C9A45C] focus:outline-none focus:ring-1 focus:ring-[#C9A45C]"
                  />
                </div>
              </div>

              {/* Field: Tālrunis */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="contact-phone"
                  className="text-xs font-semibold tracking-wide text-slate-200"
                >
                  Tālruņa numurs
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-xl border border-slate-300 bg-[#ECEEF2] px-4 py-3 text-sm text-[#0B1F33] font-normal placeholder-slate-500 transition-all focus:bg-white focus:border-[#C9A45C] focus:outline-none focus:ring-1 focus:ring-[#C9A45C]"
                />
              </div>

              {/* Field: Ziņa * */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold tracking-wide text-slate-200"
                >
                  Ziņa / Īss situācijas apraksts <span className="text-red-400 font-bold">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Lūdzu, īsi aprakstiet situāciju vai jautājumu, kurā nepieciešama juridiskā palīdzība..."
                  className="rounded-xl border border-slate-300 bg-[#ECEEF2] px-4 py-3 text-sm text-[#0B1F33] font-normal placeholder-slate-500 transition-all focus:bg-white focus:border-[#C9A45C] focus:outline-none focus:ring-1 focus:ring-[#C9A45C]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-slate-400 font-light">
                  <span className="text-red-400 font-bold">*</span> Obligāti aizpildāmie lauki
                </p>

                {/* Premium Gold Button */}
                <button
                  type="submit"
                  id="btn-submit-contact"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C9A45C] text-[#0B1F33] font-semibold border border-black px-8 py-3.5 text-sm shadow-md transition-all duration-200 hover:bg-[#D8B46E] hover:shadow-lg active:scale-98 disabled:opacity-50 cursor-pointer w-full sm:w-auto justify-center"
                >
                  <Send className="h-4 w-4 text-[#0B1F33]" />
                  <span>{isSubmitting ? 'Nosūta...' : 'Sūtīt ziņu'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Dedicated Prominent Image under Contact Form (only shown on homepage when showBottomImage is true) */}
        {showBottomImage && (
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-[#C9A45C]/40 bg-[#0B131E] shadow-2xl">
            <img
              src="/juridiskie-pakalpojumi.webp"
              alt="JustioPro juridiskie pakalpojumi un konsultācijas"
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        )}

        {/* Lower Part: Saziņas informācija with phone & email */}
        <div id="contact-info-cards" className="mx-auto mt-14 max-w-3xl">
          <div className="text-center mb-6">
            <h3 className="text-xl font-normal text-white">
              Saziņas informācija
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Phone Card */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              id="contact-card-phone"
              className="group flex items-center gap-4 rounded-2xl border border-[#C9A45C]/35 bg-[#0B131E]/95 p-6 shadow-xl backdrop-blur-md transition-colors duration-200 hover:border-[#C9A45C] hover:bg-[#121E2E] cursor-pointer"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C9A45C]/50 bg-[#C9A45C]/15 text-[#C9A45C] shadow-inner transition-colors duration-200 group-hover:border-[#C9A45C]">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light tracking-wider uppercase text-slate-300">
                  Tālrunis
                </span>
                <span className="text-lg font-semibold tracking-wide text-white transition-colors group-hover:text-[#C9A45C]">
                  {COMPANY_INFO.phoneDisplay}
                </span>
                <span className="text-[11px] text-slate-300 font-light">
                  P. - Pk. 09:00 - 18:00
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              id="contact-card-email"
              className="group flex items-center gap-4 rounded-2xl border border-[#C9A45C]/35 bg-[#0B131E]/95 p-6 shadow-xl backdrop-blur-md transition-colors duration-200 hover:border-[#C9A45C] hover:bg-[#121E2E] cursor-pointer"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C9A45C]/50 bg-[#C9A45C]/15 text-[#C9A45C] shadow-inner transition-colors duration-200 group-hover:border-[#C9A45C]">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light tracking-wider uppercase text-slate-300">
                  E-pasts
                </span>
                <span className="text-lg font-semibold tracking-wide text-white transition-colors group-hover:text-[#C9A45C]">
                  {COMPANY_INFO.email}
                </span>
                <span className="text-[11px] text-slate-300 font-light">
                  Atbildam dažu stundu laikā
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
