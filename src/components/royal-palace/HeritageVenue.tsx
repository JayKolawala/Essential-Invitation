import React, { useState } from 'react';
import { Check, Compass, Copy, ExternalLink, MapPin, Navigation } from 'lucide-react';
import type { RoyalPalaceConfig } from '../../types/royalPalace';
import {
  ElephantIllustration,
  HeritageBorderStrip,
  HeritageReveal,
  LotusDivider,
} from './HeritageIllustrations';

interface HeritageVenueProps {
  config: RoyalPalaceConfig;
}

export const HeritageVenue: React.FC<HeritageVenueProps> = ({ config }) => {
  const { venue } = config;
  const [copied, setCopied] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const fullAddress = [...venue.addressLines, venue.cityCountry].join(', ');
  const embedUrl = `https://maps.google.com/maps?q=${venue.coordinates.lat},${venue.coordinates.lng}&z=15&output=embed`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${venue.name}, ${fullAddress}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard permissions restricted
    }
  };

  return (
    <section
      id="venue"
      aria-labelledby="venue-heading"
      className="heritage-paper py-16 text-ih-ink sm:py-24"
    >
      <HeritageBorderStrip className="mb-12" />

      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <HeritageReveal className="mx-auto max-w-2xl text-center">
          <div className="mb-2 flex justify-center">
            <ElephantIllustration className="h-20 w-24 sm:h-24 sm:w-28" />
          </div>
          <p className="font-heritageBody text-xs font-semibold uppercase tracking-[0.26em] text-ih-red">
            {venue.eyebrow}
          </p>
          <h2 id="venue-heading" className="mt-2 font-heritageDisplay text-3xl text-ih-maroon sm:text-5xl">
            {venue.heading}
          </h2>
          <LotusDivider className="mt-6" />
        </HeritageReveal>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Illustrated Venue Details Card */}
          <HeritageReveal delay={0.06} className="lg:col-span-5">
            <div className="miniature-frame flex h-full flex-col justify-between rounded-2xl border-2 border-ih-gold bg-ih-ivoryCard p-6 sm:p-8">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-ih-maroon/40 bg-ih-ivoryAlt">
                  {!imgFailed ? (
                    <img
                      src={venue.image}
                      alt={venue.imageAlt}
                      loading="lazy"
                      decoding="async"
                      onError={() => setImgFailed(true)}
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-heritageDisplay text-xl text-ih-maroon">
                      {venue.name}
                    </div>
                  )}
                </div>

                <h3 className="mt-6 font-heritageDisplay text-2xl text-ih-maroon sm:text-3xl">
                  {venue.name}
                </h3>
                <p className="mt-1 font-heritageBody text-xs font-semibold uppercase tracking-[0.14em] text-ih-green">
                  {venue.tagline}
                </p>

                <p className="mt-4 font-heritageBody text-sm leading-relaxed text-ih-ink/90">
                  {venue.description}
                </p>

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-ih-border bg-ih-ivory p-4 font-heritageBody text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ih-red" />
                  <div>
                    {venue.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    <p className="font-medium text-ih-inkMuted">{venue.cityCountry}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: 'var(--ih-maroon)', color: 'var(--ih-on-maroon)' }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-heritageBody text-xs font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-90 sm:flex-1"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>{venue.directionsLabel}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ih-border bg-ih-ivory px-4 py-3 font-heritageBody text-xs font-semibold uppercase tracking-[0.14em] text-ih-maroon transition-colors hover:border-ih-gold sm:w-auto"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-ih-green" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {venue.hospitalityNotes.length > 0 && (
                  <div className="space-y-2 border-t border-ih-border pt-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 font-heritageBody text-[11px] font-semibold uppercase tracking-[0.2em] text-ih-green">
                      <Compass className="h-3.5 w-3.5" />
                      <span>Hospitality &amp; Travel</span>
                    </div>
                    {venue.hospitalityNotes.map((note) => (
                      <p key={note.label} className="font-heritageBody">
                        <strong className="text-ih-maroon">{note.label}: </strong>
                        <span className="text-ih-inkMuted">{note.detail}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </HeritageReveal>

          {/* Embedded Google Map */}
          <HeritageReveal delay={0.14} className="lg:col-span-7">
            <div className="miniature-frame h-full min-h-[340px] overflow-hidden rounded-2xl border-2 border-ih-gold bg-ih-ivoryCard p-2.5 sm:min-h-[460px]">
              <iframe
                title={`Google Map for ${venue.name}`}
                src={embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[320px] w-full rounded-xl border-0 sm:min-h-[440px]"
              />
            </div>
          </HeritageReveal>
        </div>
      </div>
    </section>
  );
};
