import React, { useState } from 'react';
import { Check, Copy, ExternalLink, MapPin, Navigation } from 'lucide-react';
import type { WeddingConfig } from '../../types/wedding';
import { SectionHeading } from './BotanicalDecor';
import { FadeInSection, GentleImageReveal } from './MotionPrimitives';

interface VenueSectionProps {
  config: WeddingConfig;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ config }) => {
  const { venue } = config;
  const [copied, setCopied] = useState(false);

  const fullAddress = [...venue.addressLines, venue.cityRegion].join(', ');

  const embedUrl =
    venue.mapsEmbedUrl ||
    (venue.coordinates
      ? `https://maps.google.com/maps?q=${venue.coordinates.lat},${venue.coordinates.lng}&z=15&output=embed`
      : `https://maps.google.com/maps?q=${encodeURIComponent(`${venue.name}, ${venue.cityRegion}`)}&z=15&output=embed`);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${venue.name}, ${fullAddress}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard may be unavailable in restricted contexts
    }
  };

  return (
    <section
      id="venue"
      aria-labelledby="venue-heading"
      className="bg-essential-surfaceAlt py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow={venue.eyebrow}
            title={venue.heading}
            headingId="venue-heading"
          />
        </FadeInSection>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Venue Details Card */}
          <FadeInSection delay={0.05} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-essential-border bg-essential-surface p-6 shadow-card sm:p-8">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-essential-surfaceAlt">
                  <GentleImageReveal>
                    <img
                      src={venue.image}
                      alt={venue.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </GentleImageReveal>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-normal text-essential-text sm:text-3xl">
                  {venue.name}
                </h3>

                {venue.description && (
                  <p className="mt-3 font-sans text-sm leading-relaxed text-essential-muted">
                    {venue.description}
                  </p>
                )}

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-essential-border bg-essential-bg/75 p-4 font-sans text-sm text-essential-text">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-essential-primary" />
                  <div>
                    {venue.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    <p className="text-essential-muted">{venue.cityRegion}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-essential-primary px-5 py-3 font-sans text-xs font-medium uppercase tracking-[0.16em] text-essential-onPrimary shadow-card transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>{venue.directionsLabel || 'Get Directions'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-essential-borderStrong bg-essential-surface px-4 py-3 font-sans text-xs font-medium uppercase tracking-[0.14em] text-essential-text transition-colors hover:bg-essential-tintPrimary"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-essential-primary" />
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
            </div>
          </FadeInSection>

          {/* Google Maps Integration */}
          <FadeInSection delay={0.12} className="lg:col-span-7">
            <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-essential-border bg-essential-surface p-2.5 shadow-card sm:min-h-[420px]">
              <iframe
                title={`Google Map for ${venue.name}`}
                src={embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[300px] w-full rounded-xl border-0 sm:min-h-[400px]"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
