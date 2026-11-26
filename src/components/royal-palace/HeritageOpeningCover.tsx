import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import type { RoyalPalaceConfig } from '../../types/royalPalace';
import {
  HERITAGE_EASE,
  LotusDivider,
  PeacockIllustration,
  RotatingMandala,
} from './HeritageIllustrations';

interface HeritageOpeningCoverProps {
  isOpen: boolean;
  config: RoyalPalaceConfig;
  guestName?: string | null;
  hasAudio: boolean;
  playAudioOnEnter: boolean;
  onToggleAudioPreference: () => void;
  onEnterTrigger: () => void;
  onEntered: () => void;
}

/**
 * 3D Illustrated Indian Heritage Storybook Cover.
 * Responsive across 320px+ mobile screens and desktop viewports.
 */
export const HeritageOpeningCover: React.FC<HeritageOpeningCoverProps> = ({
  isOpen,
  config,
  guestName,
  hasAudio,
  playAudioOnEnter,
  onToggleAudioPreference,
  onEnterTrigger,
  onEntered,
}) => {
  const prefersReduced = useReducedMotion();
  const [turning, setTurning] = useState(false);

  const handleEnter = () => {
    if (turning) return;
    setTurning(true);
    onEnterTrigger();
    const waitMs = prefersReduced ? 350 : 1200;
    window.setTimeout(() => {
      setTurning(false);
      onEntered();
    }, waitMs);
  };

  const { couple, cover } = config;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Illustrated Wedding Invitation Cover"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          style={{ perspective: '2200px' }}
          className="heritage-velvet fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-2.5 sm:p-6"
        >
          {/* Storybook 3D Page-Turn Cover Book */}
          <motion.div
            initial={{ rotateY: 0, opacity: 1 }}
            animate={
              turning
                ? prefersReduced
                  ? { opacity: 0 }
                  : { rotateY: -96, opacity: 0.2 }
                : { rotateY: 0, opacity: 1 }
            }
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0.22, 1] }}
            style={{
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
              background:
                'radial-gradient(circle at 50% 42%, #FFFDF6 0%, #FAF0D8 62%, #EFE0BE 100%)',
              boxShadow:
                '0 34px 90px rgba(14, 3, 6, 0.78), inset 0 0 0 3px var(--ih-gold), inset 0 0 0 7px #FFFDF6, inset 0 0 0 9px var(--ih-maroon)',
            }}
            className="relative flex max-h-[94svh] w-full max-w-3xl flex-col items-center justify-center overflow-y-auto rounded-2xl px-5 py-7 text-center text-ih-ink sm:px-12 sm:py-11"
          >
            {/* Subtle Centered Rotating Mandala */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <RotatingMandala className="h-56 w-56 opacity-[0.13] sm:h-[360px] sm:w-[360px]" />
            </div>

            {/* Self-Drawing Ornamental Indian Arch & Floral Vine Border SVG */}
            <svg
              viewBox="0 0 800 620"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] sm:inset-6 sm:h-[calc(100%-48px)] sm:w-[calc(100%-48px)]"
            >
              <motion.path
                d="M54 596V216C54 150 108 112 164 94C226 74 286 42 400 24C514 42 574 74 636 94C692 112 746 150 746 216V596Z"
                pathLength={1}
                stroke="var(--ih-gold)"
                strokeWidth="2.6"
                strokeDasharray="1"
                initial={prefersReduced ? false : { strokeDashoffset: 1 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2.0, delay: 0.15, ease: HERITAGE_EASE }}
              />
              <motion.path
                d="M32 544C20 434 44 324 30 214C20 144 48 92 94 58"
                pathLength={1}
                stroke="var(--ih-green)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="1"
                initial={prefersReduced ? false : { strokeDashoffset: 1 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.7, delay: 0.35, ease: HERITAGE_EASE }}
              />
              <motion.path
                d="M768 544C780 434 756 324 770 214C780 144 752 92 706 58"
                pathLength={1}
                stroke="var(--ih-green)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="1"
                initial={prefersReduced ? false : { strokeDashoffset: 1 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.7, delay: 0.35, ease: HERITAGE_EASE }}
              />
              <motion.circle
                cx="400"
                cy="24"
                r="7.5"
                fill="var(--ih-red)"
                initial={prefersReduced ? false : { scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45, delay: 1.3 }}
              />
            </svg>

            {/* Paired Peacocks + Eyebrow Header */}
            <div className="relative z-10 flex w-full items-center justify-between gap-2 px-1 sm:px-4">
              <PeacockIllustration
                drawOnMount
                className="h-14 w-14 shrink-0 sm:h-24 sm:w-24 md:h-28 md:w-28"
              />
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.75 }}
                className="min-w-0 flex-1 text-center"
              >
                <span
                  style={{ backgroundColor: 'var(--ih-maroon)', color: 'var(--ih-on-maroon)' }}
                  className="inline-block rounded-full border border-ih-gold px-3 py-1 font-heritageDisplay text-[10px] tracking-[0.16em] shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.2em]"
                >
                  {cover.eyebrow}
                </span>
                <p className="mt-2 font-heritageBody text-[11px] font-medium leading-snug text-ih-inkMuted sm:text-sm">
                  {cover.invitationLine}
                </p>
              </motion.div>
              <PeacockIllustration
                flip
                drawOnMount
                className="h-14 w-14 shrink-0 sm:h-24 sm:w-24 md:h-28 md:w-28"
              />
            </div>

            {/* Central High-Contrast Couple Names & Button */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.9, ease: HERITAGE_EASE }}
              className="relative z-10 mt-3 flex w-full max-w-lg flex-col items-center px-1"
            >
              {guestName && (
                <p
                  style={{ backgroundColor: '#FFFDF6', borderColor: 'var(--ih-gold)' }}
                  className="mb-2.5 rounded-full border px-3.5 py-1 font-heritageBody text-[11px] font-semibold text-ih-maroon shadow-sm sm:text-xs"
                >
                  Warmly welcoming {guestName}
                </p>
              )}

              <h1 className="font-heritageScript text-[2.75rem] leading-[1.08] text-ih-maroon drop-shadow-sm sm:text-6xl md:text-7xl">
                {couple.groomFirst}{' '}
                <span className="font-heritageDisplay text-2xl text-ih-red sm:text-4xl">&amp;</span>{' '}
                {couple.brideFirst}
              </h1>

              <LotusDivider className="my-3 sm:my-3.5" />

              <p className="max-w-md font-heritageBody text-xs font-medium leading-relaxed text-ih-ink sm:text-sm">
                {cover.welcomeNote}
              </p>

              <p className="mt-2.5 font-heritageDisplay text-xs tracking-[0.12em] text-ih-green sm:text-base sm:tracking-[0.14em]">
                {couple.weddingDateDisplay} · {couple.locationDisplay}
              </p>

              <button
                type="button"
                onClick={handleEnter}
                style={{
                  backgroundColor: 'var(--ih-maroon)',
                  color: 'var(--ih-on-maroon)',
                  borderColor: 'var(--ih-gold)',
                  boxShadow: '0 14px 30px -10px rgba(112, 38, 50, 0.55)',
                }}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 px-5 py-3 font-heritageBody text-[11px] font-semibold uppercase tracking-[0.14em] transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ih-gold sm:mt-6 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm sm:tracking-[0.18em]"
              >
                <span>{cover.enterLabel}</span>
                <span aria-hidden="true">→</span>
              </button>

              {hasAudio && (
                <button
                  type="button"
                  onClick={onToggleAudioPreference}
                  className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 font-heritageBody text-[11px] font-medium text-ih-inkMuted transition-colors hover:text-ih-maroon sm:text-xs"
                >
                  {playAudioOnEnter ? (
                    <>
                      <Volume2 className="h-3.5 w-3.5 shrink-0 text-ih-green" />
                      <span>Classical Music On (Tap to Mute)</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="h-3.5 w-3.5 shrink-0" />
                      <span>Silent Entrance (Tap to Enable Music)</span>
                    </>
                  )}
                </button>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
