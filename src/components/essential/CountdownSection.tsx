import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { WeddingConfig } from '../../types/wedding';
import { SectionHeading } from './BotanicalDecor';
import { FadeInSection } from './MotionPrimitives';

interface CountdownSectionProps {
  config: WeddingConfig;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

function calculateRemaining(isoDate: string): TimeRemaining {
  const targetMs = new Date(isoDate).getTime();
  const diff = targetMs - Date.now();
  if (Number.isNaN(targetMs) || diff <= 0) {
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

const CountdownUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const prefersReduced = useReducedMotion();
  const formatted = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-essential-border bg-essential-surface px-4 py-6 shadow-card sm:px-6 sm:py-8">
      <motion.span
        key={formatted}
        initial={prefersReduced ? false : { opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="font-serif text-4xl font-normal tabular-nums tracking-tight text-essential-text sm:text-5xl"
      >
        {formatted}
      </motion.span>
      <span className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-essential-primary sm:text-xs">
        {label}
      </span>
    </div>
  );
};

export const CountdownSection: React.FC<CountdownSectionProps> = ({ config }) => {
  const [remaining, setRemaining] = useState<TimeRemaining>(() =>
    calculateRemaining(config.couple.weddingDateISO)
  );

  useEffect(() => {
    setRemaining(calculateRemaining(config.couple.weddingDateISO));
    const timer = window.setInterval(() => {
      setRemaining(calculateRemaining(config.couple.weddingDateISO));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [config.couple.weddingDateISO]);

  const { countdown } = config;

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-heading"
      className="bg-essential-surfaceAlt py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow={countdown.eyebrow}
            title={remaining.completed ? countdown.completedHeading : countdown.heading}
            subtitle={remaining.completed ? undefined : countdown.subtitle}
            headingId="countdown-heading"
          />
        </FadeInSection>

        {remaining.completed ? (
          <FadeInSection delay={0.08}>
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-essential-border bg-essential-surface p-8 shadow-card">
              <p className="font-serif text-xl italic text-essential-primary">
                {countdown.completedMessage}
              </p>
            </div>
          </FadeInSection>
        ) : (
          <FadeInSection delay={0.08}>
            <div
              role="timer"
              aria-live="off"
              className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            >
              <CountdownUnit value={remaining.days} label="Days" />
              <CountdownUnit value={remaining.hours} label="Hours" />
              <CountdownUnit value={remaining.minutes} label="Minutes" />
              <CountdownUnit value={remaining.seconds} label="Seconds" />
            </div>
            <p className="mt-7 font-serif text-base italic text-essential-muted">
              {config.couple.weddingDateDisplay} · {config.couple.locationDisplay}
            </p>
          </FadeInSection>
        )}
      </div>
    </section>
  );
};
