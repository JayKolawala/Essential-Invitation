import React, { useState } from 'react';
import { MapPin, Quote } from 'lucide-react';
import type { HeritagePartnerProfile, RoyalPalaceConfig } from '../../types/royalPalace';
import {
  HeritageBorderStrip,
  HeritageReveal,
  LotusDivider,
  ParrotMotif,
} from './HeritageIllustrations';

interface HeritageStoryBookProps {
  config: RoyalPalaceConfig;
}

const MiniaturePartnerCard: React.FC<{ partner: HeritagePartnerProfile; delay?: number }> = ({
  partner,
  delay = 0,
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <HeritageReveal delay={delay}>
      <article className="miniature-frame group flex h-full flex-col rounded-t-[86px] rounded-b-2xl border-2 border-ih-gold bg-ih-ivoryCard p-4 sm:rounded-t-[140px] sm:p-7">
        <div className="aspect-[4/4.5] overflow-hidden rounded-t-[74px] rounded-b-xl border-2 border-ih-maroon/50 bg-ih-ivoryAlt sm:rounded-t-[120px]">
          {!failed ? (
            <img
              src={partner.portrait}
              alt={partner.portraitAlt}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-heritageDisplay text-2xl text-ih-maroon">
              {partner.name}
            </div>
          )}
        </div>

        <div className="mt-6 text-center sm:text-left">
          <span className="font-heritageBody text-[11px] font-semibold uppercase tracking-[0.22em] text-ih-red">
            {partner.title}
          </span>
          <h3 className="mt-1 font-heritageDisplay text-2xl text-ih-maroon sm:text-3xl">
            {partner.name}
          </h3>
          <p className="mt-0.5 font-heritageBody text-xs font-medium text-ih-green">
            {partner.lineage}
          </p>
          <p className="mt-4 font-heritageBody text-sm leading-relaxed text-ih-ink/85">
            {partner.bio}
          </p>
        </div>
      </article>
    </HeritageReveal>
  );
};

export const HeritageStoryBook: React.FC<HeritageStoryBookProps> = ({ config }) => {
  const { couple, coupleIntro, story } = config;
  const [coupleImgFailed, setCoupleImgFailed] = useState(false);
  const [chapterImgFailed, setChapterImgFailed] = useState<Record<string, boolean>>({});

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="heritage-paper bg-ih-ivory py-16 text-ih-ink sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Family Invitation Storybook Page */}
        <HeritageReveal>
          <div className="miniature-frame relative rounded-2xl border-2 border-ih-gold bg-ih-ivoryCard px-4 py-8 text-center shadow-parchment sm:px-12 sm:py-14">
            <div className="mx-auto mb-3 flex max-w-md items-center justify-between gap-2">
              <ParrotMotif className="h-9 w-9 shrink-0 sm:h-14 sm:w-14" />
              <p className="font-heritageBody text-[11px] font-semibold uppercase tracking-[0.2em] text-ih-red sm:text-xs sm:tracking-[0.26em]">
                {coupleIntro.eyebrow}
              </p>
              <ParrotMotif flip className="h-9 w-9 shrink-0 sm:h-14 sm:w-14" />
            </div>

            <h2 className="font-heritageDisplay text-3xl text-ih-maroon sm:text-4xl">
              {coupleIntro.heading}
            </h2>

            <LotusDivider className="my-6" />

            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="mx-auto max-w-sm overflow-hidden rounded-t-[96px] rounded-b-xl border-2 border-ih-gold bg-ih-ivoryAlt p-2 shadow-parchment sm:rounded-t-[160px]">
                  <div className="aspect-[4/3.2] overflow-hidden rounded-t-[86px] rounded-b-lg sm:rounded-t-[150px]">
                    {!coupleImgFailed ? (
                      <img
                        src={coupleIntro.couplePhoto}
                        alt={coupleIntro.couplePhotoAlt}
                        loading="lazy"
                        decoding="async"
                        onError={() => setCoupleImgFailed(true)}
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-ih-maroon font-heritageScript text-4xl text-ih-ivory">
                        {couple.monogram}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center lg:col-span-7 lg:text-left">
                <p className="font-heritageBody text-sm leading-relaxed text-ih-ink/90 sm:text-base">
                  {coupleIntro.invitationMessage}
                </p>

                <div className="mt-6 grid gap-5 rounded-xl border border-ih-border bg-ih-ivory p-5 sm:grid-cols-2">
                  <div>
                    <p className="font-heritageBody text-[10px] font-semibold uppercase tracking-[0.2em] text-ih-red">
                      {coupleIntro.brideFamily.relation}
                    </p>
                    <p className="mt-1 font-heritageDisplay text-lg text-ih-maroon">
                      {coupleIntro.brideFamily.names}
                    </p>
                    <p className="text-xs text-ih-inkMuted">{coupleIntro.brideFamily.city}</p>
                  </div>
                  <div className="border-t border-ih-border pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                    <p className="font-heritageBody text-[10px] font-semibold uppercase tracking-[0.2em] text-ih-red">
                      {coupleIntro.groomFamily.relation}
                    </p>
                    <p className="mt-1 font-heritageDisplay text-lg text-ih-maroon">
                      {coupleIntro.groomFamily.names}
                    </p>
                    <p className="text-xs text-ih-inkMuted">{coupleIntro.groomFamily.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeritageReveal>

        {/* Meet the Bride & Groom */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-12">
          <MiniaturePartnerCard partner={coupleIntro.bride} delay={0.05} />
          <MiniaturePartnerCard partner={coupleIntro.groom} delay={0.14} />
        </div>

        <HeritageBorderStrip className="my-16" />

        {/* Illustrated Storybook Timeline */}
        <HeritageReveal className="mx-auto max-w-2xl text-center">
          <p className="font-heritageBody text-xs font-semibold uppercase tracking-[0.26em] text-ih-red">
            {story.eyebrow}
          </p>
          <h2 id="story-heading" className="mt-2 font-heritageDisplay text-3xl text-ih-maroon sm:text-5xl">
            {story.heading}
          </h2>
          <p className="mt-3 font-heritageBody text-sm text-ih-inkMuted sm:text-base">
            {story.subtitle}
          </p>
          <LotusDivider className="mt-6" />
        </HeritageReveal>

        <div className="mt-14 space-y-16">
          {story.chapters.map((chapter, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <article
                key={chapter.id}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div className={`lg:col-span-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <HeritageReveal>
                    <div className="miniature-frame overflow-hidden rounded-2xl border-2 border-ih-gold bg-ih-ivoryCard p-2.5">
                      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-ih-ivoryAlt">
                        {!chapterImgFailed[chapter.id] ? (
                          <img
                            src={chapter.image}
                            alt={chapter.imageAlt}
                            loading="lazy"
                            decoding="async"
                            onError={() =>
                              setChapterImgFailed((prev) => ({ ...prev, [chapter.id]: true }))
                            }
                            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center font-heritageDisplay text-xl text-ih-maroon">
                            {chapter.title}
                          </div>
                        )}
                      </div>
                    </div>
                  </HeritageReveal>
                </div>

                <div className={`lg:col-span-6 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <HeritageReveal delay={0.1}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-ih-gold bg-ih-maroon px-3.5 py-1 font-heritageBody text-[11px] font-semibold uppercase tracking-[0.18em] text-ih-onMaroon">
                        {chapter.seasonLabel}
                      </span>
                      {chapter.location && (
                        <span className="inline-flex items-center gap-1 font-heritageBody text-xs font-medium text-ih-green">
                          <MapPin className="h-3.5 w-3.5 text-ih-red" />
                          {chapter.location}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-heritageDisplay text-2xl text-ih-maroon sm:text-4xl">
                      {chapter.title}
                    </h3>

                    <p className="mt-4 font-heritageBody text-sm leading-relaxed text-ih-ink/90 sm:text-base">
                      {chapter.narrative}
                    </p>

                    {chapter.quote && (
                      <blockquote className="mt-6 rounded-xl border border-ih-gold bg-ih-ivoryCard p-5 shadow-sm">
                        <Quote className="mb-2 h-4 w-4 text-ih-red" />
                        <p className="font-heritageBody text-sm italic text-ih-maroon sm:text-base">
                          “{chapter.quote}”
                        </p>
                      </blockquote>
                    )}
                  </HeritageReveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
