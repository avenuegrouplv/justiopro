import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS, PRACTICE_AREAS } from '../data/content';
import { PolicyModalType } from '../types';

interface FooterProps {
  onOpenPolicy: (type: PolicyModalType) => void;
}

export default function Footer({ onOpenPolicy }: FooterProps) {
  return (
    <footer
      id="main-footer"
      className="border-t border-black bg-[#06121E] text-slate-200"
    >
      {/* Upper Footer: Main columns */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Mūsu standarts (lg:col-span-4) */}
          <div className="space-y-4 lg:col-span-4">
            <Link
              to="/"
              id="footer-logo"
              className="inline-flex items-center gap-3 focus:outline-none"
            >
              <img
                src="/Justiopro-logo.webp"
                alt="JustioPro Logo"
                className="h-[41px] sm:h-[46px] w-auto max-w-[220px] object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-xs font-light leading-relaxed text-slate-300 max-w-sm">
              Profesionāls juridiskais atbalsts Jūsu biznesa izaugsmei un jebkurai ikdienā risināmai situācijai
            </p>
          </div>

          {/* Column 2: Navigation shifted to the right (lg:col-span-3 lg:col-start-7) */}
          <div className="space-y-4 lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C]">
              Navigācija
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-slate-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#C9A45C] transition-colors"
                >
                  Galvenā
                </Link>
              </li>
              <li>
                <Link
                  to="/darbibas-jomas"
                  className="hover:text-[#C9A45C] transition-colors"
                >
                  Darbības jomas
                </Link>
              </li>
              <li>
                <Link
                  to="/buj"
                  className="hover:text-[#C9A45C] transition-colors"
                >
                  BUJ
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakti"
                  className="hover:text-[#C9A45C] transition-colors"
                >
                  Kontakti
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact Information shifted to the far right with right-alignment (lg:col-span-4 lg:col-start-9) */}
          <div className="space-y-4 lg:col-span-4 lg:col-start-9 text-right flex flex-col items-end">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C] text-right">
              Kontakti
            </h4>

            <div className="space-y-3.5 text-xs font-light text-slate-300 w-full flex flex-col items-end text-right">
              <div className="flex flex-row-reverse items-center gap-3 text-right justify-end">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/40 bg-[#0B1F33] text-[#C9A45C]">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className="text-[10px] uppercase text-slate-400">Tālrunis</div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="font-medium text-white hover:text-[#C9A45C] transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex flex-row-reverse items-center gap-3 text-right justify-end">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/40 bg-[#0B1F33] text-[#C9A45C]">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className="text-[10px] uppercase text-slate-400">E-pasts</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-medium text-white hover:text-[#C9A45C] transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-row-reverse items-center gap-3 text-right justify-end">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/40 bg-[#0B1F33] text-[#C9A45C]">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className="text-[10px] uppercase text-slate-400">Darba laiks</div>
                  <span className="text-white">{COMPANY_INFO.workingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Bar: Copyright & Policies in one level */}
      <div className="border-t border-slate-800/80 bg-[#040C14] py-5 text-center text-xs font-light text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: 2025 © JustioPro I Visas tiesības aizsargātas */}
          <div className="text-slate-400">
            2025 © JustioPro I Visas tiesības aizsargātas
          </div>

          {/* Center / Middle: Privātuma politika & Sīkdatņu politika */}
          <div className="flex items-center gap-4 text-xs font-light text-slate-400">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#C9A45C] transition-colors cursor-pointer"
            >
              Privātuma politika
            </button>
            <span className="text-slate-600">•</span>
            <button
              type="button"
              onClick={() => onOpenPolicy('cookies')}
              className="hover:text-[#C9A45C] transition-colors cursor-pointer"
            >
              Sīkdatņu politika
            </button>
          </div>

          {/* Right: Izstrādātājs: Sageon Media */}
          <div>
            Izstrādātājs:{' '}
            <a
              href={COMPANY_INFO.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A45C] hover:text-[#D8B46C] transition-colors no-underline font-medium"
            >
              {COMPANY_INFO.developerName}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
