import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Scale,
  Compass,
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
import { ImageWithLightbox } from '../components/LightboxModal';
import { PolicyModalType } from '../types';
import {
  COMPANY_INFO,
  PRACTICE_AREAS,
  FAQS,
  IMAGES,
} from '../data/content';

interface HomePageProps {
  onOpenLightbox: (src: string, alt: string, caption?: string) => void;
  onOpenPolicy?: (type: PolicyModalType) => void;
}

// 5 sets of practice areas for smooth continuous forward/backward scrolling without bounce
const QUINTUPLE_PRACTICE_AREAS = [
  ...PRACTICE_AREAS.map((a) => ({ ...a, uniqueKey: `${a.id}-s1` })),
  ...PRACTICE_AREAS.map((a) => ({ ...a, uniqueKey: `${a.id}-s2` })),
  ...PRACTICE_AREAS.map((a) => ({ ...a, uniqueKey: `${a.id}-s3` })),
  ...PRACTICE_AREAS.map((a) => ({ ...a, uniqueKey: `${a.id}-s4` })),
  ...PRACTICE_AREAS.map((a) => ({ ...a, uniqueKey: `${a.id}-s5` })),
];

export default function HomePage({ onOpenLightbox, onOpenPolicy }: HomePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Initialize carousel in the middle set (set 3)
  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const firstCard = container.querySelector('[data-carousel-card]') as HTMLElement;
      const cardStep = firstCard ? firstCard.offsetWidth + 16 : 256;
      const singleSetWidth = PRACTICE_AREAS.length * cardStep;
      container.scrollLeft = singleSetWidth * 2;
    }
  }, []);

  // Normalize scroll position silently when user scrolling has fully stopped
  const handleCarouselScroll = () => {
    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      const container = carouselRef.current;
      if (!container) return;

      const firstCard = container.querySelector('[data-carousel-card]') as HTMLElement;
      const cardStep = firstCard ? firstCard.offsetWidth + 16 : 256;
      const singleSetWidth = PRACTICE_AREAS.length * cardStep;

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
    if (carouselRef.current) {
      const container = carouselRef.current;
      const firstCard = container.querySelector('[data-carousel-card]') as HTMLElement;
      const cardStep = firstCard ? firstCard.offsetWidth + 16 : 256;

      container.scrollBy({
        left: direction === 'right' ? cardStep : -cardStep,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="home-page" className="min-h-screen bg-[#CDD4DC] text-slate-900">
      <SEOHead
        title="JustioPro – Juridiskie Pakalpojumi"
        description="JustioPro nodrošina juridiskos pakalpojumus fiziskām un juridiskām personām: Līgumu sagatavošana, Komerctiesības, Nekustamais īpašums, Pārstāvība tiesā, Parādu piedziņa un Bezmaksas konsultācijas. Zvaniet: 26841758."
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
          <div className="mb-6 -mt-2 sm:-mt-3 flex flex-wrap items-center justify-end gap-3">
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

          {/* Centered Badge & Main Heading */}
          <div className="my-auto py-4 sm:py-8 space-y-5 text-center">
            {/* Centered Badge */}
            <div className="flex justify-center text-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C9A45C]/70 bg-[#06121E]/90 backdrop-blur-md px-5 py-2 text-sm sm:text-base font-normal tracking-normal text-[#C9A45C] shadow-xl">
                <Sparkles className="h-4 w-4 text-[#C9A45C]" />
                <span>Juridiskie pakalpojumi & Konsultācijas</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="w-full text-center py-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal tracking-tight text-white leading-[1.2] sm:leading-[1.18] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] max-w-4xl mx-auto text-center">
                Profesionāls juridiskais atbalsts{' '}
                <span className="font-semibold text-[#C9A45C]">
                  Jūsu biznesa izaugsmei
                </span>{' '}
                un jebkurai ikdienā risināmai situācijai
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
              <span>Pieteikt konsultāciju</span>
            </Link>

            <Link
              to="/darbibas-jomas"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-[#06121E]/75 backdrop-blur-md px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-medium text-white shadow-md transition-all hover:bg-white/20 hover:border-white active:scale-98"
            >
              <span>Skatīt darbības jomas</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#C9A45C]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PAR MUMS & VĒRTĪBAS SECTION */}
      <section id="about-us-section" className="py-16 sm:py-20 bg-[#CDD4DC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left: 2 Static clean legal images & standard card */}
            <div className="lg:col-span-5 space-y-4">
              {/* Image 1: Profesionāli juridiskie pakalpojumi */}
              <div className="overflow-hidden rounded-2xl border border-black/70 bg-white shadow-xs">
                <img
                  src="/profesionali-juridiskie-pakalpojumi.webp"
                  alt="Profesionāli juridiskie pakalpojumi"
                  className="h-56 sm:h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Image 2: Juridiskās konsultācijas Rīgā un dokumentu izstrāde */}
              <div className="overflow-hidden rounded-2xl border border-black/70 bg-white shadow-xs">
                <img
                  src="/juridiskas-konsultacijas-riga-1.webp"
                  alt="Juridiskās konsultācijas Rīgā un dokumentu sagatavošana"
                  className="h-56 sm:h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Mūsu standarts card */}
              <div className="rounded-2xl border border-[#C9A45C]/60 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
                  <Award className="h-4 w-4 text-[#C9A45C]" />
                  <span>Mūsu standarts</span>
                </div>
                <p className="text-xs font-light text-slate-800 leading-relaxed">
                  Vienmēr rīkoties klienta labākajās interesēs, ievērojot konfidencialitāti, augstākos ētikas un profesionālos standartus.
                </p>
              </div>
            </div>

            {/* Right: Narrative story, why outsource card & 3 value cards (aligned at top with first image) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0B1F33]/10 border border-[#0B1F33]/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#0B1F33]">
                <Scale className="h-3.5 w-3.5 text-[#C9A45C]" />
                <span>Par mums</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-normal text-[#0B1F33] tracking-tight leading-tight">
                Profesionāls juridiskais atbalsts un individuāla pieeja
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base font-light text-slate-700 leading-relaxed">
                <p>
                  Mēs sniedzam juridiskos pakalpojumus gan fiziskajām, gan juridiskajām personām, palīdzot labāk orientēties dažādos tiesību jautājumos, sagatavot nepieciešamos līgumus vai risināt juridiska rakstura situācijas.
                </p>
                <p>
                  Mūsu pamatprincips ir vienmēr rīkoties klienta labākajās interesēs, ievērojot konfidencialitāti, augstākos ētikas un profesionālos standartus. Sniedzam klientam reālu situācijas novērtējumu pirms lietas uzsākšanas un panākam labvēlīgāko iznākumu.
                </p>
              </div>

              {/* Note card in neutral gray */}
              <div className="rounded-2xl border border-black/25 bg-[#DFE3E8] p-4.5 sm:p-5 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B1F33]">
                  <ShieldCheck className="h-4 w-4 text-[#C9A45C]" />
                  <span>Kāpēc izvēlēties juridisko ārpakalpojumu?</span>
                </div>
                <p className="text-xs sm:text-sm font-light text-slate-700 leading-relaxed">
                  Juridiskais ārpakalpojums sniedz elastīgu, profesionālu juridisko atbalstu tieši tad, kad tas ir nepieciešams – bez pastāvīgām darba vietas uzturēšanas izmaksām, profesionālu un ar augstu atbildību par katru sagatavoto dokumentu.
                </p>
              </div>

              {/* 3 Core Value Cards: Uzticība, Profesionalitāte, Konfidencialitāte */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="rounded-xl border border-black/70 bg-white p-4 sm:p-4.5 shadow-xs transition-all hover:border-[#C9A45C]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black bg-[#0B1F33] text-[#C9A45C] mb-2.5">
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-[#0B1F33]">Uzticība</h3>
                  <p className="text-xs font-light text-slate-600 mt-1 leading-relaxed">
                    Godprātīga, atklāta un uz ilgtermiņa sadarbību vērsta pieeja katram klientam un situācijai.
                  </p>
                </div>

                <div className="rounded-xl border border-black/70 bg-white p-4 sm:p-4.5 shadow-xs transition-all hover:border-[#C9A45C]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black bg-[#0B1F33] text-[#C9A45C] mb-2.5">
                    <Scale className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-[#0B1F33]">Profesionalitāte</h3>
                  <p className="text-xs font-light text-slate-600 mt-1 leading-relaxed">
                    Ilggadējā pieredzē iegūtās juridiskās zināšanas un precizitāte dokumentu izstrādē.
                  </p>
                </div>

                <div className="rounded-xl border border-black/70 bg-white p-4 sm:p-4.5 shadow-xs transition-all hover:border-[#C9A45C]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black bg-[#0B1F33] text-[#C9A45C] mb-2.5">
                    <Lock className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-[#0B1F33]">Konfidencialitāte</h3>
                  <p className="text-xs font-light text-slate-600 mt-1 leading-relaxed">
                    Stingra profesionālā noslēpuma ievērošana un klienta datu pilnīga aizsardzība.
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
                <span>Pakalpojumu klāsts</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                Darbības <span className="font-semibold text-[#C9A45C]">jomas</span>
              </h2>
            </div>

            {/* Carousel Navigation Buttons (Visible on Mobile / Tablet where carousel scrolls) */}
            <div className="flex lg:hidden items-center gap-2.5 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                aria-label="Iepriekšējais pakalpojums"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A45C]/60 bg-[#0B1F33] text-[#C9A45C] shadow-md transition-all hover:bg-[#C9A45C] hover:text-[#0B1F33] hover:border-black active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                aria-label="Nākamais pakalpojums"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A45C]/60 bg-[#0B1F33] text-[#C9A45C] shadow-md transition-all hover:bg-[#C9A45C] hover:text-[#0B1F33] hover:border-black active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 1. Desktop View: 5 cards in Top Row, 5 cards in Bottom Row */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-3.5">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.id}
                className="flex flex-col justify-between rounded-2xl border border-black/70 bg-white p-3 shadow-xl transition-colors duration-200 hover:border-[#C9A45C]"
              >
                <div>
                  {/* Image navigating directly to practice section */}
                  <Link
                    to={`/darbibas-jomas#${area.id}`}
                    className="block overflow-hidden rounded-xl border border-black/70 mb-2.5 bg-slate-100 cursor-pointer"
                  >
                    <img
                      src={area.imageUrl}
                      alt={area.title}
                      className="h-28 w-full object-cover"
                      loading="lazy"
                    />
                  </Link>

                  {/* Full Title navigating directly to practice section */}
                  <Link
                    to={`/darbibas-jomas#${area.id}`}
                    className="text-xs font-semibold text-[#0B1F33] hover:text-[#C9A45C] transition-colors mb-2 px-1 leading-snug min-h-[36px] flex items-center justify-center text-center cursor-pointer"
                  >
                    {area.title}
                  </Link>
                </div>

                {/* 'Uzzināt vairāk' Button navigating directly to practice section */}
                <div className="pt-2 border-t border-[#0B1F33]/15 mt-1 px-0.5">
                  <Link
                    to={`/darbibas-jomas#${area.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-black/80 bg-[#0B1F33] py-2 px-2 text-[11px] font-semibold text-white shadow-2xs transition-colors hover:bg-[#C9A45C] hover:text-[#0B1F33] hover:border-black"
                  >
                    <span>Uzzināt vairāk</span>
                    <ArrowRight className="h-3 w-3 text-[#C9A45C]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Mobile / Tablet View: Horizontally Scrollable Continuous Carousel */}
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex lg:hidden gap-4 overflow-x-auto pb-4 pt-1 select-none scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {QUINTUPLE_PRACTICE_AREAS.map((area) => (
              <div
                key={area.uniqueKey}
                data-carousel-card="true"
                className="shrink-0 w-[240px] sm:w-[calc((100%-16px*2)/3)] flex flex-col justify-between rounded-2xl border border-black/70 bg-white p-3.5 shadow-xl transition-colors duration-200 hover:border-[#C9A45C]"
              >
                <div>
                  {/* Image navigating directly to practice section */}
                  <Link
                    to={`/darbibas-jomas#${area.id}`}
                    className="block overflow-hidden rounded-xl border border-black/70 mb-3 bg-slate-100 cursor-pointer"
                  >
                    <img
                      src={area.imageUrl}
                      alt={area.title}
                      className="h-32 w-full object-cover"
                      loading="lazy"
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
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-black/80 bg-[#0B1F33] py-2 px-2.5 text-[11px] sm:text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-[#C9A45C] hover:text-[#0B1F33] hover:border-black"
                  >
                    <span>Uzzināt vairāk</span>
                    <ArrowRight className="h-3 w-3 text-[#C9A45C]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SUMMARY */}
      <section id="faq-summary-section" className="py-14 sm:py-16 bg-[#CDD4DC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0B1F33] tracking-tight">
              Biežāk uzdotie jautājumi
            </h2>
          </div>

          {/* Accordion list */}
          <div className="space-y-3.5">
            {FAQS.slice(0, 3).map((faq, index) => {
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
                    className="flex w-full items-center justify-between text-left gap-4 focus:outline-none cursor-pointer group"
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
                    <div className="mt-4 text-xs sm:text-sm font-light text-slate-700 leading-relaxed border-t border-slate-200/80 pt-4 animate-in fade-in duration-200">
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
              <span>Lasīt visus BUJ</span>
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
