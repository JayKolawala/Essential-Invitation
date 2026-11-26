import React from 'react';
import { Calendar, Clock, ExternalLink, Flower2, HeartHandshake, MapPin, Shirt, Wine } from 'lucide-react';
import type { EventIconType, WeddingConfig, WeddingEvent } from '../../types/wedding';
import { SectionHeading } from './BotanicalDecor';
import { FadeInSection } from './MotionPrimitives';

interface EventsSectionProps {
  config: WeddingConfig;
}

const EVENT_ICONS: Record<EventIconType, React.ComponentType<{ className?: string }>> = {
  drinks: Wine,
  ceremony: HeartHandshake,
  dinner: Flower2,
  floral: Flower2,
};

const EventCard: React.FC<{ event: WeddingEvent; index: number }> = ({ event, index }) => {
  const Icon = EVENT_ICONS[event.iconType] ?? Flower2;

  return (
    <FadeInSection delay={Math.min(index * 0.08, 0.24)}>
      <article className="flex h-full flex-col justify-between rounded-2xl border border-essential-border bg-essential-surface p-6 shadow-card transition-colors duration-300 hover:border-essential-borderStrong sm:p-8">
        <div>
          <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-essential-tintPrimary text-essential-primary">
            <Icon className="h-4 w-4" />
          </div>

          <h3 className="font-serif text-2xl font-normal text-essential-text">
            {event.title}
          </h3>

          <div className="mt-5 space-y-2.5 border-y border-essential-border py-4 font-sans text-xs text-essential-text/90 sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Calendar className="h-4 w-4 shrink-0 text-essential-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-essential-primary" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-essential-primary" />
              <div>
                <span className="font-medium">{event.venue}</span>
                {event.address && (
                  <span className="block text-xs text-essential-muted">{event.address}</span>
                )}
              </div>
            </div>
          </div>

          {event.description && (
            <p className="mt-4 font-sans text-sm leading-relaxed text-essential-muted">
              {event.description}
            </p>
          )}
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-essential-border bg-essential-bg/75 px-4 py-3">
            <div className="flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-essential-primary">
              <Shirt className="h-3.5 w-3.5" />
              <span>Dress Code</span>
            </div>
            <p className="mt-1 font-serif text-sm font-medium text-essential-text sm:text-base">
              {event.dressCode}
            </p>
          </div>

          {event.mapsUrl && (
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.16em] text-essential-primary transition-colors hover:text-essential-text"
            >
              <span>View Venue Map</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </article>
    </FadeInSection>
  );
};

export const EventsSection: React.FC<EventsSectionProps> = ({ config }) => {
  const { events } = config;
  const count = events.items.length;

  const gridClasses =
    count === 1
      ? 'mx-auto max-w-xl grid-cols-1'
      : count === 2
        ? 'mx-auto max-w-4xl md:grid-cols-2'
        : count === 3
          ? 'md:grid-cols-2 lg:grid-cols-3'
          : 'md:grid-cols-2';

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="bg-essential-bg py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeInSection>
          <SectionHeading
            eyebrow={events.eyebrow}
            title={events.heading}
            subtitle={events.subtitle}
            headingId="events-heading"
          />
        </FadeInSection>

        <div className={`mt-12 grid gap-7 ${gridClasses}`}>
          {events.items.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
