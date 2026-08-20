import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUp, Home } from 'lucide-react';
import { useTranslation } from '../translations';

interface SectionNavButtonsProps {
  className?: string;
  dark?: boolean;
}

export default function SectionNavButtons({ className = '', dark = false }: SectionNavButtonsProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      id="section-nav-buttons"
      className={`flex items-center justify-center gap-4 py-8 ${className}`}
    >
      <button
        id="btn-go-home"
        type="button"
        onClick={handleGoHome}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium tracking-wide transition-all duration-200 shadow-xs cursor-pointer ${
          dark
            ? 'border border-[#C9A45C]/60 bg-[#0B1F33] text-[#C9A45C] hover:bg-[#122B45] hover:border-[#C9A45C]'
            : 'border border-black/80 bg-[#0B1F33] text-white hover:bg-[#122B45] hover:border-[#C9A45C]'
        }`}
        title={t.navButtons.toHome}
      >
        <Home className="h-4 w-4 text-[#C9A45C]" />
        <span>{t.navButtons.toHome}</span>
      </button>

      <button
        id="btn-scroll-top"
        type="button"
        onClick={handleScrollTop}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium tracking-wide transition-all duration-200 shadow-xs cursor-pointer ${
          dark
            ? 'border border-slate-700 bg-[#0B1F33] text-slate-200 hover:border-[#C9A45C] hover:text-[#C9A45C]'
            : 'border border-slate-300 bg-white text-slate-800 hover:border-[#C9A45C] hover:bg-[#FAF9F5] hover:text-[#0B1F33]'
        }`}
        title={t.navButtons.toTop}
      >
        <ArrowUp className="h-4 w-4 text-[#C9A45C]" />
        <span>{t.navButtons.toTop}</span>
      </button>
    </div>
  );
}

