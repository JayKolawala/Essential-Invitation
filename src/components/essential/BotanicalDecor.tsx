import React from 'react';

interface BotanicalProps {
  className?: string;
}

/**
 * Minimal fine-line olive/sage sprig ornament. Uses currentColor so it inherits theme tokens.
 */
export const BotanicalSprig: React.FC<BotanicalProps> = ({ className = 'h-7 w-7' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden="true"
    className={`text-essential-primary ${className}`}
  >
    <path
      d="M20 35C20 24.5 20.5 14 25 6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M20.2 26C15.5 25.2 12.2 21.8 11 17.5C15.5 18 18.8 21.4 20.2 26Z"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinejoin="round"
    />
    <path
      d="M20.6 19.5C24.8 18.4 28.4 15.2 29.5 11C25.2 11.4 21.9 14.8 20.6 19.5Z"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinejoin="round"
    />
    <path
      d="M22.2 12.5C18.6 11.5 16.4 8.6 16.2 5C19.6 6 21.6 8.8 22.2 12.5Z"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Hairline horizontal divider with a centered minimal botanical bud.
 */
export const BotanicalDivider: React.FC<BotanicalProps> = ({ className = '' }) => (
  <div
    className={`mx-auto flex max-w-xs items-center justify-center gap-3 ${className}`}
    aria-hidden="true"
  >
    <span className="h-px flex-1 bg-essential-borderStrong/60" />
    <svg
      viewBox="0 0 28 16"
      fill="none"
      className="h-4 w-7 shrink-0 text-essential-primary/80"
    >
      <path
        d="M2 8H10M18 8H26"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M14 2C15.8 4.4 15.8 11.6 14 14C12.2 11.6 12.2 4.4 14 2Z"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <circle cx="14" cy="8" r="1.1" fill="var(--essential-accent)" />
    </svg>
    <span className="h-px flex-1 bg-essential-borderStrong/60" />
  </div>
);

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  headingId: string;
  align?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  headingId,
  align = 'center',
}) => {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'}>
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.26em] text-essential-primary">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-2.5 font-serif text-3xl font-normal tracking-tight text-essential-text sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 font-sans text-sm leading-relaxed text-essential-muted sm:text-base">
          {subtitle}
        </p>
      )}
      {centered && <BotanicalDivider className="mt-6" />}
    </div>
  );
};
