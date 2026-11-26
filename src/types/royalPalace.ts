export type HeritageThemeId =
  | 'indian-heritage'
  | 'royal-maroon-antique-gold'
  | 'peacock-emerald'
  | 'mustard-terracotta'
  | 'ivory-traditional-red';

export interface HeritageThemeTokens {
  maroon: string;
  red: string;
  gold: string;
  ivory: string;
  green: string;
  terracotta: string;
}

export interface HeritageFontConfig {
  heading: string;
  script: string;
  body: string;
}

export interface HeritageThemePreset {
  id: HeritageThemeId;
  name: string;
  tagline: string;
  tokens: HeritageThemeTokens;
}

export type HeritageSceneType =
  | 'haldi'
  | 'mehendi'
  | 'sangeet'
  | 'ceremony'
  | 'reception';

export interface HeritageStoryChapter {
  id: string;
  seasonLabel: string;
  title: string;
  location?: string;
  narrative: string;
  image: string;
  imageAlt: string;
  quote?: string;
}

export interface HeritagePartnerProfile {
  name: string;
  title: string;
  lineage: string;
  bio: string;
  portrait: string;
  portraitAlt: string;
}

export interface HeritageWeddingEvent {
  id: string;
  sceneType: HeritageSceneType;
  chapterLabel: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  venueAddress?: string;
  dressCode: string;
  description: string;
  image?: string;
  mapsUrl?: string;
}

export interface HeritageGalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: string;
  aspect?: 'portrait' | 'landscape';
}

export interface RoyalPalaceConfig {
  id: string;
  couple: {
    brideFirst: string;
    brideLast: string;
    groomFirst: string;
    groomLast: string;
    monogram: string;
    hashtag?: string;
    weddingDateISO: string;
    weddingDateDisplay: string;
    locationDisplay: string;
  };
  cover: {
    eyebrow: string;
    invitationLine: string;
    welcomeNote: string;
    enterLabel: string;
  };
  mandap: {
    eyebrow: string;
    heading: string;
    blessingVerse: string;
    subtitle: string;
  };
  coupleIntro: {
    eyebrow: string;
    heading: string;
    invitationMessage: string;
    brideFamily: {
      relation: string;
      names: string;
      city: string;
    };
    groomFamily: {
      relation: string;
      names: string;
      city: string;
    };
    couplePhoto: string;
    couplePhotoAlt: string;
    bride: HeritagePartnerProfile;
    groom: HeritagePartnerProfile;
  };
  story: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    chapters: HeritageStoryChapter[];
  };
  countdown: {
    eyebrow: string;
    heading: string;
    completedHeading: string;
    completedMessage: string;
  };
  events: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    interactionHint: string;
    items: HeritageWeddingEvent[];
  };
  gallery: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: HeritageGalleryPhoto[];
  };
  venue: {
    eyebrow: string;
    heading: string;
    name: string;
    tagline: string;
    addressLines: string[];
    cityCountry: string;
    description: string;
    image: string;
    imageAlt: string;
    coordinates: { lat: number; lng: number };
    mapsUrl: string;
    directionsLabel: string;
    hospitalityNotes: Array<{ label: string; detail: string }>;
  };
  footer: {
    eyebrow: string;
    thankYouMessage: string;
    familyNames: string;
    coupleSignOff: string;
    weddingDate: string;
  };
  media: {
    audioTitle: string;
    audioSrc: string;
    whatsappShareText: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  theme: {
    presetId?: HeritageThemeId;
    tokens?: Partial<HeritageThemeTokens>;
    fonts?: Partial<HeritageFontConfig>;
  };
}
