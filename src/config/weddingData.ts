import type { WeddingConfig } from '../types/wedding';

/**
 * Centralized wedding configuration.
 * Update couple details, messages, schedule, venue, gallery images,
 * and theme color tokens here without modifying any component files.
 */
export const essentialWeddingData: WeddingConfig = {
  id: 'meera-kabir-2027',
  couple: {
    brideFirst: 'Meera',
    brideLast: 'Deshmukh',
    groomFirst: 'Kabir',
    groomLast: 'Sengupta',
    monogram: 'M & K',
    weddingDateISO: '2027-11-20T16:30:00+05:30',
    weddingDateDisplay: 'November 20, 2027',
    locationDisplay: 'Udaipur, Rajasthan',
  },
  hero: {
    eyebrow: 'Wedding Invitation',
    headline: 'Together with their families, joyfully invite you to celebrate their marriage',
    subheadline:
      'An intimate lakeside gathering of quiet grace, garden blooms, and heartfelt vows.',
    photograph: '/images/hero-couple.jpg',
    photographAlt: 'Meera and Kabir holding hands in ivory and sage attire beside sunlit marble arches',
    ctaLabel: 'Celebration Details',
  },
  welcome: {
    eyebrow: 'With Joyful Hearts',
    heading: 'A Note From Our Families',
    brideFamily: {
      relationLabel: 'Daughter of',
      names: 'Sunita & Arvind Deshmukh',
      location: 'Pune, Maharashtra',
    },
    groomFamily: {
      relationLabel: 'Son of',
      names: 'Anjali & Siddharth Sengupta',
      location: 'Kolkata, West Bengal',
    },
    message:
      'With gratitude for the love, kindness, and friendships that have shaped our lives, we warmly invite you to gather with us by the tranquil waters of Udaipur as Meera and Kabir exchange vows and begin their life together.',
    signatureQuote: '“In stillness and laughter alike, our hearts have found their truest home.”',
  },
  coupleIntro: {
    eyebrow: 'The Couple',
    heading: 'Meet the Bride & Groom',
    subtitle: 'Two creative spirits brought together by a shared love for quiet mornings and old books.',
    bride: {
      name: 'Meera Deshmukh',
      roleLabel: 'The Bride',
      parentsNote: 'Textile Designer & Botanical Sketcher',
      bio: 'Drawn to slow mornings, handwoven cotton, and handwritten letters, Meera finds beauty in thoughtful simplicity—garden roses, quiet courtyards, and warm tea at dusk.',
      portrait: '/images/bride-portrait.jpg',
      portraitAlt: 'Portrait of Meera smiling beneath a sandstone arch holding soft roses and eucalyptus',
    },
    groom: {
      name: 'Kabir Sengupta',
      roleLabel: 'The Groom',
      parentsNote: 'Landscape Architect & Coffee Roaster',
      bio: 'Grounded, warm, and endlessly patient, Kabir believes the finest days are spent in sunlit gardens, cooking for friends, and noticing the smallest joys.',
      portrait: '/images/groom-portrait.jpg',
      portraitAlt: 'Portrait of Kabir in a tailored ivory achkan beside Lake Pichola at golden hour',
    },
  },
  countdown: {
    eyebrow: 'Save the Date',
    heading: 'Counting Down to Forever',
    subtitle: 'Until we gather beside the courtyard gardens to celebrate.',
    completedHeading: 'The Wedding Day Has Arrived',
    completedMessage:
      'Today we celebrate love, family, and new beginnings in Udaipur.',
  },
  events: {
    eyebrow: 'Wedding Schedule',
    heading: 'Celebration Events',
    subtitle:
      'Each gathering is thoughtfully paced for unhurried conversation, warmth, and joy.',
    items: [
      {
        id: 'courtyard-mehendi',
        iconType: 'floral',
        title: 'Courtyard Mehendi & Tea',
        date: 'Friday, November 19, 2027',
        time: '2:00 PM – 5:30 PM',
        venue: 'The Sandstone Verandah',
        address: 'Jagmandir Courtyard Wing, Udaipur',
        dressCode: 'Garden Pastels · Soft Sage, Ivory & Linen',
        description:
          'An unhurried afternoon in the shaded courtyard with artisanal henna, chilled rosewater, and acoustic folk melodies.',
        mapsUrl: 'https://maps.google.com/?q=Lake+Pichola+Udaipur',
      },
      {
        id: 'wedding-ceremony',
        iconType: 'ceremony',
        title: 'The Marriage Ceremony',
        date: 'Saturday, November 20, 2027',
        time: '4:30 PM – 6:30 PM',
        venue: 'Lakeside Floral Pavilion',
        address: 'Lake Pichola Garden Estate, Udaipur',
        dressCode: 'Traditional Elegance · Ivory, Sage & Warm Gold',
        description:
          'Sacred vows exchanged beside the reflecting pool surrounded by white garden roses and golden twilight.',
        mapsUrl: 'https://maps.google.com/?q=Lake+Pichola+Udaipur',
      },
      {
        id: 'candlelit-dinner',
        iconType: 'dinner',
        title: 'Candlelit Dinner Reception',
        date: 'Saturday, November 20, 2027',
        time: '7:30 PM – 11:00 PM',
        venue: 'The Colonnade Dining Hall',
        address: 'Lake Pichola Garden Estate, Udaipur',
        dressCode: 'Evening Formal',
        description:
          'An intimate sit-down dinner beneath taper candles and eucalyptus garlands, accompanied by heartfelt toasts and gentle music.',
        mapsUrl: 'https://maps.google.com/?q=Lake+Pichola+Udaipur',
      },
    ],
  },
  venue: {
    eyebrow: 'Location & Directions',
    heading: 'The Venue',
    name: 'Lake Pichola Garden Estate',
    addressLines: ['Rameshwar Ghat Road, Pichola', 'Heritage Courtyard Entrance'],
    cityRegion: 'Udaipur, Rajasthan 313001, India',
    description:
      'Set beside calm lake waters and sandstone colonnades, the estate blends peaceful open-air gardens with timeless architectural warmth for every moment of our wedding.',
    image: '/images/venue-garden.jpg',
    imageAlt: 'Floral wedding pavilion beside a tranquil reflecting pool and sandstone courtyard',
    coordinates: { lat: 24.5754, lng: 73.6808 },
    mapsUrl: 'https://maps.google.com/?q=24.5754,73.6808',
    directionsLabel: 'Get Directions',
  },
  gallery: {
    eyebrow: 'Moments & Details',
    heading: 'Photo Gallery',
    subtitle: 'Captured portraits, sunlit courtyards, and the quiet textures of our celebration.',
    items: [
      {
        id: 'gal-hero',
        src: '/images/hero-couple.jpg',
        alt: 'Meera and Kabir holding hands on a marble terrace overlooking Lake Pichola',
        caption: 'Golden Hour Promise',
        aspect: 'portrait',
      },
      {
        id: 'gal-bride',
        src: '/images/bride-portrait.jpg',
        alt: 'Meera holding a bouquet of white and blush garden roses with eucalyptus',
        caption: 'Garden Roses & Eucalyptus',
        aspect: 'portrait',
      },
      {
        id: 'gal-details',
        src: '/images/gallery-details.jpg',
        alt: 'Handmade cotton paper stationery with botanical crest and emerald silk ribbon',
        caption: 'Cotton Paper & Botanical Crest',
        aspect: 'portrait',
      },
      {
        id: 'gal-venue',
        src: '/images/venue-garden.jpg',
        alt: 'Floral wedding pavilion reflected in still courtyard water',
        caption: 'The Lakeside Pavilion',
        aspect: 'landscape',
      },
      {
        id: 'gal-table',
        src: '/images/gallery-table.jpg',
        alt: 'Candlelit banquet table dressed with deep sage runner and white roses',
        caption: 'Candlelit Reception Table',
        aspect: 'landscape',
      },
      {
        id: 'gal-courtyard',
        src: '/images/gallery-courtyard.jpg',
        alt: 'Afternoon courtyard lounge with sage cushions and fresh floral garlands',
        caption: 'Afternoon Courtyard Lounge',
        aspect: 'landscape',
      },
    ],
  },
  footer: {
    familyNames: 'The Deshmukh & Sengupta Families',
    thankYouMessage:
      'Thank you for filling our lives with warmth, encouragement, and love. We look forward to celebrating this cherished day with you.',
    weddingDate: 'November 20, 2027 · Udaipur, Rajasthan',
    coupleSignOff: 'Meera & Kabir',
    note: 'Essential Wedding Invitation Template',
  },
  seo: {
    title: 'Meera & Kabir — Essential Wedding Invitation',
    description:
      'Join the Deshmukh & Sengupta families on November 20, 2027 in Udaipur to celebrate the wedding of Meera & Kabir.',
    ogImage: '/images/hero-couple.jpg',
  },
  theme: {
    presetId: 'ivory-sage',
    // Update any of the 6 tokens below to customize colors for a client:
    tokens: {
      primary: '#78866B',
      secondary: '#D8CDBB',
      background: '#FAF8F3',
      surface: '#FFFFFF',
      text: '#35352F',
      accent: '#B79A72',
    },
  },
};
