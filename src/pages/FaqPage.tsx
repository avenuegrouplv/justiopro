import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  PhoneCall,
  Phone,
  Mail,
  Plus,
  ArrowLeft,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionNavButtons from '../components/SectionNavButtons';
import { COMPANY_INFO } from '../data/content';
import { useTranslation } from '../translations';

export default function FaqPage() {
  const { t } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div id="faq-page" className="min-h-screen bg-[#CDD4DC] text-slate-900">
      <SEOHead
        title={t.faqPage.seoTitle}
        description={t.faqPage.seoDesc}
        canonicalPath="/buj"
        schemaType="FAQPage"
        faqs={t.faqs}
        breadcrumbs={[
          { name: t.nav.home, url: '/' },
          { name: t.faqPage.heading, url: '/buj' },
        ]}
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1F33] to-[#06121E] pt-20 sm:pt-24 pb-16 sm:pb-20 text-white border-b border-black">
        <div className="absolute inset-0 opacity-35">
          <img
            src="/juridiskas-konsultacijas-riga-1.webp"
            alt="BUJ fons"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left translate-y-[5mm]">
          {/* Top navigation & Contact Info bar under top navbar */}
          <div className="mb-6 -mt-2 sm:-mt-3 flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-xs backdrop-blur-xs transition-colors hover:bg-white/20 hover:border-[#C9A45C] hover:text-[#C9A45C]"
              aria-label={t.faqPage.backToHome}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t.faqPage.backToHome}</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 translate-y-[-1mm] sm:translate-y-[-3mm]">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/35 bg-[#06121E]/90 px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all hover:bg-[#0B1F33] hover:border-[#C9A45C] hover:text-[#C9A45C] cursor-pointer"
                title={t.nav.callAction}
                aria-label={`${t.nav.callAction} ${COMPANY_INFO.phoneDisplay}`}
              >
                <Phone className="h-4 w-4 text-[#C9A45C]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/35 bg-[#06121E]/90 px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all hover:bg-[#0B1F33] hover:border-[#C9A45C] hover:text-[#C9A45C] cursor-pointer"
                title={t.nav.emailAction}
                aria-label={`${t.nav.emailAction} ${COMPANY_INFO.email}`}
              >
                <Mail className="h-4 w-4 text-[#C9A45C]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/50 bg-[#06121E] px-4 py-1.5 text-xs sm:text-sm font-normal text-[#C9A45C]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.faqPage.badge}</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            {t.faqPage.heading}{' '}
            <span className="font-semibold text-[#C9A45C]">{t.faqPage.headingAccent}</span>
          </h1>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-3.5">
          {t.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#C9A45C] bg-white shadow-md'
                    : 'border-black/70 bg-white hover:border-[#C9A45C]/70 shadow-2xs'
                } p-5 sm:p-6`}
              >
                <button
                  id={`faq-item-toggle-${faq.id}`}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-item-answer-${faq.id}`}
                  className="flex w-full items-center justify-between text-left gap-4 focus:outline-hidden cursor-pointer group"
                >
                  <h2 className="text-base sm:text-lg font-medium text-[#0B1F33] group-hover:text-[#06121E]">
                    {faq.question}
                  </h2>

                  <div
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#C9A45C] text-[#0B1F33] border-black shadow-xs'
                        : 'bg-[#0B1F33] text-[#C9A45C] border-black/80 shadow-2xs group-hover:bg-[#122B45] group-hover:border-[#C9A45C]'
                    }`}
                  >
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-[#0B1F33]' : 'rotate-0 text-[#C9A45C]'
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-item-answer-${faq.id}`}
                    className="mt-3.5 pt-3.5 border-t border-slate-200/80 text-xs sm:text-sm font-light text-slate-700 leading-relaxed animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {/* Quick Help Card with requested text */}
          <div className="mt-10 rounded-2xl border border-black/70 bg-[#DFE3E8] p-7 sm:p-8 text-center space-y-3.5 shadow-xs">
            <h3 className="text-lg sm:text-xl font-medium text-[#0B1F33]">
              {t.faqPage.notFoundTitle}
            </h3>
            <p className="text-xs sm:text-sm font-light text-slate-700 max-w-lg mx-auto leading-relaxed">
              {t.faqPage.notFoundDesc}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                to="/kontakti"
                className="inline-flex items-center gap-2 rounded-xl border border-black/80 bg-[#0B1F33] px-6 py-2.5 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-[#122B45] hover:border-[#C9A45C]"
              >
                <PhoneCall className="h-4 w-4 text-[#C9A45C]" />
                <span>{t.faqPage.askQuestion}</span>
              </Link>
            </div>
          </div>

          <SectionNavButtons className="mt-8" />
        </div>
      </section>
    </div>
  );
}

