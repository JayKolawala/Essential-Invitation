import React from 'react';
import { ArrowUp, BookOpen, Share2 } from 'lucide-react';
import type { RoyalPalaceConfig } from '../../types/royalPalace';
import { HeritageReveal, LotusDivider, PeacockIllustration } from './HeritageIllustrations';

interface HeritageFooterProps {
  config: RoyalPalaceConfig;
  onShareWhatsApp: () => void;
  onReplayCover: () => void;
}

export const HeritageFooter: React.FC<HeritageFooterProps> = ({
  config,
  onShareWhatsApp,
  onReplayCover,
}) => {
  const { footer, couple } = config;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Heritage Wedding Invitation Footer"
      className="heritage-velvet relative overflow-hidden py-16 text-ih-onMaroon sm:py-20"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-8">
        <HeritageReveal>
          <div className="mx-auto mb-4 flex max-w-xs items-center justify-between gap-2 sm:max-w-sm">
            <PeacockIllustration className="h-14 w-14 opacity-90 sm:h-20 sm:w-20" />
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ih-gold bg-ih-ivory font-heritageDisplay text-xs font-semibold text-ih-maroon shadow-parchment sm:h-14 sm:w-14 sm:text-sm">
              {couple.monogram}
            </div>
            <PeacockIllustration flip className="h-14 w-14 opacity-90 sm:h-20 sm:w-20" />
          </div>

          <p className="font-heritageBody text-xs font-semibold uppercase tracking-[0.28em] text-ih-gold">
            {footer.eyebrow}
          </p>

          <p className="mt-3 font-heritageScript text-5xl text-ih-ivory sm:text-6xl">
            {footer.coupleSignOff}
          </p>

          <p className="mx-auto mt-4 max-w-xl font-heritageBody text-sm leading-relaxed text-ih-ivory/90 sm:text-base">
            {footer.thankYouMessage}
          </p>

          <LotusDivider className="my-7" />

          <p className="font-heritageDisplay text-xl text-ih-gold">{footer.familyNames}</p>
          <p className="mt-1 font-heritageBody text-xs font-medium uppercase tracking-[0.2em] text-ih-ivory/85">
            {footer.weddingDate}
            {couple.hashtag ? ` · ${couple.hashtag}` : ''}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5">
            <button
              type="button"
              onClick={onShareWhatsApp}
              style={{ backgroundColor: 'var(--ih-gold)', color: 'var(--ih-on-gold)' }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-heritageBody text-xs font-semibold uppercase tracking-[0.16em] shadow-md transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Share Invitation</span>
            </button>

            <button
              type="button"
              onClick={onReplayCover}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ih-gold/70 px-5 py-3 font-heritageBody text-xs font-semibold uppercase tracking-[0.16em] text-ih-ivory transition-colors hover:bg-ih-ivory/10 sm:w-auto"
            >
              <BookOpen className="h-3.5 w-3.5 text-ih-gold" />
              <span>Replay Cover</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ih-ivory/35 px-5 py-3 font-heritageBody text-xs font-semibold uppercase tracking-[0.16em] text-ih-ivory/90 transition-colors hover:border-ih-gold sm:w-auto"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Top</span>
            </button>
          </div>
        </HeritageReveal>
      </div>
    </footer>
  );
};
