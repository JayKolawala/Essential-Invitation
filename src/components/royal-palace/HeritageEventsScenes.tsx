import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Calendar, Clock, ExternalLink, MapPin, Shirt, Sparkles, X } from 'lucide-react';
import type {
  HeritageSceneType,
  HeritageWeddingEvent,
  RoyalPalaceConfig,
} from '../../types/royalPalace';
import {
  FlickeringDiya,
  HERITAGE_EASE,
  HeritageBorderStrip,
  HeritageReveal,
  LotusDivider,
  SwingingBell,
} from './HeritageIllustrations';

interface HeritageEventsScenesProps {
  config: RoyalPalaceConfig;
  onSceneOpen?: () => void;
}

const IllustratedEventSceneArt: React.FC<{ sceneType: HeritageSceneType }> = ({ sceneType }) => {
  switch (sceneType) {
    case 'haldi':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-44 w-full" aria-hidden="true">
          <path
            d="M24 190V76C24 44 64 26 160 14C256 26 296 44 296 76V190H24Z"
            fill="var(--ih-gold)"
            fillOpacity="0.22"
            stroke="var(--ih-maroon)"
            strokeWidth="1.6"
          />
          {[70, 115, 160, 205, 250].map((x, idx) => (
            <g key={x}>
              <line x1={x} y1="26" x2={x} y2={idx % 2 === 0 ? 86 : 68} stroke="var(--ih-green)" strokeWidth="1.5" />
              <circle cx={x} cy={idx % 2 === 0 ? 64 : 52} r="7" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1" />
              <circle cx={x} cy={idx % 2 === 0 ? 86 : 68} r="8.5" fill="var(--ih-terracotta)" stroke="var(--ih-maroon)" strokeWidth="1" />
              <circle cx={x} cy={idx % 2 === 0 ? 86 : 68} r="3" fill="var(--ih-ivory)" />
            </g>
          ))}
          <path d="M92 152C102 178 134 182 160 182C186 182 218 178 228 152H92Z" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.6" />
          <ellipse cx="160" cy="152" rx="68" ry="10" fill="var(--ih-terracotta)" fillOpacity="0.45" stroke="var(--ih-maroon)" strokeWidth="1.2" />
          <circle cx="136" cy="152" r="5" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="0.9" />
          <circle cx="160" cy="150" r="6" fill="var(--ih-red)" stroke="var(--ih-maroon)" strokeWidth="0.9" />
          <circle cx="184" cy="152" r="5" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="0.9" />
          <circle cx="64" cy="166" r="14" fill="var(--ih-terracotta)" stroke="var(--ih-maroon)" strokeWidth="1.4" />
          <circle cx="256" cy="166" r="14" fill="var(--ih-terracotta)" stroke="var(--ih-maroon)" strokeWidth="1.4" />
        </svg>
      );

    case 'mehendi':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-44 w-full" aria-hidden="true">
          <path
            d="M24 190V76C24 44 64 26 160 14C256 26 296 44 296 76V190H24Z"
            fill="var(--ih-green)"
            fillOpacity="0.18"
            stroke="var(--ih-maroon)"
            strokeWidth="1.6"
          />
          <circle cx="160" cy="92" r="40" fill="var(--ih-ivory)" stroke="var(--ih-green)" strokeWidth="1.5" strokeDasharray="3 3" />
          {Array.from({ length: 8 }, (_, i) => (
            <g key={i} transform={`rotate(${i * 45} 160 92)`}>
              <path d="M160 56C166 66 166 76 160 84C154 76 154 66 160 56Z" fill="var(--ih-green)" fillOpacity="0.4" stroke="var(--ih-maroon)" strokeWidth="1" />
            </g>
          ))}
          <circle cx="160" cy="92" r="10" fill="var(--ih-red)" fillOpacity="0.85" stroke="var(--ih-gold)" strokeWidth="1.4" />
          <rect x="64" y="156" width="192" height="22" rx="8" fill="var(--ih-terracotta)" stroke="var(--ih-maroon)" strokeWidth="1.4" />
          <circle cx="72" cy="154" r="12" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.3" />
          <circle cx="248" cy="154" r="12" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.3" />
          <path d="M46 168C36 122 44 82 70 50" stroke="var(--ih-green)" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M274 168C284 122 276 82 250 50" stroke="var(--ih-green)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case 'sangeet':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-44 w-full" aria-hidden="true">
          <path
            d="M24 190V76C24 44 64 26 160 14C256 26 296 44 296 76V190H24Z"
            fill="var(--ih-maroon)"
            fillOpacity="0.18"
            stroke="var(--ih-maroon)"
            strokeWidth="1.6"
          />
          <path d="M36 52 Q160 88 284 52" stroke="var(--ih-gold)" strokeWidth="1.6" />
          {[76, 128, 192, 244].map((x) => (
            <g key={x}>
              <rect x={x - 7} y="64" width="14" height="20" rx="4" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.1" />
              <circle cx={x} cy="74" r="3" fill="var(--ih-ivory)" />
            </g>
          ))}
          <g transform="rotate(-24 110 138)">
            <ellipse cx="104" cy="154" rx="18" ry="22" fill="var(--ih-terracotta)" stroke="var(--ih-maroon)" strokeWidth="1.5" />
            <rect x="100" y="92" width="8" height="54" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.2" />
            <circle cx="104" cy="154" r="5" fill="var(--ih-ivory)" />
          </g>
          <g transform="rotate(10 210 152)">
            <ellipse cx="212" cy="152" rx="28" ry="16" fill="var(--ih-red)" stroke="var(--ih-maroon)" strokeWidth="1.5" />
            <path d="M192 138L202 166M208 136L218 168M224 138L232 164" stroke="var(--ih-gold)" strokeWidth="1.4" />
          </g>
          <circle cx="160" cy="116" r="3.5" fill="var(--ih-maroon)" />
          <path d="M163.5 116V98L174 94V112" stroke="var(--ih-maroon)" strokeWidth="1.4" />
          <circle cx="170.5" cy="112" r="3.5" fill="var(--ih-maroon)" />
        </svg>
      );

    case 'ceremony':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-44 w-full" aria-hidden="true">
          <path
            d="M24 190V76C24 44 64 26 160 14C256 26 296 44 296 76V190H24Z"
            fill="var(--ih-red)"
            fillOpacity="0.16"
            stroke="var(--ih-maroon)"
            strokeWidth="1.6"
          />
          <path d="M72 72L160 32L248 72H72Z" fill="var(--ih-red)" stroke="var(--ih-gold)" strokeWidth="1.8" />
          <rect x="84" y="72" width="12" height="106" fill="var(--ih-maroon)" stroke="var(--ih-gold)" strokeWidth="1.2" />
          <rect x="224" y="72" width="12" height="106" fill="var(--ih-maroon)" stroke="var(--ih-gold)" strokeWidth="1.2" />
          <polygon points="142,178 178,178 170,162 150,162" fill="var(--ih-terracotta)" stroke="var(--ih-maroon)" strokeWidth="1.3" />
          <path d="M160 140C166 148 168 156 160 162C152 156 154 148 160 140Z" fill="var(--ih-gold)" stroke="var(--ih-red)" strokeWidth="1.2" />
          <circle cx="118" cy="166" r="10" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.3" />
          <path d="M112 156L118 148L124 156" stroke="var(--ih-green)" strokeWidth="2" />
          <circle cx="202" cy="166" r="10" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.3" />
          <path d="M196 156L202 148L208 156" stroke="var(--ih-green)" strokeWidth="2" />
        </svg>
      );

    case 'reception':
    default:
      return (
        <svg viewBox="0 0 320 200" fill="none" className="h-44 w-full" aria-hidden="true">
          <path
            d="M24 190V76C24 44 64 26 160 14C256 26 296 44 296 76V190H24Z"
            fill="var(--ih-maroon)"
            fillOpacity="0.18"
            stroke="var(--ih-maroon)"
            strokeWidth="1.6"
          />
          <path d="M160 40A12 12 0 1 0 172 52A9 9 0 1 1 160 40Z" fill="var(--ih-gold)" />
          <circle cx="114" cy="48" r="2.2" fill="var(--ih-gold)" />
          <circle cx="206" cy="48" r="2.2" fill="var(--ih-gold)" />
          <path d="M90 174V112C90 88 122 72 160 72C198 72 230 88 230 112V174" stroke="var(--ih-gold)" strokeWidth="4" strokeLinecap="round" />
          <path d="M90 174V112C90 88 122 72 160 72C198 72 230 88 230 112V174" stroke="var(--ih-red)" strokeWidth="1.6" strokeDasharray="4 5" />
          <rect x="112" y="144" width="96" height="24" rx="6" fill="var(--ih-maroon)" stroke="var(--ih-gold)" strokeWidth="1.4" />
          <rect x="74" y="168" width="172" height="14" rx="3" fill="var(--ih-terracotta)" stroke="var(--ih-maroon)" strokeWidth="1.3" />
        </svg>
      );
  }
};

export const HeritageEventsScenes: React.FC<HeritageEventsScenesProps> = ({
  config,
  onSceneOpen,
}) => {
  const prefersReduced = useReducedMotion();
  const [activeEvent, setActiveEvent] = useState<HeritageWeddingEvent | null>(null);
  const { events } = config;

  useEffect(() => {
    if (!activeEvent) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveEvent(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeEvent]);

  const handleSelectScene = (event: HeritageWeddingEvent) => {
    onSceneOpen?.();
    setActiveEvent(event);
  };

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="heritage-paper py-16 text-ih-ink sm:py-24"
    >
      <HeritageBorderStrip className="mb-12" />

      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <HeritageReveal className="mx-auto max-w-2xl text-center">
          <p className="font-heritageBody text-xs font-semibold uppercase tracking-[0.26em] text-ih-red">
            {events.eyebrow}
          </p>
          <h2
            id="events-heading"
            className="mt-2 font-heritageDisplay text-3xl text-ih-maroon sm:text-5xl"
          >
            {events.heading}
          </h2>
          <p className="mt-3 font-heritageBody text-sm leading-relaxed text-ih-inkMuted sm:text-base">
            {events.subtitle}
          </p>
          <LotusDivider className="my-6" />
          <p
            style={{ backgroundColor: 'var(--ih-ivory-card)', borderColor: 'var(--ih-gold)' }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-heritageBody text-[11px] font-semibold text-ih-maroon shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-ih-gold" />
            <span>{events.interactionHint}</span>
          </p>
        </HeritageReveal>

        {/* 3D Illustrated Event Scenes Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.items.map((event, idx) => (
            <HeritageReveal key={event.id} delay={Math.min(idx * 0.08, 0.28)}>
              <button
                type="button"
                onClick={() => handleSelectScene(event)}
                aria-label={`Explore ${event.title} — ${event.date} at ${event.time}`}
                className="group miniature-frame relative flex h-full w-full flex-col justify-between overflow-hidden rounded-t-[84px] rounded-b-2xl border-2 border-ih-gold px-4 pb-5 pt-7 text-center transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ih-maroon sm:rounded-t-[130px] sm:px-5 sm:pb-6 sm:pt-8"
              >
                <div className="flex justify-center">
                  <SwingingBell className="h-8 w-6 opacity-90" delay={`${idx * 0.4}s`} />
                </div>

                <div className="mt-1 w-full">
                  <span className="font-heritageBody text-[10px] font-semibold uppercase tracking-[0.24em] text-ih-green">
                    {event.chapterLabel}
                  </span>

                  <div className="mt-2 transition-transform duration-500 group-hover:scale-[1.03]">
                    <IllustratedEventSceneArt sceneType={event.sceneType} />
                  </div>

                  <h3 className="mt-3 font-heritageDisplay text-2xl text-ih-maroon">
                    {event.title}
                  </h3>

                  <div className="mt-3 space-y-1 font-heritageBody text-xs text-ih-ink sm:text-sm">
                    <p className="font-semibold text-ih-red">
                      {event.date} · {event.time}
                    </p>
                    <p className="text-ih-inkMuted">{event.venue}</p>
                  </div>

                  <div
                    style={{ backgroundColor: 'var(--ih-ivory)', borderColor: 'var(--ih-border)' }}
                    className="mt-4 rounded-xl border px-3.5 py-2.5"
                  >
                    <p className="font-heritageBody text-[10px] font-semibold uppercase tracking-[0.18em] text-ih-maroon">
                      Dress Code
                    </p>
                    <p className="mt-0.5 font-heritageBody text-xs font-medium text-ih-ink">
                      {event.dressCode}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex w-full items-center justify-center gap-2 border-t border-ih-border pt-3.5 font-heritageBody text-xs font-semibold uppercase tracking-[0.16em] text-ih-maroon group-hover:text-ih-red">
                  <span>View Ceremony Details</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </button>
            </HeritageReveal>
          ))}
        </div>
      </div>

      {/* 100% Opaque Solid Parchment Modal Card */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-panel-title"
            onClick={() => setActiveEvent(null)}
            style={{ backgroundColor: 'rgba(34, 9, 14, 0.84)' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.35, ease: HERITAGE_EASE }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#FFFDF7',
                borderColor: 'var(--ih-gold)',
                boxShadow:
                  '0 32px 80px rgba(10, 2, 4, 0.72), inset 0 0 0 2px var(--ih-gold), inset 0 0 0 6px #FFFDF7, inset 0 0 0 7px rgba(112, 38, 50, 0.35)',
              }}
              className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-[68px] rounded-b-2xl border-2 text-ih-ink sm:rounded-t-[110px]"
            >
              <button
                type="button"
                onClick={() => setActiveEvent(null)}
                aria-label="Close ceremony details"
                style={{
                  backgroundColor: 'var(--ih-maroon)',
                  color: 'var(--ih-on-maroon)',
                  borderColor: 'var(--ih-gold)',
                }}
                className="absolute right-3.5 top-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 shadow-md transition-transform hover:scale-105 sm:right-6 sm:top-6 sm:h-10 sm:w-10"
              >
                <X className="h-4 w-4" />
              </button>

              {activeEvent.image ? (
                <div className="relative h-48 w-full overflow-hidden border-b-2 border-ih-gold sm:h-56">
                  <img
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    className="h-full w-full object-cover object-center"
                  />
                  <span
                    style={{
                      backgroundColor: 'var(--ih-maroon)',
                      color: 'var(--ih-on-maroon)',
                      borderColor: 'var(--ih-gold)',
                    }}
                    className="absolute bottom-3 left-6 rounded-full border px-4 py-1 font-heritageBody text-[10px] font-semibold uppercase tracking-[0.2em] shadow-md"
                  >
                    {activeEvent.chapterLabel}
                  </span>
                </div>
              ) : (
                <div style={{ backgroundColor: 'var(--ih-ivory)' }} className="pt-6">
                  <IllustratedEventSceneArt sceneType={activeEvent.sceneType} />
                </div>
              )}

              <div className="px-6 py-7 sm:px-9 sm:py-8">
                <div className="flex items-center justify-between gap-4">
                  <h3
                    id="event-panel-title"
                    className="font-heritageDisplay text-3xl text-ih-maroon sm:text-4xl"
                  >
                    {activeEvent.title}
                  </h3>
                  <FlickeringDiya className="h-9 w-10 shrink-0" />
                </div>

                <div
                  style={{ backgroundColor: '#F9EED8', borderColor: 'rgba(112, 38, 50, 0.22)' }}
                  className="mt-5 space-y-3 rounded-xl border p-4 font-heritageBody text-sm text-ih-ink"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 shrink-0 text-ih-red" />
                    <span className="font-semibold">{activeEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-ih-red" />
                    <span>{activeEvent.time}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ih-green" />
                    <div>
                      <p className="font-semibold">{activeEvent.venue}</p>
                      {activeEvent.venueAddress && (
                        <p className="text-xs text-ih-inkMuted">{activeEvent.venueAddress}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-t border-ih-border pt-2.5">
                    <Shirt className="mt-0.5 h-4 w-4 shrink-0 text-ih-terracotta" />
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-ih-maroon">
                        Dress Code
                      </span>
                      <span>{activeEvent.dressCode}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-5 font-heritageBody text-sm leading-relaxed text-ih-ink sm:text-base">
                  {activeEvent.description}
                </p>

                <div className="mt-6 flex flex-col gap-3 border-t border-ih-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                  {activeEvent.mapsUrl ? (
                    <a
                      href={activeEvent.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: 'var(--ih-maroon)',
                        color: 'var(--ih-on-maroon)',
                      }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-heritageBody text-xs font-semibold uppercase tracking-[0.16em] shadow-sm transition-opacity hover:opacity-90 sm:w-auto sm:py-2.5"
                    >
                      <span>Open Venue Map</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="hidden sm:inline" />
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveEvent(null)}
                    style={{
                      backgroundColor: '#F9EED8',
                      color: 'var(--ih-maroon)',
                      borderColor: 'var(--ih-gold)',
                    }}
                    className="w-full rounded-full border px-5 py-3 font-heritageBody text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:brightness-95 sm:w-auto sm:py-2.5"
                  >
                    Close Scene
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
