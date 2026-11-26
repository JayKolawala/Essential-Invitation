import React from 'react';
import type { PartnerProfile, WeddingConfig } from '../../types/wedding';
import { SectionHeading } from './BotanicalDecor';
import { FadeInSection, GentleImageReveal } from './MotionPrimitives';

interface CoupleSectionProps {
  config: WeddingConfig;
}

const PartnerCard: React.FC<{ partner: PartnerProfile; delay?: number }> = ({
  partner,
  delay = 0,
}) => (
  <FadeInSection delay={delay}>
    <article className="group flex h-full flex-col rounded-2xl border border-essential-border bg-essential-surface p-5 shadow-card transition-colors duration-300 hover:border-essential-borderStrong sm:p-7">
      <GentleImageReveal>
        <div className="aspect-[4/4.6] overflow-hidden rounded-xl bg-essential-surfaceAlt">
          <img
            src={partner.portrait}
            alt={partner.portraitAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </GentleImageReveal>

      <div className="mt-6 flex flex-1 flex-col text-center sm:text-left">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-essential-primary">
          {partner.roleLabel}
        </span>

        <h3 className="mt-1.5 font-serif text-2xl font-normal text-essential-text sm:text-3xl">
          {partner.name}
        </h3>

        {partner.parentsNote && (
          <p className="mt-1 font-sans text-xs text-essential-muted">{partner.parentsNote}</p>
        )}

        <p className="mt-4 font-sans text-sm leading-relaxed text-essential-text/85 sm:text-base">
          {partner.bio}
        </p>
      </div>
    </article>
  </FadeInSection>
);

export const CoupleSection: React.FC<CoupleSectionProps> = ({ config }) => {
  const { coupleIntro } = config;

  return (
    <section
      id="couple"
      aria-labelledby="couple-heading"
      className="bg-essential-bg py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow={coupleIntro.eyebrow}
            title={coupleIntro.heading}
            subtitle={coupleIntro.subtitle}
            headingId="couple-heading"
          />
        </FadeInSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          <PartnerCard partner={coupleIntro.bride} delay={0.05} />
          <PartnerCard partner={coupleIntro.groom} delay={0.12} />
        </div>
      </div>
    </section>
  );
};
