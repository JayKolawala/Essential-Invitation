import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { WeddingConfig } from '../../types/wedding';
import { FadeInSection } from './MotionPrimitives';

interface FooterSectionProps {
  config: WeddingConfig;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ config }) => {
  const { footer } = config;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Wedding Invitation Footer"
      className="bg-essential-primary py-16 text-essential-onPrimary sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeInSection>
          {/* Minimal Olive Leaf Emblem */}
          <svg
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
            className="mx-auto mb-5 h-7 w-7 opacity-85"
          >
            <path
              d="M18 31C18 22 18.5 13 22 6"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M18.2 23.5C14 22.8 11 19.8 10 16C14 16.5 17 19.4 18.2 23.5Z"
              stroke="currentColor"
              strokeWidth="1.1"
            />
            <path
              d="M18.6 17.5C22.2 16.5 25.4 13.8 26.4 10C22.6 10.4 19.8 13.4 18.6 17.5Z"
              stroke="currentColor"
              strokeWidth="1.1"
            />
          </svg>

          <p className="font-serif text-3xl font-normal italic sm:text-4xl">
            {footer.coupleSignOff}
          </p>

          <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed opacity-90 sm:text-base">
            {footer.thankYouMessage}
          </p>

          <div className="mx-auto my-7 h-px w-24 bg-essential-onPrimary/30" aria-hidden="true" />

          <p className="font-serif text-lg opacity-95">{footer.familyNames}</p>

          <p className="mt-1.5 font-sans text-xs uppercase tracking-[0.22em] opacity-80">
            {footer.weddingDate}
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-essential-onPrimary/35 px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.16em] text-essential-onPrimary transition-colors hover:bg-essential-onPrimary/10"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

          {footer.note && (
            <p className="mt-10 font-sans text-[11px] tracking-wide opacity-65">{footer.note}</p>
          )}
        </FadeInSection>
      </div>
    </footer>
  );
};
