import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, PhoneCall } from 'lucide-react';
import { useTranslation, Language } from '../translations';

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'LV', label: 'Latviešu', flag: '🇱🇻' },
  { code: 'ENG', label: 'English', flag: '🇬🇧' },
  { code: 'RUS', label: 'Русский', flag: '🇷🇺' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const selectedLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.practices, path: '/darbibas-jomas' },
    { label: t.nav.faq, path: '/buj' },
    { label: t.nav.contacts, path: '/kontakti' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangOpen(false);
  }, [location]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#CDD4DC]/95 backdrop-blur-md shadow-md border-b border-[#0B1F33]/15 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Company Logo */}
        <Link
          to="/"
          id="header-logo"
          aria-label="JustioPro Sākumlapa"
          className="flex items-center focus:outline-hidden py-1 transition-transform hover:opacity-90"
        >
          <img
            src="/Justiopro-logo.webp"
            alt="JustioPro Juridiskie Pakalpojumi Logo"
            width={270}
            height={58}
            fetchPriority="high"
            decoding="async"
            className={`h-[52px] sm:h-[58px] w-auto max-w-[270px] object-contain origin-left transition-all duration-300 ${
              isScrolled ? 'brightness-100 drop-shadow-xs' : 'brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
            }`}
          />
        </Link>

        {/* Desktop Navigation & Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {/* 1. Navigation Menu with uppercase uniform lettering */}
          <nav id="desktop-navigation" className="flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                id={`nav-link-${item.path.replace('/', '') || 'home'}`}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[14px] font-semibold tracking-wider uppercase transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#0B1F33]'
                        : 'text-slate-700 hover:text-[#0B1F33]'
                      : isActive
                        ? 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]'
                        : 'text-white/85 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] rounded-full bg-[#C9A45C] shadow-[0_0_8px_rgba(201,164,92,0.6)]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* 2. Highlighted CTA Button with uppercase uniform lettering */}
          <Link
            to="/kontakti"
            id="header-cta-button"
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-bold tracking-wider uppercase transition-all duration-200 active:scale-98 ${
              isScrolled
                ? 'border border-black/80 bg-[#0B1F33] text-white shadow-xs hover:bg-[#122B45] hover:border-black'
                : 'border border-[#C9A45C] bg-[#C9A45C] text-[#0B1F33] shadow-lg hover:bg-[#D8B46C] hover:border-[#D8B46C]'
            }`}
          >
            <PhoneCall className={`h-4 w-4 ${isScrolled ? 'text-[#C9A45C]' : 'text-[#0B1F33]'}`} />
            <span>{t.nav.contactBtn}</span>
          </Link>

          {/* 3. Language Selector Dropdown */}
          <div className="relative">
            <button
              id="language-dropdown-button"
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-all focus:outline-none ${
                isScrolled
                  ? 'border border-slate-300 bg-white/90 text-slate-800 shadow-2xs backdrop-blur-sm hover:border-black hover:bg-white'
                  : 'border border-white/30 bg-black/40 text-white shadow-md backdrop-blur-md hover:border-white/50 hover:bg-black/60'
              }`}
              aria-expanded={isLangOpen}
              aria-haspopup="true"
            >
              <span>{selectedLang.flag}</span>
              <span className="font-bold">{selectedLang.code}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isScrolled ? 'text-slate-500' : 'text-white/80'
                } ${isLangOpen ? 'rotate-180 text-[#C9A45C]' : ''}`}
              />
            </button>

            {isLangOpen && (
              <div
                id="language-dropdown-menu"
                className="absolute right-0 mt-2 w-40 rounded-xl border border-black/20 bg-white p-1.5 shadow-xl backdrop-blur-lg z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-slate-400">
                  {t.nav.languageTitle}
                </div>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs transition-colors cursor-pointer ${
                      language === lang.code
                        ? 'bg-[#0B1F33]/10 font-bold text-[#0B1F33]'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base leading-none">{lang.flag}</span>
                      <span className="font-semibold uppercase tracking-wider">{lang.code}</span>
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Button with relative popup */}
          <div className="relative">
            <button
              id="mobile-language-button"
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium cursor-pointer ${
                isScrolled
                  ? 'border border-slate-300 bg-white/90 text-slate-800'
                  : 'border border-white/30 bg-black/40 text-white backdrop-blur-md'
              }`}
            >
              <span>{selectedLang.flag}</span>
              <span className="font-semibold">{selectedLang.code}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div
                id="mobile-language-dropdown-menu"
                className="absolute right-0 mt-2 w-36 rounded-xl border border-black/20 bg-white p-1.5 shadow-xl backdrop-blur-lg z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs transition-colors cursor-pointer ${
                      language === lang.code
                        ? 'bg-[#0B1F33]/10 font-bold text-[#0B1F33]'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="text-base leading-none">{lang.flag}</span>
                      <span className="font-semibold">{lang.code}</span>
                    </span>
                    <span className="text-[10px] font-medium text-slate-500">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsLangOpen(false);
            }}
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors cursor-pointer ${
              isScrolled
                ? 'border border-slate-300 bg-white/90 text-[#0B1F33] shadow-2xs hover:bg-slate-100 hover:border-black'
                : 'border border-white/30 bg-black/40 text-white shadow-md backdrop-blur-md hover:bg-black/60'
            }`}
            aria-label="Atvērt izvēlni"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="border-b border-black/10 bg-[#F0F4F8] px-4 pt-3 pb-6 shadow-xl lg:hidden animate-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-4 py-3 text-sm font-bold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'bg-[#0B1F33] text-white'
                      : 'text-slate-800 hover:bg-slate-200/70 hover:text-[#0B1F33]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
            <Link
              to="/kontakti"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-[#0B1F33] py-3 text-center text-sm font-bold tracking-wider uppercase text-white shadow-xs"
            >
              <PhoneCall className="h-4 w-4 text-[#C9A45C]" />
              <span>{t.nav.contactBtn}</span>
            </Link>

            {/* Mobile language options */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium cursor-pointer ${
                    language === lang.code
                      ? 'bg-[#0B1F33] text-white'
                      : 'bg-white text-slate-700 border border-slate-300'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.code}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
