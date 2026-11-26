import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const ESSENTIAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

/**
 * Lightweight scroll-triggered fade-in with gentle vertical settle.
 * Automatically disables transform motion when prefers-reduced-motion is active.
 */
export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  yOffset = 18,
  className = '',
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.65, delay, ease: ESSENTIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface GentleImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Subtle image entrance using soft opacity and gentle scale settle.
 */
export const GentleImageReveal: React.FC<GentleImageRevealProps> = ({
  children,
  delay = 0.06,
  className = '',
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.78, delay, ease: ESSENTIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
