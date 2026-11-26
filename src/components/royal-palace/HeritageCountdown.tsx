import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { RoyalPalaceConfig } from '../../types/royalPalace';
import { HeritageReveal, LotusDivider, RotatingMandala } from './HeritageIllustrations';

interface HeritageCountdownProps {
  config: RoyalPalaceConfig;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

function getTimeRemaining(isoDate: string): TimeRemaining {
  const target = new Date(isoDate).getTime();
  const diff = target - Date.now();
  if (Number.isNaN(target) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    completed: false,
  };
}

const MandalaCounterTile: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const prefersReduced = useReducedMotion();
  const formatted = String(value).padStart(2, '0');

  return (
    <div className="miniature-frame relative flex flex-col items-center justify-center rounded-t-[70px] rounded-b-xl border-2 border-ih-gold bg-ih-ivoryCard px-4 py-6 text-ih-maroon sm:px-6 sm:py-8">
      <motion.span
        key={formatted}
        initial={prefersReduced ? false : { opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="font-heritageDisplay text-4xl tabular-nums text-ih-maroon sm:text-5xl"
      >
        {formatted}
      </motion.span>
      <span className="mt-2 font-heritageBody text-[11px] font-semibold uppercase tracking-[0.2em] text-ih-red">
        {label}
      </span>
    </div>
  );
};

export const HeritageCountdown: React.FC<HeritageCountdownProps> = ({ config }) => {
  const [remaining, setRemaining] = useState<TimeRemaining>(() =>
    getTimeRemaining(config.couple.weddingDateISO)
  );

  useEffect(() => {
    setRemaining(getTimeRemaining(config.couple.weddingDateISO));
    const timer = window.setInterval(() => {
      setRemaining(getTimeRemaining(config.couple.weddingDateISO));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [config.couple.weddingDateISO]);

  const { countdown } = config;

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-heading"
      className="heritage-velvet relative overflow-hidden py-16 text-ih-onMaroon sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <RotatingMandala className="h-96 w-96 opacity-15" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-8">
        <HeritageReveal>
          <p className="font-heritageBody text-xs font-semibold uppercase tracking-[0.28em] text-ih-gold">
            {countdown.eyebrow}
          </p>
          <h2 id="countdown-heading" className="mt-2 font-heritageDisplay text-3xl sm:text-5xl">
            {remaining.completed ? countdown.completedHeading : countdown.heading}
          </h2>
          <LotusDivider className="my-7" />
        </HeritageReveal>

        {remaining.completed ? (
          <HeritageReveal delay={0.1}>
            <div className="mx-auto max-w-xl rounded-2xl border-2 border-ih-gold bg-ih-ivoryCard p-8 text-ih-maroon">
              <p className="font-heritageBody text-base font-medium sm:text-lg">
                {countdown.completedMessage}
              </p>
            </div>
          </HeritageReveal>
        ) : (
          <HeritageReveal delay={0.1}>
            <div
              role="timer"
              aria-live="off"
              className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            >
              <MandalaCounterTile value={remaining.days} label="Days" />
              <MandalaCounterTile value={remaining.hours} label="Hours" />
              <MandalaCounterTile value={remaining.minutes} label="Minutes" />
              <MandalaCounterTile value={remaining.seconds} label="Seconds" />
            </div>
            <p className="mt-7 font-heritageDisplay text-lg tracking-wide text-ih-gold">
              {config.couple.weddingDateDisplay} · {config.couple.locationDisplay}
            </p>
          </HeritageReveal>
        )}
      </div>
    </section>
  );
};
