import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const HERITAGE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const HeritageReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}> = ({ children, delay = 0, yOffset = 20, className = '' }) => {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.75, delay, ease: HERITAGE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Hand-drawn Rajasthani lotus & curling vine divider with scroll-triggered stroke reveal.
 */
export const LotusDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  const prefersReduced = useReducedMotion();
  return (
    <div
      className={`mx-auto flex w-full max-w-lg items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 160 22" fill="none" className="h-5 flex-1 text-ih-maroon">
        <motion.path
          d="M2 11H156"
          pathLength={1}
          stroke="var(--ih-gold)"
          strokeWidth="1.2"
          strokeDasharray="1"
          initial={prefersReduced ? false : { strokeDashoffset: 1 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: HERITAGE_EASE }}
        />
        <path
          d="M120 11C126 5 134 5 140 11C134 17 126 17 120 11Z"
          fill="var(--ih-green)"
          fillOpacity="0.22"
          stroke="var(--ih-green)"
          strokeWidth="1"
        />
        <circle cx="96" cy="11" r="2.2" fill="var(--ih-red)" />
      </svg>

      <svg viewBox="0 0 56 36" fill="none" className="h-8 w-12 shrink-0">
        {/* Center & Side Lotus Petals */}
        <path
          d="M28 4C33 11 35 19 28 28C21 19 23 11 28 4Z"
          fill="var(--ih-red)"
          fillOpacity="0.88"
          stroke="var(--ih-maroon)"
          strokeWidth="1.2"
        />
        <path
          d="M28 28C19 24 14 17 14 10C20 12 24 18 28 28Z"
          fill="var(--ih-terracotta)"
          fillOpacity="0.82"
          stroke="var(--ih-maroon)"
          strokeWidth="1.1"
        />
        <path
          d="M28 28C37 24 42 17 42 10C36 12 32 18 28 28Z"
          fill="var(--ih-terracotta)"
          fillOpacity="0.82"
          stroke="var(--ih-maroon)"
          strokeWidth="1.1"
        />
        <path
          d="M16 28C10 27 6 22 6 16C12 18 15 22 16 28Z"
          fill="var(--ih-green)"
          fillOpacity="0.78"
          stroke="var(--ih-maroon)"
          strokeWidth="1"
        />
        <path
          d="M40 28C46 27 50 22 50 16C44 18 41 22 40 28Z"
          fill="var(--ih-green)"
          fillOpacity="0.78"
          stroke="var(--ih-maroon)"
          strokeWidth="1"
        />
        <path d="M14 31H42" stroke="var(--ih-gold)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      <svg viewBox="0 0 160 22" fill="none" className="h-5 flex-1 -scale-x-100 text-ih-maroon">
        <motion.path
          d="M2 11H156"
          pathLength={1}
          stroke="var(--ih-gold)"
          strokeWidth="1.2"
          strokeDasharray="1"
          initial={prefersReduced ? false : { strokeDashoffset: 1 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: HERITAGE_EASE }}
        />
        <path
          d="M120 11C126 5 134 5 140 11C134 17 126 17 120 11Z"
          fill="var(--ih-green)"
          fillOpacity="0.22"
          stroke="var(--ih-green)"
          strokeWidth="1"
        />
        <circle cx="96" cy="11" r="2.2" fill="var(--ih-red)" />
      </svg>
    </div>
  );
};

/**
 * Madhubani / Kalamkari ornamental frieze border between storybook chapters.
 */
export const HeritageBorderStrip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full overflow-hidden py-1 ${className}`} aria-hidden="true">
    <svg viewBox="0 0 1200 32" fill="none" preserveAspectRatio="none" className="h-6 w-full sm:h-7">
      <line x1="0" y1="3" x2="1200" y2="3" stroke="var(--ih-maroon)" strokeWidth="1.4" strokeOpacity="0.55" />
      <line x1="0" y1="29" x2="1200" y2="29" stroke="var(--ih-maroon)" strokeWidth="1.4" strokeOpacity="0.55" />
      {Array.from({ length: 24 }, (_, idx) => {
        const x = idx * 50 + 25;
        return (
          <g key={x}>
            <polygon
              points={`${x},7 ${x + 12},16 ${x},25 ${x - 12},16`}
              fill={idx % 2 === 0 ? 'var(--ih-gold)' : 'var(--ih-terracotta)'}
              fillOpacity="0.35"
              stroke="var(--ih-maroon)"
              strokeWidth="1"
            />
            <circle
              cx={x}
              cy="16"
              r="3"
              fill={idx % 2 === 0 ? 'var(--ih-red)' : 'var(--ih-green)'}
            />
            <circle cx={x + 25} cy="16" r="2" fill="var(--ih-gold)" />
          </g>
        );
      })}
    </svg>
  </div>
);

/**
 * Rotating 12-petal Rajasthani lotus mandala.
 */
export const RotatingMandala: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    aria-hidden="true"
    className={`animate-mandala-slow pointer-events-none select-none ${className}`}
  >
    <circle cx="100" cy="100" r="92" stroke="var(--ih-gold)" strokeWidth="1.2" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="80" stroke="var(--ih-maroon)" strokeWidth="1.1" strokeOpacity="0.55" />
    <circle cx="100" cy="100" r="56" stroke="var(--ih-terracotta)" strokeWidth="1" strokeOpacity="0.65" />
    {Array.from({ length: 12 }, (_, i) => (
      <g key={i} transform={`rotate(${i * 30} 100 100)`}>
        <path
          d="M100 14C109 30 109 44 100 58C91 44 91 30 100 14Z"
          fill={i % 2 === 0 ? 'var(--ih-gold)' : 'var(--ih-red)'}
          fillOpacity="0.24"
          stroke="var(--ih-maroon)"
          strokeWidth="1"
        />
        <circle cx="100" cy="22" r="2.4" fill="var(--ih-green)" />
      </g>
    ))}
    <circle cx="100" cy="100" r="14" fill="var(--ih-gold)" fillOpacity="0.35" stroke="var(--ih-maroon)" strokeWidth="1.2" />
    <circle cx="100" cy="100" r="5" fill="var(--ih-red)" />
  </svg>
);

/**
 * Hand-drawn Madhubani / Rajasthani miniature Peacock with optional stroke-draw entrance.
 */
export const PeacockIllustration: React.FC<{
  flip?: boolean;
  drawOnMount?: boolean;
  className?: string;
}> = ({ flip = false, drawOnMount = false, className = '' }) => {
  const prefersReduced = useReducedMotion();
  const shouldDraw = drawOnMount && !prefersReduced;

  return (
    <motion.svg
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden="true"
      className={`${flip ? '-scale-x-100' : ''} ${className}`}
      animate={prefersReduced ? undefined : { y: [0, -3, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Fanned Ornamental Tail Feathers */}
      {[
        { angle: -34, color: 'var(--ih-green)' },
        { angle: -18, color: 'var(--ih-terracotta)' },
        { angle: -2, color: 'var(--ih-red)' },
        { angle: 14, color: 'var(--ih-green)' },
        { angle: 30, color: 'var(--ih-gold)' },
      ].map((feather, idx) => (
        <g key={feather.angle} transform={`rotate(${feather.angle} 96 118)`}>
          <motion.path
            d="M96 118C90 88 86 60 96 34C106 60 102 88 96 118Z"
            pathLength={1}
            fill={feather.color}
            fillOpacity="0.22"
            stroke="var(--ih-maroon)"
            strokeWidth="1.25"
            strokeDasharray="1"
            initial={shouldDraw ? { strokeDashoffset: 1, fillOpacity: 0 } : false}
            animate={{ strokeDashoffset: 0, fillOpacity: 0.22 }}
            transition={{ duration: 1.2, delay: 0.15 + idx * 0.1, ease: HERITAGE_EASE }}
          />
          <motion.circle
            cx="96"
            cy="48"
            r="6.5"
            fill="var(--ih-gold)"
            fillOpacity="0.88"
            stroke="var(--ih-maroon)"
            strokeWidth="1.1"
            initial={shouldDraw ? { opacity: 0, scale: 0.5 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 + idx * 0.08 }}
          />
          <circle cx="96" cy="48" r="2.8" fill="var(--ih-green)" />
        </g>
      ))}

      {/* Peacock Body & Curved Neck */}
      <motion.path
        d="M118 134C100 138 82 128 74 114C66 100 66 84 62 72C59 62 52 56 46 58C40 60 40 68 46 72C52 76 54 84 54 96C54 114 66 136 86 142C102 146 116 142 126 136Z"
        pathLength={1}
        fill="var(--ih-green)"
        fillOpacity="0.88"
        stroke="var(--ih-maroon)"
        strokeWidth="1.6"
        strokeDasharray="1"
        initial={shouldDraw ? { strokeDashoffset: 1, fillOpacity: 0 } : false}
        animate={{ strokeDashoffset: 0, fillOpacity: 0.88 }}
        transition={{ duration: 1.4, delay: 0.2, ease: HERITAGE_EASE }}
      />

      {/* Wing Plumage Madhubani Hatching */}
      <motion.path
        d="M72 110C84 102 100 106 108 122C94 128 78 124 72 110Z"
        pathLength={1}
        fill="var(--ih-gold)"
        fillOpacity="0.55"
        stroke="var(--ih-maroon)"
        strokeWidth="1.3"
        strokeDasharray="1"
        initial={shouldDraw ? { strokeDashoffset: 1, opacity: 0 } : false}
        animate={{ strokeDashoffset: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      {/* Beak & Crown Crest */}
      <path d="M42 61L32 64L42 66" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.1" />
      <circle cx="47" cy="62" r="1.7" fill="var(--ih-ivory)" />
      <path d="M48 56L44 43M51 56L52 42M54 57L60 46" stroke="var(--ih-maroon)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="44" cy="42" r="2.2" fill="var(--ih-red)" />
      <circle cx="52" cy="41" r="2.2" fill="var(--ih-gold)" />
      <circle cx="60" cy="45" r="2.2" fill="var(--ih-green)" />

      {/* Perched Floral Branch */}
      <path
        d="M28 154C64 148 110 148 152 156"
        stroke="var(--ih-maroon)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="64" cy="150" r="4" fill="var(--ih-red)" />
      <circle cx="132" cy="153" r="4" fill="var(--ih-gold)" />
    </motion.svg>
  );
};

/**
 * Traditional painted Rajasthani Ceremonial Elephant motif.
 */
export const ElephantIllustration: React.FC<{ flip?: boolean; className?: string }> = ({
  flip = false,
  className = '',
}) => (
  <svg
    viewBox="0 0 180 140"
    fill="none"
    aria-hidden="true"
    className={`${flip ? '-scale-x-100' : ''} ${className}`}
  >
    {/* Body & Legs */}
    <path
      d="M36 96V124H52V100H68V124H84V98H108V124H124V92C132 82 134 64 128 52C122 38 102 32 80 34C56 36 42 46 38 62L36 96Z"
      fill="var(--ih-ivory)"
      stroke="var(--ih-maroon)"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    {/* Head, Ear & Raised Trunk */}
    <path
      d="M124 44C138 40 150 48 152 62C154 74 144 82 146 92C148 100 158 102 162 94C166 86 158 80 154 84"
      stroke="var(--ih-maroon)"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M114 48C106 54 106 72 116 78C124 82 130 70 128 56C126 48 120 44 114 48Z"
      fill="var(--ih-terracotta)"
      fillOpacity="0.45"
      stroke="var(--ih-maroon)"
      strokeWidth="1.4"
    />
    {/* Ornamental Caparison Cloth (Jhool) */}
    <path
      d="M52 40C68 34 94 34 108 42L106 86C90 92 66 92 50 84Z"
      fill="var(--ih-red)"
      fillOpacity="0.88"
      stroke="var(--ih-gold)"
      strokeWidth="1.8"
    />
    <circle cx="79" cy="62" r="10" fill="var(--ih-gold)" fillOpacity="0.85" stroke="var(--ih-maroon)" strokeWidth="1.2" />
    <circle cx="79" cy="62" r="4" fill="var(--ih-green)" />
    {/* Forehead Tilak & Marigold Garland */}
    <circle cx="140" cy="54" r="2.2" fill="var(--ih-maroon)" />
    <circle cx="158" cy="96" r="4.5" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1" />
    <circle cx="158" cy="105" r="3.5" fill="var(--ih-red)" stroke="var(--ih-maroon)" strokeWidth="1" />
  </svg>
);

/**
 * Illustrated miniature Parrot perched on curling Kalamkari vine.
 */
export const ParrotMotif: React.FC<{ flip?: boolean; className?: string }> = ({
  flip = false,
  className = '',
}) => (
  <svg
    viewBox="0 0 90 90"
    fill="none"
    aria-hidden="true"
    className={`${flip ? '-scale-x-100' : ''} ${className}`}
  >
    <path d="M12 70C30 58 52 56 76 62" stroke="var(--ih-maroon)" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M36 58C30 46 32 32 42 26C50 22 58 26 58 34C58 44 50 54 44 60L54 78L38 64Z"
      fill="var(--ih-green)"
      fillOpacity="0.88"
      stroke="var(--ih-maroon)"
      strokeWidth="1.4"
    />
    <path d="M56 30L66 34L57 38" fill="var(--ih-red)" stroke="var(--ih-maroon)" strokeWidth="1.1" />
    <circle cx="51" cy="31" r="1.5" fill="var(--ih-ivory)" />
    <path d="M40 42C46 39 51 43 49 51C44 53 39 48 40 42Z" fill="var(--ih-gold)" fillOpacity="0.65" />
  </svg>
);

/**
 * Hanging Brass Temple Bell with gentle pendulum sway.
 */
export const SwingingBell: React.FC<{ className?: string; delay?: string }> = ({
  className = '',
  delay = '0s',
}) => (
  <svg
    viewBox="0 0 44 68"
    fill="none"
    aria-hidden="true"
    style={{ animationDelay: delay }}
    className={`animate-bell-sway ${className}`}
  >
    <line x1="22" y1="0" x2="22" y2="20" stroke="var(--ih-maroon)" strokeWidth="1.5" />
    <circle cx="22" cy="22" r="3.5" fill="var(--ih-gold)" stroke="var(--ih-maroon)" strokeWidth="1.2" />
    <path
      d="M22 25C15 26 11 33 10 46L6 52H38L34 46C33 33 29 26 22 25Z"
      fill="var(--ih-gold)"
      fillOpacity="0.9"
      stroke="var(--ih-maroon)"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="22" cy="56" r="3" fill="var(--ih-red)" stroke="var(--ih-maroon)" strokeWidth="1.1" />
  </svg>
);

/**
 * Traditional Clay Diya Oil Lamp with animated flickering flame.
 */
export const FlickeringDiya: React.FC<{ className?: string; delay?: string }> = ({
  className = '',
  delay = '0s',
}) => (
  <svg viewBox="0 0 56 52" fill="none" aria-hidden="true" className={className}>
    {/* Soft Flame Glow Halo */}
    <circle cx="28" cy="18" r="14" fill="var(--ih-gold)" fillOpacity="0.25" />
    {/* Animated Flame */}
    <path
      style={{ animationDelay: delay }}
      className="animate-diya-flicker"
      d="M28 6C32 13 34 19 28 26C22 19 24 13 28 6Z"
      fill="var(--ih-gold)"
      stroke="var(--ih-red)"
      strokeWidth="1.2"
    />
    <path d="M28 13C30 17 30 21 28 24C26 21 26 17 28 13Z" fill="var(--ih-ivory)" />
    {/* Terracotta Diya Bowl */}
    <path
      d="M8 29C12 40 20 44 28 44C36 44 44 40 48 29H8Z"
      fill="var(--ih-terracotta)"
      stroke="var(--ih-maroon)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M16 34H40" stroke="var(--ih-gold)" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
