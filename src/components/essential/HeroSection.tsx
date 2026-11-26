import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Calendar, MapPin } from 'lucide-react';
import type { WeddingConfig } from '../../types/wedding';
import { BotanicalSprig } from './BotanicalDecor';
import { ESSENTIAL_EASE } from './MotionPrimitives';

interface HeroSectionProps {
  config: WeddingConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  const prefersReduced = useReducedMotion();
  const { couple, hero } = config;

  return (
    <section
      id="hero"
      aria-label="Wedding Invitation"
      className="relative bg-essential-bg pb-16 pt-28 sm:pb-24 sm:pt-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        {/* Invitation Copy */}
        <div className="order-2 text-center lg:order-1 lg:col-span-6 lg:text-left">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: ESSENTIAL_EASE }}
          >
            <div className="mb-4 flex justify-center lg:justify-start">
              <BotanicalSprig className="h-8 w-8 opacity-85" />
            </div>

            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-essential-primary">
              {hero.eyebrow}
            </p>

            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-essential-text sm:text-5xl lg:text-6xl">
              <span>{couple.brideFirst}</span>
              <span className="mx-2.5 font-serif italic text-essential-primary">&amp;</span>
              <span>{couple.groomFirst}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg font-serif text-lg italic leading-relaxed text-essential-text/90 sm:text-xl lg:mx-0">
              {hero.headline}
            </p>

            {hero.subheadline && (
              <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-essential-muted sm:text-base lg:mx-0">
                {hero.subheadline}
              </p>
            )}

            {/* Date & Location */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 border-y border-essential-border py-4 font-sans text-xs uppercase tracking-[0.16em] text-essential-text lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-essential-primary" />
                {couple.weddingDateDisplay}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-essential-primary" />
                {couple.locationDisplay}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#events"
                className="inline-flex items-center gap-2 rounded-full bg-essential-primary px-7 py-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-essential-onPrimary shadow-card transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span>{hero.ctaLabel}</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
              <a
                href="#welcome"
                className="inline-flex items-center rounded-full border border-essential-borderStrong px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-essential-text transition-colors hover:bg-essential-tintPrimary"
              >
                Read Invitation
              </a>
            </div>
          </motion.div>
        </div>

        {/* Couple Photograph */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: ESSENTIAL_EASE }}
          className="order-1 mx-auto w-full max-w-sm sm:max-w-md lg:order-2 lg:col-span-6 lg:max-w-lg"
        >
          <div className="soft-arch-frame border border-essential-border bg-essential-surface p-2.5 shadow-soft sm:p-3.5">
            <div className="soft-arch-frame aspect-[4/5] overflow-hidden bg-essential-surfaceAlt">
              <img
                src={hero.photograph}
                alt={hero.photographAlt}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
