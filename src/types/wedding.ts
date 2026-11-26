export type EssentialThemeId =
  | 'ivory-sage'
  | 'linen-terracotta'
  | 'oat-dusty-blue'
  | 'cream-olive'
  | 'champagne-charcoal';

export interface EssentialThemeTokens {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  accent: string;
}

export interface EssentialThemePreset {
  id: EssentialThemeId;
  name: string;
  tagline: string;
  tokens: EssentialThemeTokens;
}

export type EventIconType = 'drinks' | 'ceremony' | 'dinner' | 'floral';

export interface FamilyHouse {
  relationLabel: string;
  names: string;
  location?: string;
}

export interface PartnerProfile {
  name: string;
  roleLabel: string;
  parentsNote?: string;
  bio: string;
  portrait: string;
  portraitAlt: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address?: string;
  dressCode: string;
  description?: string;
  mapsUrl?: string;
  iconType: EventIconType;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface WeddingConfig {
  id: string;
  couple: {
    brideFirst: string;
    brideLast?: string;
    groomFirst: string;
    groomLast?: string;
    monogram: string;
    weddingDateISO: string;
    weddingDateDisplay: string;
    locationDisplay: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline?: string;
    photograph: string;
    photographAlt: string;
    ctaLabel: string;
  };
  welcome: {
    eyebrow: string;
    heading: string;
    message: string;
    brideFamily: FamilyHouse;
    groomFamily: FamilyHouse;
    signatureQuote?: string;
  };
  coupleIntro: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    bride: PartnerProfile;
    groom: PartnerProfile;
  };
  countdown: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    completedHeading: string;
    completedMessage: string;
  };
  events: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    items: WeddingEvent[];
  };
  venue: {
    eyebrow: string;
    heading: string;
    name: string;
    addressLines: string[];
    cityRegion: string;
    description?: string;
    image: string;
    imageAlt: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
    mapsEmbedUrl?: string;
    mapsUrl: string;
    directionsLabel?: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    items: GalleryImage[];
  };
  footer: {
    familyNames: string;
    thankYouMessage: string;
    weddingDate: string;
    coupleSignOff: string;
    note?: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  theme: {
    presetId?: EssentialThemeId;
    tokens?: Partial<EssentialThemeTokens>;
  };
}
