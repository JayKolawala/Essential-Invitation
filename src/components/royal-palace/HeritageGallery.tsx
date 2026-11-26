import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import type { RoyalPalaceConfig } from '../../types/royalPalace';
import { HeritageBorderStrip, HeritageReveal, LotusDivider } from './HeritageIllustrations';

interface HeritageGalleryProps {
  config: RoyalPalaceConfig;
}

export const HeritageGallery: React.FC<HeritageGalleryProps> = ({ config }) => {
  const { gallery } = config;
  const prefersReduced = useReducedMotion();

  const categories = useMemo(() => {
    const unique = Array.from(new Set(gallery.items.map((item) => item.category)));
    return unique.length > 1 ? ['All', ...unique] : [];
  }, [gallery.items]);

  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [failedIds, setFailedIds] = useState<Record<string, boolean>>({});

  const visiblePhotos = useMemo(() => {
    if (activeCategory === 'All' || categories.length === 0) return gallery.items;
    return gallery.items.filter((item) => item.category === activeCategory);
  }, [activeCategory, categories.length, gallery.items]);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  const showPrev = useCallback(() => {
    setLightboxIdx((prev) =>
      prev === null ? null : (prev - 1 + visiblePhotos.length) % visiblePhotos.length
    );
  }, [visiblePhotos.length]);

  const showNext = useCallback(() => {
    setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % visiblePhotos.length));
  }, [visiblePhotos.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeLightbox, lightboxIdx, showNext, showPrev]);

  const activePhoto = lightboxIdx !== null ? visiblePhotos[lightboxIdx] : null;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="heritage-paper py-16 text-ih-ink sm:py-24"
    >
      <HeritageBorderStrip className="mb-12" />

      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <HeritageReveal className="mx-auto max-w-2xl text-center">
          <p className="font-heritageBody text-xs font-semibold uppercase tracking-[0.26em] text-ih-red">
            {gallery.eyebrow}
          </p>
          <h2 id="gallery-heading" className="mt-2 font-heritageDisplay text-3xl text-ih-maroon sm:text-5xl">
            {gallery.heading}
          </h2>
          <p className="mt-3 font-heritageBody text-sm text-ih-inkMuted sm:text-base">
            {gallery.subtitle}
          </p>
          <LotusDivider className="mt-6" />
        </HeritageReveal>

        {categories.length > 0 && (
          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIdx(null);
                  }}
                  style={
                    active
                      ? {
                          backgroundColor: 'var(--ih-maroon)',
                          color: 'var(--ih-on-maroon)',
                          borderColor: 'var(--ih-gold)',
                        }
                      : {
                          backgroundColor: 'var(--ih-ivory-card)',
                          color: 'var(--ih-maroon)',
                          borderColor: 'var(--ih-border)',
                        }
                  }
                  className="rounded-full border px-4 py-1.5 font-heritageBody text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Miniature Painting Framed Photo Grid */}
        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePhotos.map((photo, index) => (
            <HeritageReveal key={photo.id} delay={Math.min(index * 0.06, 0.24)}>
              <button
                type="button"
                onClick={() => setLightboxIdx(index)}
                aria-label={`View gallery photo: ${photo.caption || photo.alt}`}
                className={`miniature-frame group flex w-full flex-col overflow-hidden rounded-t-[80px] rounded-b-xl border-2 border-ih-gold p-2.5 text-left transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ih-maroon sm:rounded-t-[110px] ${
                  index % 3 === 1 ? 'lg:mt-6' : ''
                }`}
              >
                <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-t-[70px] rounded-b-lg border border-ih-maroon/45 bg-ih-ivoryAlt sm:rounded-t-[98px]">
                  {!failedIds[photo.id] ? (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      onError={() =>
                        setFailedIds((prev) => ({
                          ...prev,
                          [photo.id]: true,
                        }))
                      }
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-heritageDisplay text-lg text-ih-maroon">
                      {photo.caption || 'Heritage Frame'}
                    </div>
                  )}

                  <span
                    aria-hidden="true"
                    style={{
                      backgroundColor: 'var(--ih-maroon)',
                      color: 'var(--ih-on-maroon)',
                      borderColor: 'var(--ih-gold)',
                    }}
                    className="absolute right-4 top-6 flex h-8 w-8 items-center justify-center rounded-full border opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <Expand className="h-3.5 w-3.5" />
                  </span>
                </div>

                <div className="px-2 pb-1.5 pt-3">
                  <span className="font-heritageBody text-[10px] font-semibold uppercase tracking-[0.2em] text-ih-green">
                    {photo.category}
                  </span>
                  {photo.caption && (
                    <p className="mt-0.5 font-heritageDisplay text-lg text-ih-maroon">
                      {photo.caption}
                    </p>
                  )}
                </div>
              </button>
            </HeritageReveal>
          ))}
        </div>
      </div>

      {/* Opaque Fullscreen Lightbox */}
      <AnimatePresence>
        {activePhoto && lightboxIdx !== null && (
          <motion.div
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.caption || activePhoto.alt}
            onClick={closeLightbox}
            style={{ backgroundColor: 'rgba(34, 9, 14, 0.90)' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md sm:p-8"
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              style={{
                backgroundColor: 'var(--ih-ivory-card)',
                color: 'var(--ih-maroon)',
                borderColor: 'var(--ih-gold)',
              }}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-md sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              style={{
                backgroundColor: 'var(--ih-ivory-card)',
                color: 'var(--ih-maroon)',
                borderColor: 'var(--ih-gold)',
              }}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 shadow-md sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              key={activePhoto.id}
              initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReduced ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: '#FFFDF7', borderColor: 'var(--ih-gold)' }}
              className="miniature-frame max-h-[85vh] max-w-[92vw] overflow-hidden rounded-2xl border-2 p-2 sm:max-w-4xl"
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[65vh] w-auto rounded-xl object-contain sm:max-h-[72vh]"
              />
              <div className="flex items-center justify-between gap-4 px-4 py-3 text-ih-ink">
                <div>
                  <p className="font-heritageDisplay text-lg text-ih-maroon">
                    {activePhoto.caption || activePhoto.alt}
                  </p>
                  <p className="font-heritageBody text-[11px] font-semibold uppercase tracking-[0.18em] text-ih-green">
                    {activePhoto.category}
                  </p>
                </div>
                <span className="font-heritageBody text-xs tabular-nums text-ih-inkMuted">
                  {lightboxIdx + 1} / {visiblePhotos.length}
                </span>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              style={{
                backgroundColor: 'var(--ih-ivory-card)',
                color: 'var(--ih-maroon)',
                borderColor: 'var(--ih-gold)',
              }}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 shadow-md sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
