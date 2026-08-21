import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Sparkles,
  ArrowLeft,
  Phone,
  Mail,
  ShoppingCart,
  Globe,
  PhoneCall,
  Shield,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_INFO } from '../data/content';
import documentsData from '../data/documents.json';
import { LegalDocumentItem } from '../types';
import DocumentCheckoutModal from '../components/DocumentCheckoutModal';
import SectionNavButtons from '../components/SectionNavButtons';

interface DocumentSamplesPageProps {
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export default function DocumentSamplesPage({ onOpenLightbox }: DocumentSamplesPageProps) {
  const [selectedDocumentForCheckout, setSelectedDocumentForCheckout] =
    useState<LegalDocumentItem | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const documents: LegalDocumentItem[] = documentsData as LegalDocumentItem[];

  const handleOpenCheckout = (doc: LegalDocumentItem) => {
    setSelectedDocumentForCheckout(doc);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setSelectedDocumentForCheckout(null);
  };

  return (
    <div id="document-samples-page" className="min-h-screen bg-[#CDD4DC] text-slate-900">
      <SEOHead
        title="Dokumentu paraugi un līgumi | JustioPro"
        description="Pārbaudīti un juridiski sagatavoti līgumu paraugi: nekustamā īpašuma pirkums, īre, būvdarbi, SIA un biedrību reģistrācija. Tūlītējs drošs norēķins."
      />

      {/* Hero Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1F33] to-[#06121E] pt-20 sm:pt-24 pb-16 sm:pb-20 text-white border-b border-black">
        <div className="absolute inset-0 opacity-35">
          <img
            src="/profesionali-juridiskie-pakalpojumi.webp"
            alt="Dokumentu paraugu fons"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left translate-y-[5mm]">
          {/* Top navigation & Contact Info bar */}
          <div className="mb-6 -mt-2 sm:-mt-3 flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-xs backdrop-blur-xs transition-colors hover:bg-white/20 hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Uz Sākumu</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 translate-y-[-3mm]">
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
            <span>Līgumi & Juridiskie dokumenti</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            Dokumentu <span className="font-semibold text-[#C9A45C]">paraugi</span>
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 bg-[#CDD4DC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Documents Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 md:gap-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                id={`doc-card-${doc.id}`}
                onClick={() => handleOpenCheckout(doc)}
                className="rounded-2xl border border-black/70 bg-white p-3.5 sm:p-4 flex flex-col h-full shadow-md hover:border-[#C9A45C] hover:shadow-lg transition-all duration-300 cursor-pointer relative group"
              >
                {/* Top Row: Icon & Category Tag */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  {doc.isService ? (
                    <div className="w-7 h-9 rounded-md bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0 shadow-2xs">
                      <Globe className="h-4 w-4" />
                    </div>
                  ) : (
                    <div className="relative w-7 h-9 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-serif font-black text-xs shadow-2xs shrink-0 overflow-hidden">
                      <div className="absolute top-0 right-0 w-2 h-2 bg-blue-200 border-l border-b border-blue-300"></div>
                      <span>W</span>
                    </div>
                  )}

                  <span
                    className="text-[9px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md truncate max-w-[95px] border border-slate-200"
                    title={doc.category}
                  >
                    {doc.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-semibold text-[#0B1F33] mb-2 leading-snug group-hover:text-[#C9A45C] transition-colors line-clamp-3 min-h-[42px]">
                  {doc.title}
                </h3>

                {/* Bottom Area: Price & Action Button */}
                <div className="mt-auto pt-3 border-t border-slate-200 flex flex-col gap-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] text-slate-500 font-medium uppercase">Cena:</span>
                    <div className="text-base sm:text-lg font-bold text-[#0B1F33]">
                      €{doc.price.toFixed(2)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenCheckout(doc);
                    }}
                    className="w-full rounded-xl border border-black/70 bg-[#0B1F33] hover:bg-[#C9A45C] text-white hover:text-[#0B1F33] font-semibold py-2 px-3 text-[10px] sm:text-xs tracking-wider flex items-center justify-center gap-1.5 uppercase transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                    <span>IEGĀDĀTIES</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Need Custom Document Banner */}
          <div className="mt-12 rounded-2xl border border-black/70 bg-white p-6 sm:p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
                  <Shield className="h-4 w-4 text-[#C9A45C]" />
                  <span>Individuāla līgumu izstrāde</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-[#0B1F33]">
                  Nepieciešams <span className="font-semibold text-[#0B1F33]">nestandarta līgums</span> vai specifiska juridiskā analīze?
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  Mūsu komandas juristi izstrādās individuālu līguma projektu atbilstoši tieši Jūsu darījuma nosacījumiem, kā arī nodrošinās esošu līgumu juridisko ekspertīzi un risku izvērtēšanu.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/kontakti"
                  className="inline-flex items-center gap-2 rounded-xl border border-black/70 bg-[#0B1F33] hover:bg-[#C9A45C] text-white hover:text-[#0B1F33] px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4 text-[#C9A45C]" />
                  <span>Sazināties ar juristu</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Section Navigation Buttons */}
          <SectionNavButtons className="mt-10" />
        </div>
      </section>

      {/* Stripe Document Checkout Modal */}
      <DocumentCheckoutModal
        document={selectedDocumentForCheckout}
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />
    </div>
  );
}
