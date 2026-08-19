import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ShieldCheck, Cookie } from 'lucide-react';
import { PolicyModalType } from '../types';
import { PRIVACY_POLICY_TEXT, COOKIE_POLICY_TEXT } from '../data/content';

interface PolicyModalProps {
  type: PolicyModalType;
  onClose: () => void;
}

export default function PolicyModal({ type, onClose }: PolicyModalProps) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privātuma politika' : 'Sīkdatņu (Cookies) politika';
  const content = isPrivacy ? PRIVACY_POLICY_TEXT : COOKIE_POLICY_TEXT;

  return (
    <AnimatePresence>
      <motion.div
        id="policy-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      >
        <motion.div
          id="policy-modal-container"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-[#F0F4F8] px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1F33] text-[#C9A45C] border border-black">
                {isPrivacy ? <ShieldCheck className="h-5 w-5" /> : <Cookie className="h-5 w-5" />}
              </div>
              <h2 className="text-xl font-semibold text-[#0B1F33]">{title}</h2>
            </div>
            <button
              id="policy-modal-close-icon"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Aizvērt"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto px-6 py-6 text-slate-700 font-light leading-relaxed space-y-4">
            {content
              .trim()
              .split('\n\n')
              .map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return null; // Skip main title as shown in header
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3
                      key={index}
                      className="pt-2 text-base font-semibold text-[#0B1F33]"
                    >
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('* ')) {
                  const items = paragraph.split('\n').map((item) => item.replace('* ', ''));
                  return (
                    <ul key={index} className="list-disc space-y-1.5 pl-5 text-sm text-slate-600">
                      {items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-sm text-slate-600">
                    {paragraph}
                  </p>
                );
              })}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end border-t border-slate-200 bg-[#F0F4F8] px-6 py-4">
            <button
              id="policy-modal-close-button"
              onClick={onClose}
              className="rounded-xl bg-[#0B1F33] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#122B45] hover:shadow-md active:scale-98 cursor-pointer"
            >
              Aizvērt
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
