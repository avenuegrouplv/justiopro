import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { LightboxImageState } from '../types';

interface LightboxModalProps {
  state: LightboxImageState;
  onClose: () => void;
}

export default function LightboxModal({ state, onClose }: LightboxModalProps) {
  return (
    <AnimatePresence>
      {state.isOpen && (
        <motion.div
          id="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <button
            id="lightbox-close-btn"
            onClick={onClose}
            aria-label="Aizvērt attēlu"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-[#C9A45C] cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            id="lightbox-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-[#06121E] shadow-2xl"
          >
            <img
              src={state.src}
              alt={state.alt}
              className="max-h-[80vh] w-auto object-contain"
            />
            {state.caption && (
              <div className="bg-[#0B1F33]/95 border-t border-[#C9A45C]/20 p-4 text-center text-sm font-light text-slate-200">
                {state.caption}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ImageWithLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  onOpenLightbox: (src: string, alt: string, caption?: string) => void;
  lazy?: boolean;
}

export function ImageWithLightbox({
  src,
  alt,
  caption,
  className = '',
  imgClassName = '',
  onOpenLightbox,
  lazy = true,
}: ImageWithLightboxProps) {
  return (
    <div
      onClick={() => onOpenLightbox(src, alt, caption)}
      className={`group relative cursor-zoom-in overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        className={`transition-transform duration-500 ease-out group-hover:scale-105 ${imgClassName}`}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-[#0B1F33]/40 group-hover:opacity-100">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#0B1F33] shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
          <ZoomIn className="h-5 w-5 text-[#C9A45C]" />
        </span>
      </div>
    </div>
  );
}
