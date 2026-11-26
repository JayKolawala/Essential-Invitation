import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FloatingPetalsProps {
  count?: number;
  className?: string;
}

/**
 * Gentle falling marigold and rose petals rendered with GPU transforms.
 * Automatically disabled under prefers-reduced-motion.
 */
export const FloatingPetals: React.FC<FloatingPetalsProps> = ({ count = 12, className = '' }) => {
  const prefersReduced = useReducedMotion();

  const petals = useMemo(() => {
    const palette = ['var(--ih-red)', 'var(--ih-gold)', 'var(--ih-terracotta)'];
    return Array.from({ length: count }, (_, idx) => ({
      id: idx,
      left: ((idx * 29 + 8) % 92) + 4,
      delay: (idx % 5) * 0.9,
      duration: 8 + (idx % 4) * 2.2,
      size: 9 + (idx % 3) * 3,
      sway: (idx % 2 === 0 ? 1 : -1) * (16 + (idx % 3) * 10),
      color: palette[idx % palette.length],
    }));
  }, [count]);

  if (prefersReduced) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          initial={{ y: '-8%', x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0%', '105%'],
            x: [0, petal.sway, -petal.sway * 0.5, petal.sway * 0.3],
            opacity: [0, 0.78, 0.65, 0],
            rotate: [0, 140, 290],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: `${petal.left}%`,
            top: '-2%',
            width: petal.size,
            height: petal.size * 1.3,
            backgroundColor: petal.color,
            borderRadius: '70% 30% 65% 35%',
          }}
          className="absolute block opacity-75"
        />
      ))}
    </div>
  );
};
