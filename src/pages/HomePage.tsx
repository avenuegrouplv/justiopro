import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  Lock,
  PhoneCall,
  Phone,
  Mail,
  Sparkles,
  Plus,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactFormSection from '../components/ContactFormSection';
import { PolicyModalType } from '../types';
import { COMPANY_INFO } from '../data/content';
import { useTranslation } from '../translations';

interface HomePageProps {
  onOpenLightbox: (src: string, alt: string, caption?: string) => void;
  onOpenPolicy?: (type: PolicyModalType) => void;
}

export default function HomePage({ onOpenLightbox, onOpenPolicy }: HomePageProps) {
  const { t } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const isInteractingRef = useRef<boolean>(false);
  const autoScrollTimerRef = useRef<number | null>(null);

  // 5 sets of practice areas for smooth continuous forward/backward scrolling without bounce
  const quintuplePracticeAreas = useMemo(() => [
    ...t.practiceAreas.map((a) => ({ ...a, uniqueKey: `${a.id}-s1` })),
    ...t.practiceAreas.map((a) => ({ ...a, uniqueKey: `${a.id}-s2` })),
    ...t.practiceAreas.map((a) => ({ ...a, uniqueKey: `${a.id}-s3` })),
    ...t.practiceAreas.map((a) => ({ ...a, uniqueKey: `${a.id}-s4` })),
    ...t.practiceAreas.map((a) => ({ ...a, uniqueKey: `${a.id}-s5` })),
  ], [t.practiceAreas]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pauseAutoScrollTemporarily = () => {
    isInteractingRef.current = true;
    if (autoScrollTimerRef.current !== null) {
      window.clearTimeout(autoScrollTimerRef.current);
    }
    autoScrollTimerRef.current = window.setTimeout(() => {
      isInteractingRef.current = false;
    }, 4500);
  };

  // Auto-scroll loop for mobile/tablet slideshow
  useEffect(() => {
    const autoScrollInterval = window.setInterval(() => {
      if (isInteractingRef.current) return;
      if (carouselRef.current && window.innerWidth < 1024) {
        const container = carouselRef.current;
        const firstCard = container.querySelector('[data-carousel-card]') as HTMLElement;
        if (firstCard) {
          const cardStep = firstCard.offsetWidth + 16;
          container.scrollBy({ left: cardStep, behavior: 'smooth' });
        }
      }
    }, 3600);

    return () => {
      window.clearInterval(autoScrollInterval);
      if (autoScrollTimerRef.current !== null) {
        window.clearTimeout(autoScrollTimerRef.current);
      }
    };
  }, []);

  // Initialize carousel in the middle set (set 3)
  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const firstCard = container.querySelector('[data-carousel-card]') as HTMLElement;
      const cardStep = firstCard ? firstCard.offsetWidth + 16 : 280;
      const singleSetWidth = t.practiceAreas.length * cardStep;
      container.scrollLeft = singleSetWidth * 2;
    }
  }, [t.practiceAreas.length]);

  // Normalize scroll position silently when user scrolling has fully stopped
  const handleCarouselScroll = () => {
    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      const container = carouselRef.current;
      if (!container) return;

      const firstCard = container.querySelector('[data-carousel-card]') as HTMLElement;
      const cardStep = firstCard ? firstCard.offsetWidth + 16 : 280;
      const singleSetWidth = t.practiceAreas.length * cardStep;

      // If scrolled deep into set 4 or 5, silently normalize back by 1 set without animation
      if (container.scrollLeft >= singleSetWidth * 3.5) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft -= singleSetWidth;
        container.style.scrollBehavior = 'smooth';
      } else if (container.scrollLeft <= singleSetWidth * 0.8) {
        // If scrolled backwards into set 1, silently normalize forward by 1 set
        container.style.scrollBehavior = 'auto';
        container.scrollLeft += singleSetWidth;
        container.style.scrollBehavior = 'smooth';
      }
    }, 150);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    pauseAutoScrollTemporarily();
    if (carouselRef.current) {
      const container = carouselRef.current;
      const firstCard = container.querySelector('[data-carousel-card]') as HTMLElement;
      const cardStep = firstCard ? firstCard.offsetWidth + 16 : 280;

      container.scrollBy({
        left: direction === 'right' ? cardStep : -cardStep,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="home-page" className="min-h-screen bg-[#CDD4DC] text-slate-900">
      <SEOHead
        title={t.homePage.seoTitle}
        description={t.homePage.seoDesc}
      />

      {/* 1. HERO SECTION - Full screen hero */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-[#06121E] border-b border-black min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-16 sm:pb-20 text-white"
      >
        {/* Full-width Background Image with Tuned Contrast Filter Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/juridiskas-konsultacijas.webp"
            alt="JustioPro juridiskās konsultācijas"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          {/* Balanced additional filter overlay for clear text readability */}
          <div className="absolute inset-0 bg-neutral-950/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-neutral-950/45 to-neutral-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-neutral-950/35" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between flex-1">
          {/* Top Contact Info bar under top navbar (exact match with other pages' top positioning) */}
          <div className="mb-6 -mt-2 sm:-mt-3 flex flex-wrap items-center justify-end gap-3 translate-y-[2mm]">
            <div className="flex flex-wrap items-center gap-3">
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

          {/* Centered Badge & Main Heading */}
          <div className="my-auto py-4 sm:py-8 space-y-5 text-center">
            {/* Centered Badge */}
            <div className="flex justify-center text-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C9A45C]/70 bg-[#06121E]/90 backdrop-blur-md px-5 py-2 text-sm sm:text-base font-normal tracking-normal text-[#C9A45C] shadow-xl">
                <Sparkles className="h-4 w-4 text-[#C9A45C]" />
                <span>{t.homePage.heroBadge}</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="w-full text-center py-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal tracking-tight text-white leading-[1.2] sm:leading-[1.18] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] max-w-4xl mx-auto text-center">
                {t.homePage.heroTitle}{' '}
                <span className="font-semibold text-[#C9A45C]">
                  {t.homePage.heroTitleAccent}
                </span>{' '}
                {t.homePage.heroTitleEnd}
              </h1>
            </div>
          </div>

          {/* Bottom: CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 pt-2">
            <Link
              to="/kontakti"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C9A45C] bg-[#C9A45C] px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-medium text-[#0B1F33] shadow-lg transition-all hover:bg-[#D8B46C] hover:border-[#D8B46C] active:scale-98"
            >
              <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5 text-[#0B1F33]" />
              <span>{t.homePage.requestConsultation}</span>
            </Link>

            <Link
              to="/darbibas-jomas"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-[#06121E]/75 backdrop-blur-md px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-medium text-white shadow-md transition-all hover:bg-white/20 hover:border-white active:scale-98"
            >
              <span>{t.homePage.viewPractices}</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#C9A45C]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PAR MUMS & VĒRTĪBAS SECTION */}
      <section id="about-us-section" className="py-16 sm:py-20 bg-[#CDD4DC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: 2 Static clean legal images with balanced heights and mobile optimization */}
            <div className="lg:col-span-5 flex flex-col gap-3 max-w-[340px] sm:max-w-[420px] lg:max-w-none mx-auto lg:mx-0 w-full">
              {/* Image 1: Profesionāli juridiskie pakalpojumi */}
              <div className="overflow-hidden rounded-2xl border border-black/70 bg-white shadow-xs w-full">
                <img
                  src="/profesionali-juridiskie-pakalpojumi.webp"
                  alt="Profesionāli juridiskie pakalpojumi"
                  width={600}
                  height={350}
                  className="h-56 sm:h-60 lg:h-[245px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Image 2: Juridiskās konsultācijas Rīgā un dokumentu izstrāde */}
              <div className="overflow-hidden rounded-2xl border border-black/70 bg-white shadow-xs w-full">
                <img
                  src="/juridiskas-konsultacijas-riga-1.webp"
                  alt="Juridiskās konsultācijas Rīgā un dokumentu sagatavošana"
                  width={600}
                  height={350}
                  className="h-56 sm:h-60 lg:h-[245px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right: Narrative story with full text & why outsource card */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0B1F33]/10 border border-[#0B1F33]/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#0B1F33]">
                  <Scale className="h-3.5 w-3.5 text-[#C9A45C]" />
                  <span>{t.homePage.aboutBadge}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-normal text-[#0B1F33] tracking-tight leading-tight">
                  {t.homePage.aboutHeading}
                </h2>

                <div className="space-y-2.5 text-sm sm:text-base font-light text-slate-700 leading-relaxed">
                  <p>{t.homePage.aboutP1}</p>
                  <p>{t.homePage.aboutP2}</p>
                </div>
              </div>

              {/* Note card in neutral gray */}
              <div className="rounded-2xl border border-black/25 bg-[#DFE3E8] p-4.5 sm:p-5 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B1F33]">
                  <ShieldCheck className="h-4 w-4 text-[#C9A45C]" />
                  <span>{t.homePage.outsourceTitle}</span>
                </div>
                <p className="text-xs sm:text-sm font-light text-slate-700 leading-relaxed">
                  {t.homePage.outsourceDesc}
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Value Cards: Uzticība, Profesionalitāte, Konfidencialitāte */}
          <div className="mt-8 sm:mt-10 mx-auto max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-black/70 bg-white p-5 shadow-xs transition-all hover:border-[#C9A45C] hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black bg-[#0B1F33] text-[#C9A45C] mb-3 shadow-xs">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1F33]">{t.homePage.values.trustTitle}</h3>
                  <p className="text-xs font-light text-slate-600 mt-1.5 leading-relaxed">
                    {t.homePage.values.trustDesc}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-black/70 bg-white p-5 shadow-xs transition-all hover:border-[#C9A45C] hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black bg-[#0B1F33] text-[#C9A45C] mb-3 shadow-xs">
                    <Scale className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1F33]">{t.homePage.values.profTitle}</h3>
                  <p className="text-xs font-light text-slate-600 mt-1.5 leading-relaxed">
                    {t.homePage.values.profDesc}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-black/70 bg-white p-5 shadow-xs transition-all hover:border-[#C9A45C] hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black bg-[#0B1F33] text-[#C9A45C] mb-3 shadow-xs">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1F33]">{t.homePage.values.confTitle}</h3>
                  <p className="text-xs font-light text-slate-600 mt-1.5 leading-relaxed">
                    {t.homePage.values.confDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRACTICE AREAS SUMMARY (Executive Deep Navy & Midnight Gold Atmosphere) */}
      <section
        id="practices-summary-section"
        className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-[#081524] via-[#0D2138] to-[#081524] border-y-2 border-[#C9A45C]/40 shadow-inner"
      >
        {/* Soft Radial Warm Gold & Blue Luxury Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(201,164,92,0.18),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_10%_80%,rgba(14,40,68,0.6),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_90%_20%,rgba(201,164,92,0.12),transparent_70%)] pointer-events-none" />

        {/* Delicate decorative gold accent lines */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header with Title on Left and Carousel Navigation Buttons on Right */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A45C]/70 bg-[#06121E]/90 backdrop-blur-xs px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C9A45C] mb-2.5 shadow-md">
                <Sparkles className="h-3.5 w-3.5 text-[#C9A45C]" />
                <span>{t.homePage.practicesSummaryBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                {t.homePage.practicesSummaryHeading} <span className="font-semibold text-[#C9A45C]">{t.homePage.practicesSummaryHeadingAccent}</span>
              </h2>
            </div>

            {/* Carousel Navigation Buttons (Visible on Mobile / Tablet where carousel scrolls) */}
            <div className="flex lg:hidden items-center gap-2.5 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                aria-label={t.homePage.prevService}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A45C]/60 bg-[#0B1F33] text-[#C9A45C] shadow-md transition-all hover:bg-[#C9A45C] hover:text-[#0B1F33] hover:border-black active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                aria-label={t.homePage.nextService}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A45C]/60 bg-[#0B1F33] text-[#C9A45C] shadow-md transition-all hover:bg-[#C9A45C] hover:text-[#0B1F33] hover:border-black active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 1. Desktop View: 4 cards per row */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-4.5">
            {t.practiceAreas.map((area) => (
              <div
                key={area.id}
                className="flex flex-col justify-between rounded-2xl border border-black/70 bg-white p-3.5 shadow-xl transition-all duration-200 hover:border-[#C9A45C] hover:shadow-2xl"
              >
                <div>
                  {/* Image navigating directly to practice section */}
                  <Link
                    to={`/darbibas-jomas#${area.id}`}
                    className="block overflow-hidden rounded-xl border border-black/70 mb-3 bg-slate-100 cursor-pointer group"
                    aria-label={`${t.homePage.learnMore} ${area.title}`}
                  >
                    <img
                      src={area.imageUrl}
                      alt={area.title}
                      width={400}
                      height={250}
                      className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>

                  {/* Full Title navigating directly to practice section */}
                  <Link
                    to={`/darbibas-jomas#${area.id}`}
                    className="text-xs sm:text-sm font-semibold text-[#0B1F33] hover:text-[#C9A45C] transition-colors mb-2.5 px-1 leading-snug min-h-[38px] flex items-center justify-center text-center cursor-pointer"
                  >
                    {area.title}
                  </Link>
                </div>

                {/* 'Uzzināt vairāk' Button navigating directly to practice section */}
                <div className="pt-2.5 border-t border-[#0B1F33]/15 mt-1 px-0.5">
                  <Link
                    to={`/darbibas-jomas#${area.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-black/80 bg-[#0B1F33] py-2 px-2.5 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-[#C9A45C] hover:text-[#0B1F33] hover:border-black"
                  >
                    <span>{t.homePage.learnMore}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#C9A45C]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Mobile / Tablet View: Centered active card slideshow */}
          <div className="block lg:hidden -mx-4 sm:-mx-6">
            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              onTouchStart={pauseAutoScrollTemporarily}
              onMouseEnter={pauseAutoScrollTemporarily}
              className="flex gap-4 overflow-x-auto pb-4 pt-1 px-[12vw] sm:px-[15vw] select-none scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x snap-x snap-mandatory"
            >
              {quintuplePracticeAreas.map((area) => (
                <div
                  key={area.uniqueKey}
                  data-carousel-card="true"
                  className="shrink-0 w-[76vw] sm:w-[320px] snap-center flex flex-col justify-between rounded-2xl border border-black/70 bg-white p-3.5 shadow-xl transition-colors duration-200 hover:border-[#C9A45C]"
                >
                  <div>
                    {/* Image navigating directly to practice section */}
                    <Link
                      to={`/darbibas-jomas#${area.id}`}
                      className="block overflow-hidden rounded-xl border border-black/70 mb-3 bg-slate-100 cursor-pointer"
                      aria-label={`${t.homePage.learnMore} ${area.title}`}
                    >
                      <img
                        src={area.imageUrl}
                        alt={area.title}
                        width={400}
                        height={250}
                        className="h-32 w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </Link>

                    {/* Full Title navigating directly to practice section */}
                    <Link
                      to={`/darbibas-jomas#${area.id}`}
                      className="text-xs sm:text-sm font-semibold text-[#0B1F33] hover:text-[#C9A45C] transition-colors mb-2.5 px-1 leading-snug min-h-[38px] flex items-center justify-center text-center cursor-pointer"
                    >
                      {area.title}
                    </Link>
                  </div>

                  {/* 'Uzzināt vairāk' Button navigating directly to practice section */}
                  <div className="pt-2 border-t border-[#0B1F33]/15 mt-1 px-0.5">
                    <Link
                      to={`/darbibas-jomas#${area.id}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-black/80 bg-[#0B1F33] py-2 px-2.5 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-[#C9A45C] hover:text-[#0B1F33] hover:border-black"
                    >
                      <span>{t.homePage.learnMore}</span>
                      <ArrowRight className="h-3 w-3 text-[#C9A45C]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Partner & Professional Institutional Network Card */}
          <div className="mt-8 sm:mt-10 mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-[#C9A45C]/60 bg-gradient-to-r from-[#06121E]/95 via-[#0B1F33]/90 to-[#06121E]/95 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3.5 shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A45C]/60 bg-[#0B1F33] text-[#C9A45C] shadow-md">
                    <HeartHandshake className="h-5 w-5 text-[#C9A45C]" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm sm:text-base font-semibold text-[#C9A45C] block">
                      {t.homePage.partnerTitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-light text-slate-200 leading-relaxed sm:max-w-xl lg:max-w-2xl">
                  {t.homePage.partnerDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SUMMARY */}
      <section id="faq-summary-section" className="py-14 sm:py-16 bg-[#CDD4DC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0B1F33] tracking-tight">
              {t.homePage.faqSummaryTitle}
            </h2>
          </div>

          {/* Accordion list */}
          <div className="space-y-3.5">
            {t.faqs.slice(0, 3).map((faq, index) => {
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
                    id={`faq-summary-btn-${faq.id}`}
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-summary-answer-${faq.id}`}
                    className="flex w-full items-center justify-between text-left gap-4 focus:outline-hidden cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-medium text-[#0B1F33] group-hover:text-[#06121E]">
                      {faq.question}
                    </span>

                    {/* Bespoke interactive toggle indicator button */}
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
                      id={`faq-summary-answer-${faq.id}`}
                      className="mt-4 text-xs sm:text-sm font-light text-slate-700 leading-relaxed border-t border-slate-200/80 pt-4 animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Link to all FAQs */}
          <div className="mt-8 text-center">
            <Link
              to="/buj"
              className="inline-flex items-center gap-2 rounded-xl border border-black/80 bg-[#0B1F33] px-6 py-2.5 text-xs font-medium text-white shadow-2xs transition-all hover:bg-[#122B45] hover:border-[#C9A45C]"
            >
              <span>{t.homePage.readAllFaq}</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#C9A45C]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM & INFO SECTION (With prominent image on homepage) */}
      <ContactFormSection id="home-contact-section" showBottomImage={true} />
    </div>
  );
}

