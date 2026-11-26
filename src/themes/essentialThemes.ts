import type {
  EssentialThemeId,
  EssentialThemePreset,
  EssentialThemeTokens,
} from '../types/wedding';

export const ESSENTIAL_DEFAULT_THEME: EssentialThemeTokens = {
  primary: '#78866B',
  secondary: '#D8CDBB',
  background: '#FAF8F3',
  surface: '#FFFFFF',
  text: '#35352F',
  accent: '#B79A72',
};

export const ESSENTIAL_THEME_PRESETS: Record<EssentialThemeId, EssentialThemePreset> = {
  'ivory-sage': {
    id: 'ivory-sage',
    name: 'Ivory & Sage Green',
    tagline: 'Soft natural ivory paired with botanical sage and warm sand',
    tokens: ESSENTIAL_DEFAULT_THEME,
  },
  'linen-terracotta': {
    id: 'linen-terracotta',
    name: 'Warm Linen & Terracotta',
    tagline: 'Sunlit clay, soft oatmeal, and earthy espresso ink',
    tokens: {
      primary: '#9D6249',
      secondary: '#DFCFC1',
      background: '#FBF7F2',
      surface: '#FFFFFF',
      text: '#362B26',
      accent: '#B58E65',
    },
  },
  'oat-dusty-blue': {
    id: 'oat-dusty-blue',
    name: 'Oatmeal & Dusty Blue',
    tagline: 'Serene slate blue softened with warm oat and antique brass',
    tokens: {
      primary: '#5E758A',
      secondary: '#D7D2C8',
      background: '#F8F8F5',
      surface: '#FFFFFF',
      text: '#2B323A',
      accent: '#A99272',
    },
  },
  'cream-olive': {
    id: 'cream-olive',
    name: 'Warm Cream & Olive',
    tagline: 'Mediterranean olive grove tones on soft parchment cream',
    tokens: {
      primary: '#5C6749',
      secondary: '#DCD4C3',
      background: '#F9F6EE',
      surface: '#FFFFFF',
      text: '#2E3127',
      accent: '#A88C61',
    },
  },
  'champagne-charcoal': {
    id: 'champagne-charcoal',
    name: 'Champagne & Soft Charcoal',
    tagline: 'Minimal monochrome slate balanced with warm champagne sand',
    tokens: {
      primary: '#4A4945',
      secondary: '#DDD5C9',
      background: '#FAF9F6',
      surface: '#FFFFFF',
      text: '#282825',
      accent: '#B2966D',
    },
  },
};

export const ESSENTIAL_THEME_LIST: EssentialThemePreset[] = Object.values(ESSENTIAL_THEME_PRESETS);

interface RgbColor {
  r: number;
  g: number;
  b: number;
}

function normalizeHex(hex: string): string {
  const clean = hex.trim().replace('#', '');
  if (clean.length === 3) {
    return (
      '#' +
      clean
        .split('')
        .map((c) => c + c)
        .join('')
    );
  }
  return '#' + clean.slice(0, 6);
}

export function hexToRgb(hex: string): RgbColor {
  const normalized = normalizeHex(hex).replace('#', '');
  const intVal = parseInt(normalized, 16);
  if (Number.isNaN(intVal)) {
    return { r: 120, g: 134, b: 107 };
  }
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255,
  };
}

function toRgbTriplet(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  return `${r} ${g} ${b}`;
}

export function rgba(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function mixHex(hexA: string, hexB: string, weightB: number): string {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const w = Math.max(0, Math.min(1, weightB));
  const r = Math.round(a.r * (1 - w) + b.r * w);
  const g = Math.round(a.g * (1 - w) + b.g * w);
  const bl = Math.round(a.b * (1 - w) + b.b * w);
  return `#${[r, g, bl].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

export function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const channels = [r, g, b].map((c) => {
    const srgb = c / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function contrastRatio(hex1: string, hex2: string): number {
  const l1 = relativeLuminance(hex1);
  const l2 = relativeLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function isLightColor(hex: string): boolean {
  return relativeLuminance(hex) > 0.42;
}

export function getReadableTextColor(
  backgroundHex: string,
  lightText = '#FAF8F3',
  darkText = '#2C2C26'
): string {
  return contrastRatio(backgroundHex, lightText) >= contrastRatio(backgroundHex, darkText)
    ? lightText
    : darkText;
}

function ensureAccessibleInk(
  candidateHex: string,
  backgroundHex: string,
  fallbackHex: string
): string {
  if (contrastRatio(candidateHex, backgroundHex) >= 4.5) {
    return candidateHex;
  }
  for (let step = 0.15; step <= 0.9; step += 0.15) {
    const mixed = mixHex(candidateHex, fallbackHex, step);
    if (contrastRatio(mixed, backgroundHex) >= 4.5) {
      return mixed;
    }
  }
  return fallbackHex;
}

export function buildEssentialThemeVariables(
  tokens: EssentialThemeTokens
): Record<string, string> {
  const lightBg = isLightColor(tokens.background);
  const textMuted = ensureAccessibleInk(
    mixHex(tokens.text, tokens.background, lightBg ? 0.36 : 0.3),
    tokens.background,
    tokens.text
  );

  const surfaceAlt = lightBg
    ? mixHex(tokens.background, tokens.secondary, 0.24)
    : mixHex(tokens.surface, tokens.text, 0.08);

  const onPrimary = getReadableTextColor(tokens.primary, '#FAF8F3', '#282822');
  const onSecondary = getReadableTextColor(tokens.secondary, '#FAF8F3', '#2C2C26');
  const onAccent = getReadableTextColor(tokens.accent, '#FAF8F3', '#28251F');

  return {
    '--essential-primary': tokens.primary,
    '--essential-primary-rgb': toRgbTriplet(tokens.primary),
    '--essential-secondary': tokens.secondary,
    '--essential-secondary-rgb': toRgbTriplet(tokens.secondary),
    '--essential-bg': tokens.background,
    '--essential-bg-rgb': toRgbTriplet(tokens.background),
    '--essential-surface': tokens.surface,
    '--essential-surface-rgb': toRgbTriplet(tokens.surface),
    '--essential-surface-alt': surfaceAlt,
    '--essential-surface-alt-rgb': toRgbTriplet(surfaceAlt),
    '--essential-text': tokens.text,
    '--essential-text-rgb': toRgbTriplet(tokens.text),
    '--essential-text-muted': textMuted,
    '--essential-text-muted-rgb': toRgbTriplet(textMuted),
    '--essential-accent': tokens.accent,
    '--essential-accent-rgb': toRgbTriplet(tokens.accent),
    '--essential-on-primary': onPrimary,
    '--essential-on-primary-rgb': toRgbTriplet(onPrimary),
    '--essential-on-secondary': onSecondary,
    '--essential-on-secondary-rgb': toRgbTriplet(onSecondary),
    '--essential-on-accent': onAccent,
    '--essential-on-accent-rgb': toRgbTriplet(onAccent),
    '--essential-border': rgba(tokens.text, lightBg ? 0.11 : 0.22),
    '--essential-border-strong': rgba(tokens.primary, lightBg ? 0.34 : 0.42),
    '--essential-tint-primary': rgba(tokens.primary, lightBg ? 0.1 : 0.2),
    '--essential-tint-secondary': rgba(tokens.secondary, lightBg ? 0.28 : 0.24),
    '--essential-tint-accent': rgba(tokens.accent, lightBg ? 0.16 : 0.22),
    '--essential-shadow': rgba(tokens.text, lightBg ? 0.08 : 0.32),
  };
}
