import type { RoyalPalaceConfig } from '../types/royalPalace';

/**
 * Centralized Indian Heritage Wedding Configuration.
 * All couple names, photos, events, venues, dress codes, story chapters,
 * gallery items, audio, and theme colors/typography live here.
 */
export const royalPalaceWeddingData: RoyalPalaceConfig = {
  id: 'indian-heritage-udaipur-2027',
  couple: {
    brideFirst: 'Meera',
    brideLast: 'Rathore',
    groomFirst: 'Aarav',
    groomLast: 'Singhania',
    monogram: 'A & M',
    hashtag: '#AaravKiMeera',
    weddingDateISO: '2027-02-01T10:00:00+05:30',
    weddingDateDisplay: '01 February 2027',
    locationDisplay: 'Udaipur, Rajasthan',
  },
  cover: {
    eyebrow: 'Shubh Vivah Nimantran',
    invitationLine: 'With the blessings of Lord Ganesha & our elders',
    welcomeNote:
      'An illustrated celebration of sacred vows, folk melodies, and timeless Indian heritage.',
    enterLabel: 'Enter the Wedding Celebration',
  },
  mandap: {
    eyebrow: 'The Sacred Wedding Mandap',
    heading: 'Shubh Vivah Courtyard',
    blessingVerse: '“Two souls united by sacred fire, marigold garlands, and eternal grace.”',
    subtitle: 'Join our families beneath the carved courtyard pavilion beside Lake Pichola.',
  },
  coupleIntro: {
    eyebrow: 'The Storybook of Two Hearts',
    heading: 'With Blessings of Our Families',
    invitationMessage:
      'Together with our beloved parents and elders, we warmly invite you to grace the joyous wedding festivities of Aarav and Meera—a three-day tapestry of colour, music, rituals, and heartfelt togetherness.',
    brideFamily: {
      relation: 'Daughter of',
      names: 'Smt. Devika & Shri Vikramaditya Rathore',
      city: 'Jodhpur & Udaipur',
    },
    groomFamily: {
      relation: 'Son of',
      names: 'Smt. Gayatri & Shri Harshvardhan Singhania',
      city: 'New Delhi',
    },
    couplePhoto: '/images/royal-couple.jpg',
    couplePhotoAlt: 'Aarav and Meera standing beneath carved sandstone arches at twilight',
    bride: {
      name: 'Meera Rathore',
      title: 'The Bride',
      lineage: 'House of Mewar · Art Historian',
      bio: 'Inspired by Rajasthani miniature paintings, handwoven Banarasi silks, and peaceful lakeside mornings, Meera brings warmth and grace to every detail.',
      portrait: '/images/bride-portrait.jpg',
      portraitAlt: 'Portrait of Meera holding garden roses under a warm sandstone archway',
    },
    groom: {
      name: 'Aarav Singhania',
      title: 'The Groom',
      lineage: 'Singhania Estate · Heritage Architect',
      bio: 'A restorer of historic stepwells and lover of classical ragas, Aarav finds joy in timeless craft, shared meals, and heartfelt hospitality.',
      portrait: '/images/groom-portrait.jpg',
      portraitAlt: 'Portrait of Aarav in an ivory bandhgala overlooking Lake Pichola',
    },
  },
  story: {
    eyebrow: 'Illustrated Chronicle',
    heading: 'Our Journey Together',
    subtitle: 'Pages from a friendship that blossomed across monsoons, letters, and lakeside dusks.',
    chapters: [
      {
        id: 'chapter-jaipur',
        seasonLabel: 'Chapter I · Monsoon 2022',
        title: 'An Evening Beneath Carved Colonnades',
        location: 'Jaipur, Rajasthan',
        narrative:
          'What began as a shared table during a classical sitar recital turned into hours of effortless conversation over warm cardamom chai while monsoon rain softened against sandstone.',
        image: '/images/gallery-twilight.jpg',
        imageAlt: 'Couple walking beneath lantern-lit sandstone colonnades at twilight',
        quote: 'Between the ragas and the rain, time quietly stood still.',
      },
      {
        id: 'chapter-proposal',
        seasonLabel: 'Chapter II · Autumn 2025',
        title: 'A Promise by Lake Pichola',
        location: 'Jagmandir Marble Terrace, Udaipur',
        narrative:
          'As evening bells drifted across the water and golden light touched the hills, Aarav knelt beside the marble arches—and Meera answered yes before sunset.',
        image: '/images/hero-couple.jpg',
        imageAlt: 'Couple holding hands beside marble lakeside pavilion at golden hour',
        quote: 'Every road we walked led us home to these waters.',
      },
    ],
  },
  countdown: {
    eyebrow: 'Auspicious Muhurat',
    heading: 'Counting Down to the Sacred Vows',
    completedHeading: 'The Wedding Celebrations Have Begun',
    completedMessage:
      'Welcome to Udaipur—may every courtyard glow with blessings, music, and joy.',
  },
  events: {
    eyebrow: 'Illustrated Celebration Scenes',
    heading: 'The Wedding Festivities',
    subtitle:
      'Every ceremony unfolds as its own traditional Indian tableau of colour, music, and ritual.',
    interactionHint: 'Tap any illustrated scene to open the full ceremony details',
    items: [
      {
        id: 'haldi-ceremony',
        sceneType: 'haldi',
        chapterLabel: 'Scene I',
        title: 'Haldi Ceremony',
        date: '31 January 2027',
        time: '08:00 AM',
        venue: 'Zenana Mahal Sunlit Courtyard',
        venueAddress: 'City Palace Complex, Udaipur',
        dressCode: 'Marigold Yellow, Ivory & Festive Cotton Silks',
        description:
          'A radiant morning blessing featuring fragrant sandalwood-turmeric paste, showers of fresh marigold petals, dholak folk songs, and chilled kesar thandai.',
        image: '/images/gallery-courtyard.jpg',
        mapsUrl: 'https://maps.google.com/?q=City+Palace+Udaipur+Rajasthan',
      },
      {
        id: 'mehendi-ceremony',
        sceneType: 'mehendi',
        chapterLabel: 'Scene II',
        title: 'Mehendi Ceremony',
        date: '31 January 2027',
        time: '04:00 PM',
        venue: 'The Lotus Bagh & Verandah',
        venueAddress: 'Fateh Prakash Palace, Udaipur',
        dressCode: 'Forest Emerald, Terracotta & Floral Silks',
        description:
          'An enchanting garden afternoon adorned with traditional henna artists, lac bangle stalls, folk melodies, and handcrafted sweet delicacies.',
        image: '/images/gallery-details.jpg',
        mapsUrl: 'https://maps.google.com/?q=Fateh+Prakash+Palace+Udaipur',
      },
      {
        id: 'sangeet-soiree',
        sceneType: 'sangeet',
        chapterLabel: 'Scene III',
        title: 'Sangeet & Folk Night',
        date: '31 January 2027',
        time: '07:30 PM',
        venue: 'Durbar Lantern Courtyard',
        venueAddress: 'City Palace Terrace, Udaipur',
        dressCode: 'Jewel Maroon, Mustard Gold & Dance Couture',
        description:
          'A celebratory evening of shehnai, tabla rhythms, family dance tributes, and lantern-lit revelry beneath the winter stars.',
        image: '/images/event-sangeet.jpg',
        mapsUrl: 'https://maps.google.com/?q=City+Palace+Udaipur+Rajasthan',
      },
      {
        id: 'wedding-ceremony',
        sceneType: 'ceremony',
        chapterLabel: 'Scene IV',
        title: 'Wedding Ceremony',
        date: '01 February 2027',
        time: '10:00 AM',
        venue: 'Jagmandir Sacred Mandap',
        venueAddress: 'Jagmandir Island Palace, Lake Pichola',
        dressCode: 'Traditional Heritage Sarees, Lehengas & Bandhgalas',
        description:
          'As ceremonial boats cross Lake Pichola, Vedic chants, jasmine garlands, and the seven sacred pheras unite Aarav and Meera beneath the floral mandap.',
        image: '/images/venue-garden.jpg',
        mapsUrl: 'https://maps.google.com/?q=Jagmandir+Island+Palace+Udaipur',
      },
      {
        id: 'reception-gala',
        sceneType: 'reception',
        chapterLabel: 'Scene V',
        title: 'Royal Reception',
        date: '01 February 2027',
        time: '07:00 PM',
        venue: 'Darikhana Palace Pavilion',
        venueAddress: 'Jagmandir Island Palace, Udaipur',
        dressCode: 'Regal Eveningwear & Heirloom Silks',
        description:
          'A candlelit celebratory banquet with classical sitar-cello melodies, warm family toasts, and blessings for the newlyweds.',
        image: '/images/gallery-table.jpg',
        mapsUrl: 'https://maps.google.com/?q=Jagmandir+Island+Palace+Udaipur',
      },
    ],
  },
  gallery: {
    eyebrow: 'Miniature Portrait Gallery',
    heading: 'Frames of Heritage & Love',
    subtitle: 'Cherished portraits and architectural memories presented inside traditional painted borders.',
    items: [
      {
        id: 'ih-gal-1',
        src: '/images/royal-couple.jpg',
        alt: 'Aarav and Meera beneath carved sandstone arches at twilight',
        caption: 'Sandstone Colonnade · Twilight',
        category: 'Portraits',
        aspect: 'landscape',
      },
      {
        id: 'ih-gal-2',
        src: '/images/bride-portrait.jpg',
        alt: 'Meera holding garden roses under sandstone archway',
        caption: 'Bridal Portrait · Rose & Sandstone',
        category: 'Portraits',
        aspect: 'portrait',
      },
      {
        id: 'ih-gal-3',
        src: '/images/gallery-details.jpg',
        alt: 'Handmade cotton paper stationery with botanical crest and silk ribbon',
        caption: 'Cotton Paper & Heirlooms',
        category: 'Details',
        aspect: 'portrait',
      },
      {
        id: 'ih-gal-4',
        src: '/images/venue-palace.jpg',
        alt: 'Illuminated heritage palace reflected on Lake Pichola at dusk',
        caption: 'Jagmandir Reflections at Dusk',
        category: 'Heritage',
        aspect: 'landscape',
      },
      {
        id: 'ih-gal-5',
        src: '/images/event-sangeet.jpg',
        alt: 'Courtyard illuminated with hanging brass lanterns',
        caption: 'Lanterns in the Courtyard',
        category: 'Celebrations',
        aspect: 'landscape',
      },
      {
        id: 'ih-gal-6',
        src: '/images/venue-garden.jpg',
        alt: 'Floral wedding mandap beside palace reflecting pool',
        caption: 'The Reflecting Pool Mandap',
        category: 'Heritage',
        aspect: 'portrait',
      },
    ],
  },
  venue: {
    eyebrow: 'Destination & Arrival',
    heading: 'The Wedding Sanctuary',
    name: 'Jagmandir Island Palace',
    tagline: '17th-Century Sandstone Courtyard Upon Lake Pichola',
    addressLines: ['Jagmandir Island, Lake Pichola', 'Bansi Ghat Jetty Boat Departure'],
    cityCountry: 'Udaipur, Rajasthan 313001, India',
    description:
      'Framed by carved sandstone arches and tranquil lake waters, Jagmandir Island Palace hosts our wedding vows and celebratory feast. Heritage boats ferry guests continuously from Bansi Ghat Jetty.',
    image: '/images/venue-palace.jpg',
    imageAlt: 'Jagmandir Island Palace illuminated at twilight on Lake Pichola',
    coordinates: { lat: 24.5675, lng: 73.6778 },
    mapsUrl: 'https://maps.google.com/?q=Jagmandir+Island+Palace+Udaipur',
    directionsLabel: 'Get Directions',
    hospitalityNotes: [
      {
        label: 'Nearest Airport',
        detail: 'Maharana Pratap Airport (UDR) — 40 minutes via private hospitality car.',
      },
      {
        label: 'Boat Transfers',
        detail: 'Ceremonial launches depart Bansi Ghat Jetty every 15 minutes.',
      },
      {
        label: 'Guest Concierge',
        detail: 'Hospitality hosts greet arriving guests under "Rathore–Singhania Vivah".',
      },
    ],
  },
  footer: {
    eyebrow: 'With Gratitude & Love',
    thankYouMessage:
      'Thank you for being a cherished part of our lives and celebrating this auspicious beginning with our families.',
    familyNames: 'The Rathore & Singhania Families',
    coupleSignOff: 'Aarav & Meera',
    weddingDate: '31 January – 01 February 2027 · Udaipur',
  },
  media: {
    audioTitle: 'Raga Bhupali — Santoor, Bansuri & Tanpura',
    audioSrc: '/audio/royal-ambient.wav',
    whatsappShareText:
      'You are warmly invited to the Indian Heritage wedding celebration of Aarav & Meera in Udaipur (31 Jan – 01 Feb 2027). View our illustrated invitation:',
  },
  seo: {
    title: 'Aarav & Meera — Indian Heritage Wedding Invitation',
    description:
      'Explore an illustrated Indian heritage wedding storybook celebrating Aarav & Meera in Udaipur.',
    ogImage: '/images/royal-couple.jpg',
  },
  theme: {
    presetId: 'indian-heritage',
    tokens: {
      maroon: '#702632',
      red: '#A83D3D',
      gold: '#D5A642',
      ivory: '#F9EED8',
      green: '#3D684A',
      terracotta: '#C77752',
    },
    fonts: {
      heading: '"Yatra One"',
      script: '"Great Vibes"',
      body: '"Poppins"',
    },
  },
};
