import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileText,
  Home,
  Building2,
  Users,
  ShieldAlert,
  Coins,
  Scale,
  TrendingUp,
  Globe2,
  HeartHandshake,
  Sparkles,
  PhoneCall,
  Phone,
  Mail,
  BadgePercent,
  ArrowLeft,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionNavButtons from '../components/SectionNavButtons';
import { ImageWithLightbox } from '../components/LightboxModal';
import { PRACTICE_AREAS, IMAGES, COMPANY_INFO } from '../data/content';

interface PracticesPageProps {
  onOpenLightbox: (src: string, alt: string, caption?: string) => void;
}

const renderPracticeIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileText':
      return <FileText className="h-5 w-5" />;
    case 'Home':
      return <Home className="h-5 w-5" />;
    case 'Building2':
      return <Building2 className="h-5 w-5" />;
    case 'Users':
      return <Users className="h-5 w-5" />;
    case 'ShieldAlert':
      return <ShieldAlert className="h-5 w-5" />;
    case 'Coins':
      return <Coins className="h-5 w-5" />;
    case 'Scale':
      return <Scale className="h-5 w-5" />;
    case 'TrendingUp':
      return <TrendingUp className="h-5 w-5" />;
    case 'Globe2':
      return <Globe2 className="h-5 w-5" />;
    case 'HeartHandshake':
      return <HeartHandshake className="h-5 w-5" />;
    default:
      return <Scale className="h-5 w-5" />;
  }
};

export default function PracticesPage({ onOpenLightbox }: PracticesPageProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.history.replaceState(null, '', `#${id}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="practices-page" className="min-h-screen bg-[#CDD4DC] text-slate-900">
      <SEOHead
        title="Darbības Jomas"
        description="JustioPro specializācija un juridiskie pakalpojumi: Līgumu sagatavošana, Komerctiesības, Nekustamais īpašums, Mantojuma tiesības, Maksātnespēja, Parādu piedziņa, Pārstāvība tiesā, Konkurences tiesības/M&A, Pārrobežu strīdi, Bezmaksas konsultācijas."
      />

      {/* Hero Header Banner with deep Navy #0B1F33, #06121E and Gold #C9A45C */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1F33] to-[#06121E] pt-20 sm:pt-24 pb-16 sm:pb-20 text-white border-b border-black">
        <div className="absolute inset-0 opacity-15">
          <img
            src={IMAGES.officeModern}
            alt="Darbības jomas fons"
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
            <span>Juridiskie pakalpojumi & Konsultācijas</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            Darbības <span className="font-semibold text-[#C9A45C]">jomas</span>
          </h1>
        </div>
      </section>

      {/* Summary Directory with Executive Deep Navy & Gold Atmosphere */}
      <section className="relative overflow-hidden py-10 bg-gradient-to-b from-[#081524] via-[#0D2138] to-[#081524] border-b border-[#C9A45C]/35">
        {/* Ambient Gold Illumination */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(201,164,92,0.18),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PRACTICE_AREAS.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                onClick={(e) => handleSmoothScroll(e, area.id)}
                className="flex items-center gap-2 rounded-xl border border-black/70 bg-white p-3 text-xs font-semibold text-[#0B1F33] shadow-md transition-all hover:bg-[#C9A45C] hover:text-[#0B1F33] hover:border-black group cursor-pointer"
              >
                <span className="h-2 w-2 rounded-full bg-[#C9A45C] group-hover:bg-[#0B1F33] shrink-0 transition-colors" />
                <span className="truncate">
                  {area.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Practice Areas List */}
      <section className="relative overflow-hidden py-12 sm:py-16 bg-[#CDD4DC]">

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {PRACTICE_AREAS.map((area, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={area.id}
                id={area.id}
                className={`scroll-mt-28 rounded-2xl border border-black/70 ${
                  area.isSpecial
                    ? 'bg-[#FCFBF8] ring-1 ring-[#C9A45C]/60'
                    : 'bg-white'
                } p-5 sm:p-7 lg:p-8 shadow-xs transition-all duration-200 hover:shadow-md hover:border-[#C9A45C]/80`}
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                  {/* Content Details */}
                  <div
                    className={`space-y-4 ${
                      isEven
                        ? 'lg:col-span-8 lg:order-1'
                        : 'lg:col-span-8 lg:order-2'
                    }`}
                  >
                    {/* Title without tag */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-medium text-[#0B1F33] tracking-tight leading-snug">
                        {area.title}
                      </h2>
                    </div>

                    {/* Paragraphs with compact, elegant typography */}
                    <div className="space-y-2.5 text-xs sm:text-sm font-light text-slate-700 leading-relaxed">
                      {area.fullDesc.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Bullet Points */}
                    {area.bulletPoints && area.bulletPoints.length > 0 && (
                      <div className="rounded-xl bg-[#F0F2F5] p-4 sm:p-5 border border-black/10 space-y-2.5">
                        {area.bulletPointsTitle && (
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0B1F33]">
                            {area.bulletPointsTitle}
                          </h3>
                        )}
                        <ul className={`grid grid-cols-1 ${area.bulletPoints.length >= 3 ? 'sm:grid-cols-2 md:grid-cols-3' : 'sm:grid-cols-2'} gap-2 sm:gap-2.5`}>
                          {area.bulletPoints.map((point, bpIdx) => (
                            <li
                              key={bpIdx}
                              className="flex items-start gap-2 text-xs font-light text-slate-800 leading-relaxed"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C] border border-black/40 shrink-0 mt-1.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* SubSection */}
                    {area.subSection && (
                      <div className="rounded-xl border border-[#C9A45C]/50 bg-[#FAF8F5] p-4 sm:p-5 space-y-2.5">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B1F33]">
                          <BadgePercent className="h-4 w-4 text-[#C9A45C]" />
                          <h3>{area.subSection.title}</h3>
                        </div>
                        <div className="space-y-2 text-xs font-light text-slate-800 leading-relaxed">
                          {area.subSection.description.map((desc, dIdx) => (
                            <p key={dIdx}>{desc}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action button */}
                    <div className="pt-1">
                      <Link
                        to="/kontakti"
                        className="inline-flex items-center gap-2 rounded-xl border border-black/80 bg-[#0B1F33] px-4 py-2 text-xs font-medium text-white shadow-2xs transition-all hover:bg-[#122B45] hover:border-[#C9A45C]"
                      >
                        <PhoneCall className="h-3.5 w-3.5 text-[#C9A45C]" />
                        <span>Pieteikt konsultāciju</span>
                      </Link>
                    </div>
                  </div>

                  {/* Image Card - Clean Architecture / Legal Document photo */}
                  <div
                    className={`overflow-hidden rounded-xl border border-black/70 bg-slate-100 shadow-xs ${
                      isEven
                        ? 'lg:col-span-4 lg:order-2'
                        : 'lg:col-span-4 lg:order-1'
                    }`}
                  >
                    <img
                      src={area.imageUrl}
                      alt={area.title}
                      className="h-56 sm:h-64 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Centered navigation buttons at bottom */}
          <SectionNavButtons className="mt-8" />
        </div>
      </section>
    </div>
  );
}
