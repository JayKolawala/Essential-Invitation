import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CalendarHeart, MapPin } from 'lucide-react';
import type { RoyalPalaceConfig } from '../../types/royalPalace';
import { FloatingPetals } from './FloatingPetals';
import {
  FlickeringDiya,
  HERITAGE_EASE,
  LotusDivider,
  PeacockIllustration,
  RotatingMandala,
  SwingingBell,
} from './HeritageIllustrations';

interface AnimatedMandapHeroProps {
  config: RoyalPalaceConfig;
  revealed: boolean;
  guestName?: string | null;
}

/**
 * 3D Illustrated Indian Wedding Mandap inside a sunlit heritage palace courtyard.
 * Stacks couple crest cleanly below the mandap on mobile/small tablets and
 * nests inside the pillars on md+ viewports to prevent overlap.
 */
export const AnimatedMandapHero: React.FC<AnimatedMandapHeroProps> = ({
  config,
  revealed,
  guestName,
}) => {
  const prefersReduced = useReducedMotion();
  const { couple, mandap } = config;

  return (
    <section
      id="mandap"
      aria-labelledby="mandap-heading"
      className="heritage-velvet relative overflow-hidden pb-14 pt-24 text-ih-ink sm:pb-24 sm:pt-28"
    >
      {/* Gentle Falling Marigold & Rose Petals */}
      <FloatingPetals count={10} />

      <div className="relative z-10 mx-auto max-w-6xl px-3.5 sm:px-8">
        {/* Top Greeting Header on Velvet Maroon Ground */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={revealed ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.85, ease: HERITAGE_EASE }}
          className="text-center"
        >
          <p className="font-heritageBody text-[11px] font-semibold uppercase tracking-[0.22em] text-ih-gold sm:text-xs sm:tracking-[0.28em]">
            {mandap.eyebrow}
          </p>
          <h2
            id="mandap-heading"
            className="mt-2 font-heritageDisplay text-2xl text-ih-ivory drop-shadow-sm sm:text-4xl md:text-5xl"
          >
            {mandap.heading}
          </h2>
          {guestName && (
            <p className="mt-2 font-heritageBody text-xs font-medium text-ih-ivory sm:text-sm">
              Warmly welcoming <span className="font-semibold text-ih-gold">{guestName}</span>
            </p>
          )}
        </motion.div>

        {/* 3D Layered Parchment Courtyard & Illustrated Mandap Pavilion */}
        <div
          style={{
            background:
              'radial-gradient(ellipse 85% 65% at 50% 25%, #FFFDF7 0%, #FAEED4 58%, #EED9AF 100%)',
            boxShadow:
              '0 32px 80px rgba(14, 3, 6, 0.65), inset 0 0 0 3px var(--ih-gold), inset 0 0 0 7px #FFFDF7, inset 0 0 0 9px rgba(112, 38, 50, 0.5)',
          }}
          className="relative mx-auto mt-6 max-w-5xl overflow-hidden rounded-t-[86px] rounded-b-2xl px-3.5 pb-7 pt-8 sm:mt-8 sm:rounded-t-[180px] sm:px-10 sm:pb-12 sm:pt-14 md:rounded-t-[260px]"
        >
          {/* Centered Rotating Mandala Behind Mandap */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-start justify-center pt-10 sm:pt-16"
          >
            <RotatingMandala className="h-44 w-44 opacity-20 sm:h-64 sm:w-64 md:h-80 md:w-80" />
          </div>

          {/* Hanging Swinging Temple Bells */}
          <div className="pointer-events-none relative z-20 mx-auto flex max-w-xl justify-between px-8 sm:px-14">
            <SwingingBell className="h-9 w-6 sm:h-14 sm:w-9" delay="0s" />
            <SwingingBell className="hidden h-10 w-7 sm:block sm:h-12 sm:w-8" delay="0.8s" />
            <SwingingBell className="hidden h-10 w-7 sm:block sm:h-12 sm:w-8" delay="1.4s" />
            <SwingingBell className="h-9 w-6 sm:h-14 sm:w-9" delay="0.4s" />
          </div>

          {/* Illustrated Mandap Canopy, Floral Torans & Pillars */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.98 }}
            animate={revealed ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.95, delay: 0.15, ease: HERITAGE_EASE }}
            className="relative z-10 mx-auto -mt-2 max-w-4xl sm:-mt-4"
          >
            <svg
              viewBox="0 0 900 440"
              fill="none"
              aria-hidden="true"
              className="mx-auto w-full drop-shadow-md"
            >
              <defs>
                <linearGradient id="mandapPillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F1721" />
                  <stop offset="45%" stopColor="#8E3240" />
                  <stop offset="100%" stopColor="#4F1721" />
                </linearGradient>
                <linearGradient id="mandapDomeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C84B4B" />
                  <stop offset="100%" stopColor="#702632" />
                </linearGradient>
              </defs>

              <path
                d="M70 385V190C70 154 112 132 148 122C184 132 226 154 226 190V385"
                fill="var(--ih-terracotta)"
                fillOpacity="0.1"
                stroke="var(--ih-terracotta)"
                strokeOpacity="0.45"
                strokeWidth="1.6"
              />
              <path
                d="M674 385V190C674 154 716 132 752 122C788 132 830 154 830 190V385"
                fill="var(--ih-terracotta)"
                fillOpacity="0.1"
                stroke="var(--ih-terracotta)"
                strokeOpacity="0.45"
                strokeWidth="1.6"
              />

              <motion.path
                d="M150 112C220 72 330 34 450 20C570 34 680 72 750 112H150Z"
                pathLength={1}
                fill="url(#mandapDomeGrad)"
                stroke="var(--ih-gold)"
                strokeWidth="2.8"
                strokeDasharray="1"
                initial={prefersReduced ? false : { strokeDashoffset: 1, fillOpacity: 0 }}
                animate={revealed ? { strokeDashoffset: 0, fillOpacity: 1 } : undefined}
                transition={{ duration: 1.2, ease: HERITAGE_EASE }}
              />
              <path d="M450 4L459 18H441L450 4Z" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.2" />

              <rect x="165" y="112" width="570" height="22" rx="4" fill="var(--ih-maroon)" stroke="var(--ih-gold)" strokeWidth="1.8" />
              {[210, 330, 450, 570, 690].map((cx) => (
                <g key={cx}>
                  <path
                    d={`M${cx - 56} 134 Q${cx} 174 ${cx + 56} 134`}
                    stroke="var(--ih-gold)"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                  <path
                    d={`M${cx - 50} 136 Q${cx} 168 ${cx + 50} 136`}
                    stroke="var(--ih-red)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <circle cx={cx} cy="160" r="6" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1" />
                </g>
              ))}

              {[180, 265, 635, 720].map((x) => (
                <g key={x}>
                  <rect
                    x={x - 15}
                    y="134"
                    width="30"
                    height="252"
                    fill="url(#mandapPillarGrad)"
                    stroke="var(--ih-gold)"
                    strokeWidth="1.6"
                  />
                  <path
                    d={`M${x - 15} 165L${x + 15} 195M${x - 15} 225L${x + 15} 255M${x - 15} 285L${x + 15} 315`}
                    stroke="var(--ih-gold)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <rect x={x - 21} y="382" width="42" height="14" rx="2" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.2" />
                </g>
              ))}

              <rect x="130" y="396" width="640" height="22" rx="4" fill="var(--ih-maroon)" stroke="var(--ih-gold)" strokeWidth="1.8" />
              <rect x="100" y="418" width="700" height="16" rx="4" fill="var(--ih-terracotta)" stroke="var(--ih-maroon)" strokeWidth="1.4" />
              <polygon points="415,396 485,396 472,374 428,374" fill="var(--ih-terracotta)" stroke="var(--ih-maroon)" strokeWidth="1.5" />
              <path d="M450 348C460 360 462 369 450 376C438 369 440 360 450 348Z" fill="var(--ih-gold)" stroke="var(--ih-red)" strokeWidth="1.4" />
            </svg>

            {/* Raised 3D Parchment Crest — Stacked Cleanly on Mobile, Nested Inside Pillars on Tablet/Desktop */}
            <div className="relative mt-4 flex flex-col items-center px-1 text-center md:-mt-52 lg:-mt-64">
              <div
                style={{
                  backgroundColor: '#FFFDF7',
                  borderColor: 'var(--ih-gold)',
                  boxShadow: '0 22px 44px -12px rgba(79, 23, 33, 0.35), inset 0 0 0 1px rgba(112, 38, 50, 0.25)',
                }}
                className="w-full max-w-md rounded-2xl border-2 px-5 py-4 sm:w-auto sm:px-10 sm:py-7"
              >
                <p className="font-heritageDisplay text-xs tracking-[0.24em] text-ih-green sm:text-sm">
                  {couple.monogram}
                </p>
                <h1 className="mt-1 font-heritageScript text-[2.75rem] leading-tight text-ih-maroon sm:text-6xl md:text-7xl">
                  {couple.groomFirst}{' '}
                  <span className="font-heritageDisplay text-2xl text-ih-gold sm:text-4xl">
                    &amp;
                  </span>{' '}
                  {couple.brideFirst}
                </h1>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-heritageBody text-[11px] font-semibold uppercase tracking-[0.14em] text-ih-ink sm:text-xs sm:tracking-[0.16em]">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarHeart className="h-3.5 w-3.5 text-ih-red" />
                    {couple.weddingDateDisplay}
                  </span>
                  <span className="hidden text-ih-gold sm:inline">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-ih-green" />
                    {couple.locationDisplay}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Mandap Diyas & Peacocks */}
          <div className="relative z-20 mx-auto mt-8 flex max-w-4xl items-end justify-between gap-2 px-1 sm:mt-14 sm:px-6 md:mt-20">
            <div className="flex shrink-0 items-end gap-2">
              <PeacockIllustration className="hidden h-20 w-20 sm:block" />
              <FlickeringDiya className="h-9 w-10 sm:h-11 sm:w-12" delay="0s" />
            </div>

            <p className="max-w-md px-1 text-center font-heritageBody text-[11px] italic leading-relaxed text-ih-inkMuted sm:px-3 sm:text-sm">
              {mandap.blessingVerse}
            </p>

            <div className="flex shrink-0 items-end gap-2">
              <FlickeringDiya className="h-9 w-10 sm:h-11 sm:w-12" delay="0.6s" />
              <PeacockIllustration flip className="hidden h-20 w-20 sm:block" />
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <LotusDivider />
        </div>
      </div>
    </section>
  );
};
