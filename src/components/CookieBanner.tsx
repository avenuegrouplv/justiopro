import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, ShieldCheck } from 'lucide-react';
import { PolicyModalType } from '../types';
import { useTranslation } from '../translations';

interface CookieBannerProps {
  onOpenPolicy: (type: PolicyModalType) => void;
}

export default function CookieBanner({ onOpenPolicy }: CookieBannerProps) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if consent has already been registered
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Show banner after 3 seconds delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Listen to custom storage events if consent changed from modal
  useEffect(() => {
    const handleStorageChange = () => {
      const consent = localStorage.getItem('cookie_consent');
      if (consent) {
        setIsVisible(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cookie_consent_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookie_consent_updated', handleStorageChange);
    };
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie_consent', 'all');
    localStorage.setItem('justiopro_cookie_analytics', 'true');
    localStorage.setItem('justiopro_cookie_functional', 'true');
    localStorage.setItem('justiopro_cookie_marketing', 'true');
    window.dispatchEvent(new Event('cookie_consent_updated'));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    localStorage.setItem('justiopro_cookie_analytics', 'false');
    localStorage.setItem('justiopro_cookie_functional', 'false');
    localStorage.setItem('justiopro_cookie_marketing', 'false');
    window.dispatchEvent(new Event('cookie_consent_updated'));
    setIsVisible(false);
  };

  const handleCustomize = () => {
    onOpenPolicy('cookies');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="cookie-consent-banner"
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 inset-x-0 z-40 w-full border-t border-black/70 bg-[#0B1F33] text-white shadow-[0_-10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
              
              {/* Text & Icon Section */}
              <div className="flex items-start gap-3 sm:gap-4 max-w-4xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A45C] text-[#0B1F33] shadow-xs">
                  <Cookie className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A45C] flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {t.cookieBanner.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                    {t.cookieBanner.text}{' '}
                    <button
                      type="button"
                      onClick={() => onOpenPolicy('privacy')}
                      className="text-slate-200 hover:text-white transition-colors cursor-pointer inline focus:outline-hidden underline"
                    >
                      {t.cookieBanner.privacyLink}
                    </button>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0 justify-end">
                {/* 1. Piekrītu visām */}
                <button
                  id="cookie-accept-all-btn"
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto rounded-xl bg-[#C9A45C] text-[#0B1F33] font-bold px-4 sm:px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider hover:bg-[#D9B772] transition-colors shadow-xs cursor-pointer text-center"
                >
                  {t.cookieBanner.acceptAll}
                </button>

                {/* 2. Pielāgot */}
                <button
                  id="cookie-customize-btn"
                  type="button"
                  onClick={handleCustomize}
                  className="flex-1 sm:flex-initial rounded-xl bg-white/10 text-white border border-white/25 font-semibold px-4 sm:px-5 py-2.5 text-xs sm:text-sm hover:bg-white/20 transition-colors shadow-xs cursor-pointer text-center"
                >
                  {t.cookieBanner.customize}
                </button>

                {/* 3. Noraidīt */}
                <button
                  id="cookie-reject-btn"
                  type="button"
                  onClick={handleReject}
                  className="flex-1 sm:flex-initial rounded-xl bg-transparent text-slate-300 border border-slate-600 font-medium px-4 sm:px-5 py-2.5 text-xs sm:text-sm hover:bg-white/5 hover:text-white transition-colors cursor-pointer text-center"
                >
                  {t.cookieBanner.reject}
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

