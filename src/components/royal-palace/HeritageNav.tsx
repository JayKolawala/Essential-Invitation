import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Menu, Pause, Play, Share2, X } from 'lucide-react';
import type { RoyalPalaceConfig } from '../../types/royalPalace';
import type { AudioStatus } from '../../hooks/useRoyalPalaceAudio';

interface HeritageNavProps {
  config: RoyalPalaceConfig;
  audioStatus: AudioStatus;
  onToggleAudio: () => void;
  onReplayCover: () => void;
  onShareWhatsApp: () => void;
}

const NAV_ITEMS = [
  { href: '#mandap', label: 'Mandap' },
  { href: '#events', label: 'Events' },
  { href: '#story', label: 'Story' },
  { href: '#countdown', label: 'Muhurat' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#venue', label: 'Venue' },
];

export const HeritageNav: React.FC<HeritageNavProps> = ({
  config,
  audioStatus,
  onToggleAudio,
  onReplayCover,
  onShareWhatsApp,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showAudio = audioStatus !== 'unavailable' && audioStatus !== 'error';

  return (
    <header
      style={{
        backgroundColor: scrolled ? 'rgba(255, 250, 240, 0.96)' : 'rgba(249, 238, 216, 0.92)',
        borderColor: 'var(--ih-gold)',
      }}
      className="fixed inset-x-0 top-0 z-40 border-b py-2.5 shadow-sm backdrop-blur-md transition-all duration-300"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-8">
        <a
          href="#mandap"
          className="flex items-center gap-2.5 text-ih-maroon transition-opacity hover:opacity-80"
        >
          <span
            style={{ backgroundColor: 'var(--ih-maroon)', color: 'var(--ih-on-maroon)' }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ih-gold font-heritageDisplay text-xs"
          >
            {config.couple.monogram}
          </span>
          <span className="hidden font-heritageDisplay text-lg sm:inline">
            {config.couple.groomFirst} &amp; {config.couple.brideFirst}
          </span>
        </a>

        <nav aria-label="Primary Navigation" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heritageBody text-xs font-semibold uppercase tracking-[0.16em] text-ih-ink transition-colors hover:text-ih-red"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {showAudio && (
            <button
              type="button"
              onClick={onToggleAudio}
              aria-label={audioStatus === 'playing' ? 'Pause music' : 'Play music'}
              title={config.media.audioTitle}
              style={{ backgroundColor: 'var(--ih-ivory-card)', borderColor: 'var(--ih-gold)' }}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border px-3 font-heritageBody text-xs font-semibold text-ih-maroon transition-colors hover:brightness-95"
            >
              {audioStatus === 'playing' ? (
                <>
                  <Pause className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Music</span>
                </>
              )}
            </button>
          )}

          <button
            type="button"
            onClick={onReplayCover}
            aria-label="Replay illustrated cover"
            title="Replay Illustrated Cover"
            style={{ backgroundColor: 'var(--ih-ivory-card)', borderColor: 'var(--ih-gold)' }}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border px-3 font-heritageBody text-xs font-semibold text-ih-maroon transition-colors hover:brightness-95"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Cover</span>
          </button>

          <button
            type="button"
            onClick={onShareWhatsApp}
            aria-label="Share invitation via WhatsApp"
            title="Share via WhatsApp"
            style={{ backgroundColor: 'var(--ih-ivory-card)', borderColor: 'var(--ih-gold)' }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-ih-maroon transition-colors hover:brightness-95"
          >
            <Share2 className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            style={{ backgroundColor: 'var(--ih-ivory-card)', borderColor: 'var(--ih-gold)' }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-ih-maroon lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={prefersReduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile Navigation"
            style={{ backgroundColor: 'var(--ih-ivory-card)', borderColor: 'var(--ih-gold)' }}
            className="border-b px-5 py-5 lg:hidden"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-ih-border pb-2.5 font-heritageDisplay text-lg text-ih-maroon last:border-b-0 last:pb-0 hover:text-ih-red"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
