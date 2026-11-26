import type {
  HeritageFontConfig,
  HeritageThemeId,
  HeritageThemePreset,
  HeritageThemeTokens,
} from '../types/royalPalace';

export const HERITAGE_DEFAULT_TOKENS: HeritageThemeTokens = {
  maroon: '#702632',
  red: '#A83D3D',
  gold: '#D5A642',
  ivory: '#F9EED8',
  green: '#3D684A',
  terracotta: '#C77752',
};

export const HERITAGE_DEFAULT_FONTS: HeritageFontConfig = {
  heading: '"Yatra One"',
  script: '"Great Vibes"',
  body: '"Poppins"',
};

export const HERITAGE_THEME_PRESETS: Record<HeritageThemeId, HeritageThemePreset> = {
  'indian-heritage': {
    id: 'indian-heritage',
    name: 'Indian Heritage',
    tagline: 'Deep maroon, traditional red, mustard gold & forest green on warm ivory',
    tokens: HERITAGE_DEFAULT_TOKENS,
  },
  'royal-maroon-antique-gold': {
    id: 'royal-maroon-antique-gold',
    name: 'Royal Maroon & Antique Gold',
    tagline: 'Heirloom royal maroon paired with burnished antique gold',
    tokens: {
      maroon: '#641D2D',
      red: '#8F2D38',
      gold: '#C6A15B',
      ivory: '#F5E7CE',
      green: '#365944',
      terracotta: '#B56E4D',
    },
  },
  'peacock-emerald': {
    id: 'peacock-emerald',
    name: 'Peacock Blue & Emerald Green',
    tagline: 'Madhubani peacock sapphire balanced with rich emerald foliage',
    tokens: {
      maroon: '#13485E',
      red: '#B84A39',
      gold: '#D4A847',
      ivory: '#F4EED9',
      green: '#1E634B',
      terracotta: '#C4754B',
    },
  },
  'mustard-terracotta': {
    id: 'mustard-terracotta',
    name: 'Mustard Yellow & Terracotta',
    tagline: 'Sunlit haldi mustard, earthy terracotta clay & deep sindoor brown',
    tokens: {
      maroon: '#7D3225',
      red: '#B64935',
      gold: '#D89E2A',
      ivory: '#F7E9CB',
      green: '#3E6347',
      terracotta: '#C77752',
    },
  },
  'ivory-traditional-red': {
    id: 'ivory-traditional-red',
    name: 'Ivory & Traditional Red',
    tagline: 'Crisp cotton ivory framed by classic bridal kumkum red & gold',
    tokens: {
      maroon: '#8F1D24',
      red: '#BA2D2D',
      gold: '#D4A13E',
      ivory: '#FAF1DD',
      green: '#386641',
      terracotta: '#C97A57',
    },
  },
};

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

function hexToRgb(hex: string) {
  const norm = normalizeHex(hex).replace('#', '');
  const intVal = parseInt(norm, 16);
  if (Number.isNaN(intVal)) return { r: 112, g: 38, b: 50 };
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

function rgba(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function mixHex(hexA: string, hexB: string, weightB: number): string {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const w = Math.max(0, Math.min(1, weightB));
  const r = Math.round(a.r * (1 - w) + b.r * w);
  const g = Math.round(a.g * (1 - w) + b.g * w);
  const bl = Math.round(a.b * (1 - w) + b.b * w);
  return `#${[r, g, bl].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const channels = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(hex1: string, hex2: string): number {
  const l1 = relativeLuminance(hex1);
  const l2 = relativeLuminance(hex2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function getReadableOn(bgHex: string, lightChoice: string, darkChoice: string): string {
  return contrastRatio(bgHex, lightChoice) >= contrastRatio(bgHex, darkChoice)
    ? lightChoice
    : darkChoice;
}

export function buildHeritageCssVariables(
  tokens: HeritageThemeTokens,
  fonts: HeritageFontConfig
): Record<string, string> {
  const ivoryCard = mixHex(tokens.ivory, '#FFFFFF', 0.52);
  const ivoryAlt = mixHex(tokens.ivory, tokens.gold, 0.2);
  const ink = mixHex(tokens.maroon, '#180909', 0.6);
  const inkMuted = mixHex(ink, tokens.ivory, 0.26);
  const onMaroon = getReadableOn(tokens.maroon, '#FFF8E9', ink);
  const onGold = getReadableOn(tokens.gold, '#FFF8E9', ink);

  return {
    '--ih-maroon': tokens.maroon,
    '--ih-maroon-rgb': toRgbTriplet(tokens.maroon),
    '--ih-red': tokens.red,
    '--ih-red-rgb': toRgbTriplet(tokens.red),
    '--ih-gold': tokens.gold,
    '--ih-gold-rgb': toRgbTriplet(tokens.gold),
    '--ih-ivory': tokens.ivory,
    '--ih-ivory-rgb': toRgbTriplet(tokens.ivory),
    '--ih-ivory-card': ivoryCard,
    '--ih-ivory-card-rgb': toRgbTriplet(ivoryCard),
    '--ih-ivory-alt': ivoryAlt,
    '--ih-ivory-alt-rgb': toRgbTriplet(ivoryAlt),
    '--ih-green': tokens.green,
    '--ih-green-rgb': toRgbTriplet(tokens.green),
    '--ih-terracotta': tokens.terracotta,
    '--ih-terracotta-rgb': toRgbTriplet(tokens.terracotta),
    '--ih-ink': ink,
    '--ih-ink-rgb': toRgbTriplet(ink),
    '--ih-ink-muted': inkMuted,
    '--ih-ink-muted-rgb': toRgbTriplet(inkMuted),
    '--ih-on-maroon': onMaroon,
    '--ih-on-maroon-rgb': toRgbTriplet(onMaroon),
    '--ih-on-gold': onGold,
    '--ih-on-gold-rgb': toRgbTriplet(onGold),
    '--ih-border': rgba(tokens.maroon, 0.24),
    '--ih-border-gold': rgba(tokens.gold, 0.72),
    '--ih-font-heading': fonts.heading,
    '--ih-font-script': fonts.script,
    '--ih-font-body': fonts.body,
  };
}
