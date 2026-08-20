import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  X,
  ShieldCheck,
  Cookie,
  ExternalLink,
  CheckCircle2,
  Lock,
  BarChart3,
  Sliders,
  Megaphone,
  Mail,
  Phone,
  Database,
  Scale,
  FileText,
  UserCheck,
} from 'lucide-react';
import { PolicyModalType } from '../types';
import { useTranslation } from '../translations';

interface PolicyModalProps {
  type: PolicyModalType;
  onClose: () => void;
}

export default function PolicyModal({ type, onClose }: PolicyModalProps) {
  const { t } = useTranslation();
  const [analyticsCookies, setAnalyticsCookies] = useState<boolean>(() => {
    const saved = localStorage.getItem('justiopro_cookie_analytics');
    return saved !== null ? saved === 'true' : true; // Default ON
  });
  const [functionalCookies, setFunctionalCookies] = useState<boolean>(() => {
    const saved = localStorage.getItem('justiopro_cookie_functional');
    return saved !== null ? saved === 'true' : true; // Default ON
  });
  const [marketingCookies, setMarketingCookies] = useState<boolean>(() => {
    const saved = localStorage.getItem('justiopro_cookie_marketing');
    return saved !== null ? saved === 'true' : false; // Default OFF
  });
  const [saveToast, setSaveToast] = useState<boolean>(false);

  const handleToggleAnalytics = () => {
    setAnalyticsCookies((prev) => !prev);
  };

  const handleToggleFunctional = () => {
    setFunctionalCookies((prev) => !prev);
  };

  const handleToggleMarketing = () => {
    setMarketingCookies((prev) => !prev);
  };

  const handleSaveSelection = () => {
    localStorage.setItem('cookie_consent', 'custom');
    localStorage.setItem('justiopro_cookie_analytics', String(analyticsCookies));
    localStorage.setItem('justiopro_cookie_functional', String(functionalCookies));
    localStorage.setItem('justiopro_cookie_marketing', String(marketingCookies));
    window.dispatchEvent(new Event('cookie_consent_updated'));
    triggerToast();
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const handleAcceptAllInModal = () => {
    setAnalyticsCookies(true);
    setFunctionalCookies(true);
    setMarketingCookies(true);
    localStorage.setItem('cookie_consent', 'all');
    localStorage.setItem('justiopro_cookie_analytics', 'true');
    localStorage.setItem('justiopro_cookie_functional', 'true');
    localStorage.setItem('justiopro_cookie_marketing', 'true');
    window.dispatchEvent(new Event('cookie_consent_updated'));
    triggerToast();
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const triggerToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2200);
  };

  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? t.policyModal.privacyTitle : t.policyModal.cookiesTitle;
  const subtitle = isPrivacy ? t.policyModal.privacySubtitle : t.policyModal.cookiesSubtitle;

  return (
    <AnimatePresence>
      <motion.div
        id="policy-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-4 backdrop-blur-xs"
      >
        <motion.div
          id="policy-modal-container"
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          onClick={(e) => e.stopPropagation()}
          className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-black/70 bg-white shadow-2xl"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-black/70 bg-gradient-to-r from-[#0B1F33] to-[#06121E] px-5 sm:px-6 py-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C9A45C] text-[#0B1F33] font-bold shadow-xs">
                {isPrivacy ? <ShieldCheck className="h-5 w-5" /> : <Cookie className="h-5 w-5" />}
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide">
                  {title}
                </h2>
                <p className="text-[11px] text-slate-300">
                  {subtitle}
                </p>
              </div>
            </div>
            <button
              id="policy-modal-close-icon"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              aria-label={t.policyModal.close}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto px-5 sm:px-7 py-6 text-slate-800 leading-relaxed space-y-6 bg-slate-50/50">
            {isPrivacy ? (
              /* Privacy Policy Structured Layout */
              <div className="space-y-6 text-sm text-slate-700">
                {/* 1. Ievads */}
                <section
                  id="privacy-sec-1"
                  className="rounded-xl border border-black/15 bg-white p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <FileText className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {t.policyModal.privacy.sec1Title}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                    {t.policyModal.privacy.sec1Text}
                  </p>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                      {t.policyModal.privacy.contactInfo}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-700">
                      <a
                        href="mailto:info@justiopro.lv"
                        className="inline-flex items-center gap-1.5 text-[#0B1F33] font-semibold hover:text-[#C9A45C] transition-colors"
                      >
                        <Mail className="h-4 w-4 text-[#C9A45C]" />
                        <span>E-pasts: info@justiopro.lv</span>
                      </a>
                      <a
                        href="tel:+37126841758"
                        className="inline-flex items-center gap-1.5 text-[#0B1F33] font-semibold hover:text-[#C9A45C] transition-colors"
                      >
                        <Phone className="h-4 w-4 text-[#C9A45C]" />
                        <span>Tālr. +371 26841758</span>
                      </a>
                    </div>
                  </div>
                </section>

                {/* 2. Juridiskais pamats */}
                <section
                  id="privacy-sec-2"
                  className="rounded-xl border border-black/15 bg-white p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <Scale className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {t.policyModal.privacy.sec2Title}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                    {t.policyModal.privacy.sec2Text}
                  </p>
                </section>

                {/* 3. Kādus personas datus mēs vācam */}
                <section
                  id="privacy-sec-3"
                  className="rounded-xl border border-black/15 bg-white p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <Database className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {t.policyModal.privacy.sec3Title}
                    </h3>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        <strong className="font-semibold text-[#0B1F33]">{t.policyModal.privacy.sec3ContactLabel}</strong> {t.policyModal.privacy.sec3ContactText}
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        <strong className="font-semibold text-[#0B1F33]">{t.policyModal.privacy.sec3TechLabel}</strong> {t.policyModal.privacy.sec3TechText}
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        <strong className="font-semibold text-[#0B1F33]">{t.policyModal.privacy.sec3UsageLabel}</strong> {t.policyModal.privacy.sec3UsageText}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. Kā mēs izmantojam Jūsu datus */}
                <section
                  id="privacy-sec-4"
                  className="rounded-xl border border-black/15 bg-white p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <Sliders className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {t.policyModal.privacy.sec4Title}
                    </h3>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        {t.policyModal.privacy.sec4Item1}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        {t.policyModal.privacy.sec4Item2}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        {t.policyModal.privacy.sec4Item3}
                      </span>
                    </div>
                  </div>
                </section>

                {/* 5. Jūsu tiesības */}
                <section
                  id="privacy-sec-5"
                  className="rounded-xl border border-black/15 bg-white p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <UserCheck className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {t.policyModal.privacy.sec5Title}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                    {t.policyModal.privacy.sec5Text}
                  </p>
                  <div className="pt-1">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                      <Mail className="h-4 w-4 text-[#C9A45C] shrink-0" />
                      <span>
                        {t.policyModal.privacy.sec5Contact}{' '}
                        <a
                          href="mailto:info@justiopro.lv"
                          className="font-semibold text-[#0B1F33] underline hover:text-[#C9A45C]"
                        >
                          info@justiopro.lv
                        </a>
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              /* Cookie Policy Layout with structured sections & visual categories */
              <div className="space-y-6 text-sm text-slate-700">
                {/* 1. Kas ir sīkdatnes? */}
                <section
                  id="cookie-sec-1"
                  className="rounded-xl border border-black/15 bg-white p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <Cookie className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {t.policyModal.cookies.sec1Title}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                    {t.policyModal.cookies.sec1Text1}
                  </p>
                  <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                    {t.policyModal.cookies.sec1Text2}
                  </p>
                </section>

                {/* 2. Kāpēc mēs izmantojam sīkdatnes? */}
                <section
                  id="cookie-sec-2"
                  className="rounded-xl border border-black/15 bg-white p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <Sliders className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {t.policyModal.cookies.sec2Title}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                    {t.policyModal.cookies.sec2Text}{' '}
                    <a
                      href="mailto:info@justiopro.lv"
                      className="font-semibold text-[#0B1F33] underline hover:text-[#C9A45C]"
                    >
                      info@justiopro.lv
                    </a>{' '}
                    un{' '}
                    <a
                      href="tel:+37126841758"
                      className="font-semibold text-[#0B1F33] underline hover:text-[#C9A45C]"
                    >
                      +371 26841758
                    </a>.
                  </p>
                  <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                    {t.policyModal.cookies.sec2Purpose}
                  </p>
                  <div className="space-y-2 pt-1">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        <strong className="font-semibold text-[#0B1F33]">{t.policyModal.cookies.sec2Item1Title}:</strong> {t.policyModal.cookies.sec2Item1Desc}
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        <strong className="font-semibold text-[#0B1F33]">{t.policyModal.cookies.sec2Item2Title}:</strong> {t.policyModal.cookies.sec2Item2Desc}
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        <strong className="font-semibold text-[#0B1F33]">{t.policyModal.cookies.sec2Item3Title}:</strong> {t.policyModal.cookies.sec2Item3Desc}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 3. Sīkdatņu kategorijas un to pielāgošana */}
                <section
                  id="cookie-sec-3"
                  className="rounded-xl border border-black/15 bg-white p-5 shadow-2xs space-y-4"
                >
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <Lock className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {t.policyModal.cookies.sec3Title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {/* Item 1: Necessary (Always active) */}
                    <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50/70">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <Lock className="h-4 w-4 text-[#0B1F33]" />
                          <span className="font-semibold text-xs sm:text-sm text-[#0B1F33]">
                            {t.policyModal.cookies.necessaryTitle}
                          </span>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                          {t.policyModal.cookies.alwaysActive}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {t.policyModal.cookies.necessaryDesc}
                      </p>
                    </div>

                    {/* Item 2: Analytics (Default ON) */}
                    <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50/70">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-[#0B1F33]" />
                          <span className="font-semibold text-xs sm:text-sm text-[#0B1F33]">
                            {t.policyModal.cookies.analyticsTitle}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            role="switch"
                            aria-checked={analyticsCookies}
                            onClick={handleToggleAnalytics}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border transition-colors duration-200 ease-in-out focus:outline-hidden ${
                              analyticsCookies
                                ? 'bg-[#0B1F33] border-[#0B1F33]'
                                : 'bg-slate-300 border-slate-300'
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full shadow-sm transition duration-200 ease-in-out ${
                                analyticsCookies
                                  ? 'translate-x-5.5 bg-[#C9A45C]'
                                  : 'translate-x-1 bg-white'
                              }`}
                            />
                          </button>
                          <span
                            className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md min-w-[70px] text-center ${
                              analyticsCookies
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-slate-200 text-slate-600 border border-slate-300'
                            }`}
                          >
                            {analyticsCookies ? t.policyModal.cookies.on : t.policyModal.cookies.off}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {t.policyModal.cookies.analyticsDesc}
                      </p>
                    </div>

                    {/* Item 3: Functional (Default ON) */}
                    <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50/70">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <Sliders className="h-4 w-4 text-[#0B1F33]" />
                          <span className="font-semibold text-xs sm:text-sm text-[#0B1F33]">
                            {t.policyModal.cookies.functionalTitle}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            role="switch"
                            aria-checked={functionalCookies}
                            onClick={handleToggleFunctional}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border transition-colors duration-200 ease-in-out focus:outline-hidden ${
                              functionalCookies
                                ? 'bg-[#0B1F33] border-[#0B1F33]'
                                : 'bg-slate-300 border-slate-300'
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full shadow-sm transition duration-200 ease-in-out ${
                                functionalCookies
                                  ? 'translate-x-5.5 bg-[#C9A45C]'
                                  : 'translate-x-1 bg-white'
                              }`}
                            />
                          </button>
                          <span
                            className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md min-w-[70px] text-center ${
                              functionalCookies
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-slate-200 text-slate-600 border border-slate-300'
                            }`}
                          >
                            {functionalCookies ? t.policyModal.cookies.on : t.policyModal.cookies.off}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {t.policyModal.cookies.functionalDesc}
                      </p>
                    </div>

                    {/* Item 4: Marketing (Default OFF) */}
                    <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50/70">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <Megaphone className="h-4 w-4 text-[#0B1F33]" />
                          <span className="font-semibold text-xs sm:text-sm text-[#0B1F33]">
                            {t.policyModal.cookies.marketingTitle}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            role="switch"
                            aria-checked={marketingCookies}
                            onClick={handleToggleMarketing}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border transition-colors duration-200 ease-in-out focus:outline-hidden ${
                              marketingCookies
                                ? 'bg-[#0B1F33] border-[#0B1F33]'
                                : 'bg-slate-300 border-slate-300'
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full shadow-sm transition duration-200 ease-in-out ${
                                marketingCookies
                                  ? 'translate-x-5.5 bg-[#C9A45C]'
                                  : 'translate-x-1 bg-white'
                              }`}
                            />
                          </button>
                          <span
                            className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md min-w-[70px] text-center ${
                              marketingCookies
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-slate-200 text-slate-600 border border-slate-300'
                            }`}
                          >
                            {marketingCookies ? t.policyModal.cookies.on : t.policyModal.cookies.off}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {t.policyModal.cookies.marketingDesc}
                      </p>
                    </div>
                  </div>
                </section>

                {/* 4. Kā pārvaldīt un dzēst sīkdatnes? */}
                <section
                  id="cookie-sec-4"
                  className="rounded-xl border border-black/15 bg-white p-5 shadow-2xs space-y-4"
                >
                  <div className="flex items-center gap-2.5 text-[#0B1F33]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1F33] text-[#C9A45C]">
                      <Sliders className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {t.policyModal.cookies.sec4Title}
                    </h3>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                    {t.policyModal.cookies.sec4Text}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-[#0B1F33] transition-all text-xs font-semibold text-[#0B1F33]"
                    >
                      <span>Google Chrome</span>
                      <ExternalLink className="h-3 w-3 text-slate-500" />
                    </a>
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-[#0B1F33] transition-all text-xs font-semibold text-[#0B1F33]"
                    >
                      <span>Safari</span>
                      <ExternalLink className="h-3 w-3 text-slate-500" />
                    </a>
                    <a
                      href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-[#0B1F33] transition-all text-xs font-semibold text-[#0B1F33]"
                    >
                      <span>Mozilla Firefox</span>
                      <ExternalLink className="h-3 w-3 text-slate-500" />
                    </a>
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-[#0B1F33] transition-all text-xs font-semibold text-[#0B1F33]"
                    >
                      <span>MS Edge</span>
                      <ExternalLink className="h-3 w-3 text-slate-500" />
                    </a>
                  </div>

                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
                    <strong className="font-semibold">{t.policyModal.cookies.sec4NoticeLabel}:</strong> {t.policyModal.cookies.sec4NoticeText}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                    <Mail className="h-4 w-4 text-[#C9A45C] shrink-0" />
                    <span>
                      {t.policyModal.cookies.sec4Contact}{' '}
                      <a
                        href="mailto:info@justiopro.lv"
                        className="font-semibold text-[#0B1F33] underline hover:text-[#C9A45C]"
                      >
                        info@justiopro.lv
                      </a>
                    </span>
                  </div>
                </section>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-200 bg-[#F1F5F9] px-5 sm:px-6 py-3.5">
            <div className="flex items-center gap-3">
              <div className="text-[11px] text-slate-500">
                {t.policyModal.lastUpdated}
              </div>
              {saveToast && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 animate-in fade-in zoom-in-95 duration-200">
                  <CheckCircle2 className="h-3 w-3 text-emerald-700" />
                  <span>{t.policyModal.savedToast}</span>
                </span>
              )}
            </div>

            {isPrivacy ? (
              <button
                id="policy-modal-close-button"
                onClick={onClose}
                className="rounded-xl border border-black/70 bg-[#0B1F33] px-6 py-2 text-xs font-semibold text-white uppercase tracking-wider transition-all hover:bg-[#C9A45C] hover:text-[#0B1F33] shadow-xs cursor-pointer text-center"
              >
                {t.policyModal.close}
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-2 justify-end">
                <button
                  id="cookie-modal-accept-all-btn"
                  type="button"
                  onClick={handleAcceptAllInModal}
                  className="rounded-xl bg-[#C9A45C] px-4 py-2 text-xs font-bold text-[#0B1F33] uppercase tracking-wider transition-all hover:bg-[#D9B772] shadow-xs cursor-pointer text-center"
                >
                  {t.policyModal.acceptAll}
                </button>
                <button
                  id="cookie-modal-save-btn"
                  type="button"
                  onClick={handleSaveSelection}
                  className="rounded-xl border border-black/70 bg-[#0B1F33] px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider transition-all hover:bg-[#1A3654] shadow-xs cursor-pointer text-center"
                >
                  {t.policyModal.saveSelection}
                </button>
                <button
                  id="policy-modal-close-button"
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 uppercase tracking-wider transition-all hover:bg-slate-100 cursor-pointer text-center"
                >
                  {t.policyModal.close}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

