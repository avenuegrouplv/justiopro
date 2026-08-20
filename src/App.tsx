import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LightboxModal from './components/LightboxModal';
import PolicyModal from './components/PolicyModal';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import PracticesPage from './pages/PracticesPage';
import DocumentSamplesPage from './pages/DocumentSamplesPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import { LanguageProvider } from './context/LanguageContext';
import { LightboxImageState, PolicyModalType } from './types';

function AnimatedRoutes({
  onOpenLightbox,
  onOpenPolicy,
}: {
  onOpenLightbox: (src: string, alt: string, caption?: string) => void;
  onOpenPolicy: (type: PolicyModalType) => void;
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex-grow"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage onOpenLightbox={onOpenLightbox} onOpenPolicy={onOpenPolicy} />} />
          <Route path="/darbibas-jomas" element={<PracticesPage onOpenLightbox={onOpenLightbox} />} />
          {/* Dokumentu paraugi lapa saglabāta kodā, pagaidām slēpta un pāradresē uz sākumu */}
          <Route path="/dokumentu-paraugi" element={<Navigate to="/" replace />} />
          <Route path="/buj" element={<FaqPage />} />
          <Route path="/kontakti" element={<ContactPage />} />

          {/* Graceful Redirects for consolidated pages */}
          <Route path="/par-mums" element={<Navigate to="/" replace />} />
          <Route path="/pakalpojumi" element={<Navigate to="/darbibas-jomas" replace />} />

          {/* Fallback to Home */}
          <Route path="*" element={<HomePage onOpenLightbox={onOpenLightbox} onOpenPolicy={onOpenPolicy} />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  const [lightboxState, setLightboxState] = useState<LightboxImageState>({
    isOpen: false,
    src: '',
    alt: '',
    caption: '',
  });

  const [activePolicyModal, setActivePolicyModal] = useState<PolicyModalType>(null);

  const handleOpenLightbox = (src: string, alt: string, caption?: string) => {
    setLightboxState({
      isOpen: true,
      src,
      alt,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div id="app-container" className="flex min-h-screen flex-col bg-[#F4F5F7] text-slate-900">
          <ScrollToTop />
          <Header />
          <AnimatedRoutes
            onOpenLightbox={handleOpenLightbox}
            onOpenPolicy={(type) => setActivePolicyModal(type)}
          />
          <Footer onOpenPolicy={(type) => setActivePolicyModal(type)} />

          {/* Global Lightbox Component */}
          <LightboxModal state={lightboxState} onClose={handleCloseLightbox} />

          {/* Policy Modals */}
          <PolicyModal type={activePolicyModal} onClose={() => setActivePolicyModal(null)} />

          {/* Cookie Consent Banner */}
          <CookieBanner onOpenPolicy={(type) => setActivePolicyModal(type)} />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
