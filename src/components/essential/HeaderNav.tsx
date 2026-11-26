import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { WeddingConfig } from '../../types/wedding';

interface HeaderNavProps {
  config: WeddingConfig;
}

const NAV_LINKS = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#couple', label: 'Couple' },
  { href: '#countdown', label: 'Countdown' },
  { href: '#events', label: 'Events' },
  { href: '#venue', label: 'Venue' },
  { href: '#gallery', label: 'Gallery' },
];

export const HeaderNav: React.FC<HeaderNavProps> = ({ config }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-essential-border bg-essential-surface/92 backdrop-blur-md'
          : 'bg-essential-bg/85 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#hero"
          className="flex items-baseline gap-1.5 font-serif text-lg font-medium tracking-tight text-essential-text transition-opacity hover:opacity-80 sm:text-xl"
        >
          <span>{config.couple.brideFirst}</span>
          <span className="font-serif italic text-essential-primary">&amp;</span>
          <span>{config.couple.groomFirst}</span>
        </a>

        {/* Desktop Links */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-essential-muted transition-colors hover:text-essential-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-essential-border bg-essential-surface text-essential-text transition-colors hover:border-essential-primary md:hidden"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={prefersReduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile Navigation"
            className="border-b border-essential-border bg-essential-surface px-5 py-5 shadow-soft md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-essential-border pb-2.5 font-serif text-lg text-essential-text transition-colors last:border-b-0 last:pb-0 hover:text-essential-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
