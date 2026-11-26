import React from 'react';
import type { WeddingConfig } from '../../types/wedding';
import { BotanicalDivider, BotanicalSprig } from './BotanicalDecor';
import { FadeInSection } from './MotionPrimitives';

interface WelcomeSectionProps {
  config: WeddingConfig;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ config }) => {
  const { welcome, couple } = config;

  return (
    <section
      id="welcome"
      aria-labelledby="welcome-heading"
      className="bg-essential-surfaceAlt py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <FadeInSection>
          <div className="rounded-2xl border border-essential-border bg-essential-surface px-6 py-12 text-center shadow-card sm:px-14 sm:py-16">
            <div className="mb-4 flex justify-center">
              <BotanicalSprig className="h-7 w-7 opacity-80" />
            </div>

            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.26em] text-essential-primary">
              {welcome.eyebrow}
            </p>

            <h2
              id="welcome-heading"
              className="mt-2.5 font-serif text-3xl font-normal text-essential-text sm:text-4xl"
            >
              {welcome.heading}
            </h2>

            <BotanicalDivider className="my-7" />

            {/* Parents / Family Hosts */}
            <div className="mx-auto grid max-w-2xl gap-6 rounded-xl border border-essential-border bg-essential-bg/75 px-6 py-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-essential-muted">
                  {welcome.brideFamily.relationLabel}
                </p>
                <p className="mt-1.5 font-serif text-lg font-medium text-essential-text sm:text-xl">
                  {welcome.brideFamily.names}
                </p>
                {welcome.brideFamily.location && (
                  <p className="mt-0.5 font-sans text-xs text-essential-muted">
                    {welcome.brideFamily.location}
                  </p>
                )}
              </div>

              <div className="border-t border-essential-border pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-essential-muted">
                  {welcome.groomFamily.relationLabel}
                </p>
                <p className="mt-1.5 font-serif text-lg font-medium text-essential-text sm:text-xl">
                  {welcome.groomFamily.names}
                </p>
                {welcome.groomFamily.location && (
                  <p className="mt-0.5 font-sans text-xs text-essential-muted">
                    {welcome.groomFamily.location}
                  </p>
                )}
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-essential-text/90">
              {welcome.message}
            </p>

            {welcome.signatureQuote && (
              <blockquote className="mx-auto mt-7 max-w-xl border-t border-essential-border pt-6 font-serif text-lg italic text-essential-primary">
                {welcome.signatureQuote}
              </blockquote>
            )}

            <p className="mt-6 font-serif text-xl italic text-essential-text">
              {couple.brideFirst} &amp; {couple.groomFirst}
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
