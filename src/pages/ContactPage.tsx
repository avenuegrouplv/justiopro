import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Phone, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactFormSection from '../components/ContactFormSection';
import SectionNavButtons from '../components/SectionNavButtons';
import { IMAGES, COMPANY_INFO } from '../data/content';

export default function ContactPage() {
  return (
    <div id="contact-page" className="min-h-screen bg-[#CDD4DC] text-slate-900">
      <SEOHead
        title="Kontakti"
        description="Sazinieties ar JustioPro juridisko biroju. Tālrunis: 26841758, E-pasts: info@justiopro.lv. Juridiskās konsultācijas fiziskām un juridiskām personām klātienē vai attālināti."
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1F33] to-[#06121E] pt-20 sm:pt-24 pb-16 sm:pb-20 text-white border-b border-black">
        <div className="absolute inset-0 opacity-15">
          <img
            src={IMAGES.officeModern}
            alt="Kontaktu fons"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
          {/* Top navigation & Contact Info bar under top navbar (lifted closer to top navbar) */}
          <div className="mb-6 -mt-2 sm:-mt-3 flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-xs backdrop-blur-xs transition-colors hover:bg-white/20 hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Uz Sākumu</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/35 bg-[#06121E]/90 px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all hover:bg-[#0B1F33] hover:border-[#C9A45C] hover:text-[#C9A45C] cursor-pointer"
                title="Zvanīt"
              >
                <Phone className="h-4 w-4 text-[#C9A45C]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/35 bg-[#06121E]/90 px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all hover:bg-[#0B1F33] hover:border-[#C9A45C] hover:text-[#C9A45C] cursor-pointer"
                title="Rakstīt e-pastu"
              >
                <Mail className="h-4 w-4 text-[#C9A45C]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/50 bg-[#06121E] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#C9A45C]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Saziņas iespējas</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            Sazinieties ar <span className="font-semibold text-[#C9A45C]">mums</span>
          </h1>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <ContactFormSection id="dedicated-contact-section" isStandalonePage />

      {/* Bottom navigation */}
      <div className="py-10 bg-[#CDD4DC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionNavButtons />
        </div>
      </div>
    </div>
  );
}
