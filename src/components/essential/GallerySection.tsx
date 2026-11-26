import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import type { WeddingConfig } from '../../types/wedding';
import { SectionHeading } from './BotanicalDecor';
import { FadeInSection } from './MotionPrimitives';

interface GallerySectionProps {
  config: WeddingConfig;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ config }) => {
  const { gallery } = config;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + gallery.items.length) % gallery.items.length
    );
  }, [gallery.items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % gallery.items.length));
  }, [gallery.items.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, close, showNext, showPrev]);

  const activePhoto = activeIndex !== null ? gallery.items[activeIndex] : null;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-essential-bg py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow={gallery.eyebrow}
            title={gallery.heading}
            subtitle={gallery.subtitle}
            headingId="gallery-heading"
          />
        </FadeInSection>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.items.map((photo, index) => (
            <FadeInSection key={photo.id} delay={Math.min(index * 0.06, 0.24)}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open photograph: ${photo.caption || photo.alt}`}
                className="group flex w-full flex-col overflow-hidden rounded-2xl border border-essential-border bg-essential-surface p-2.5 text-left shadow-card transition-colors duration-300 hover:border-essential-borderStrong focus:outline-none focus-visible:ring-2 focus-visible:ring-essential-primary"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-essential-surfaceAlt">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-essential-surface/85 text-essential-text opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <Expand className="h-3.5 w-3.5" />
                  </span>
                </div>
                {photo.caption && (
                  <p className="px-2 pb-1.5 pt-3 font-serif text-sm italic text-essential-text/85">
                    {photo.caption}
                  </p>
                )}
              </button>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox */}
      <AnimatePresence>
        {activePhoto && activeIndex !== null && (
          <motion.div
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.caption || activePhoto.alt}
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close photograph"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photograph"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              key={activePhoto.id}
              initial={prefersReduced ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReduced ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl bg-essential-surface p-2 shadow-soft"
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[72vh] w-auto rounded-xl object-contain"
              />
              <div className="flex items-center justify-between gap-4 px-3 py-2.5 text-essential-text">
                <p className="font-serif text-sm italic sm:text-base">
                  {activePhoto.caption || activePhoto.alt}
                </p>
                <span className="font-sans text-xs tabular-nums text-essential-muted">
                  {activeIndex + 1} / {gallery.items.length}
                </span>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photograph"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
