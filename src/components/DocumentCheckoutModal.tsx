import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  CreditCard,
  Globe,
  Lock,
  ExternalLink,
} from 'lucide-react';
import { LegalDocumentItem } from '../types';

interface DocumentCheckoutModalProps {
  document: LegalDocumentItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function openCenteredPopup(
  url: string,
  title: string = 'AvenueGroupCheckout',
  w: number = 550,
  h: number = 800
) {
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  const systemZoom = width / window.screen.availWidth || 1;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;

  const newWindow = window.open(
    url,
    title,
    `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`
  );

  if (window.focus && newWindow) {
    newWindow.focus();
  }
}

export default function DocumentCheckoutModal({
  document,
  isOpen,
  onClose,
}: DocumentCheckoutModalProps) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAgreedToTerms(false);
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = '';
    }
    return () => {
      window.document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !document) return null;

  const priceWithVat = document.price;
  const priceWithoutVat = (priceWithVat / 1.21).toFixed(2);
  const vatAmount = (priceWithVat - parseFloat(priceWithoutVat)).toFixed(2);
  const stripeCheckoutUrl = 'https://buy.stripe.com/8x2aER2ib82t3SdgTa1Fe03';

  const handleProceedToPayment = () => {
    if (!agreedToTerms) return;
    openCenteredPopup(stripeCheckoutUrl, 'AvenueGroupCheckout', 550, 800);
  };

  return (
    <div
      id="document-checkout-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="document-checkout-modal-container"
        className="relative w-full max-w-lg bg-white border border-black/70 shadow-2xl rounded-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-gradient-to-r from-[#0B1F33] to-[#06121E] text-white border-b border-black">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#C9A45C] text-[#0B1F33] font-bold text-xs shadow-xs">
              <CreditCard className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                Dokumenta iegāde un noformēšana
              </h3>
              <p className="text-[11px] text-slate-300">
                Drošs norēķins ar karti vai Apple / Google Pay
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Aizvērt"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 bg-[#F8FAFC]">
          {/* Selected Item Summary Box */}
          <div className="rounded-xl bg-white border border-black/20 p-4 shadow-xs">
            <div className="flex items-start gap-3">
              {document.isService ? (
                <div className="w-8 h-10 rounded-md bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0 shadow-2xs">
                  <Globe className="h-5 w-5" />
                </div>
              ) : (
                <div className="relative w-8 h-10 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-serif font-black text-sm shrink-0 overflow-hidden shadow-2xs">
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-200 border-l border-b border-blue-300"></div>
                  <span>W</span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 inline-block mb-1.5">
                  {document.category}
                </span>
                <h4 className="text-sm font-semibold text-[#0B1F33] leading-snug">
                  {document.title}
                </h4>
              </div>
            </div>
          </div>

          {/* Price Calculation Table */}
          <div className="rounded-xl bg-white border border-black/20 p-4 space-y-2.5 shadow-xs">
            <div className="flex justify-between items-center text-xs text-slate-600">
              <span>Pamatsumma (bez PVN):</span>
              <span className="font-semibold text-slate-900">€{priceWithoutVat}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-600">
              <span>PVN (21%):</span>
              <span className="font-semibold text-slate-900">€{vatAmount}</span>
            </div>
            <div className="pt-2.5 border-t border-slate-200 flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-900">Kopā apmaksai (ar PVN):</span>
              <span className="text-xl font-bold text-[#0B1F33]">
                €{priceWithVat.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Guarantee / Security info */}
          <div className="grid grid-cols-2 gap-2.5 text-[11px] text-slate-700">
            <div className="flex items-center gap-2 rounded-xl bg-white border border-black/20 p-3 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Stripe 256-bit SSL drošs maksājums</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white border border-black/20 p-3 shadow-2xs">
              <Lock className="h-4 w-4 text-[#0B1F33] shrink-0" />
              <span>Tūlītēja dokumentu pieeja</span>
            </div>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="rounded-xl bg-amber-50/80 border border-amber-300 p-3.5 shadow-2xs">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded-md border-slate-400 text-[#0B1F33] focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-xs text-slate-800 leading-snug">
                Apliecinu, ka esmu iepazinies ar{' '}
                <span className="font-semibold underline decoration-slate-400 underline-offset-2">
                  Pakalpojuma lietošanas noteikumiem
                </span>
                , un tiem piekrītu.
              </span>
            </label>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col gap-2">
          <button
            type="button"
            disabled={!agreedToTerms}
            onClick={handleProceedToPayment}
            className={`w-full py-3 px-4 font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 rounded-xl border transition-all duration-300 shadow-sm ${
              agreedToTerms
                ? 'border-black/70 bg-[#0B1F33] hover:bg-[#C9A45C] text-white hover:text-[#0B1F33] cursor-pointer active:scale-[0.99]'
                : 'border-slate-300 bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <CreditCard className="h-4 w-4" />
            <span>Veikt apmaksu ar karti</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </button>
          
          <p className="text-[10px] text-center text-slate-500">
            Pēc apmaksas apstiprināšanas dokuments tiks nekavējoties sagatavots un nosūtīts.
          </p>
        </div>
      </div>
    </div>
  );
}
