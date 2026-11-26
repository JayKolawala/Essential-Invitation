# Indian Heritage Wedding Invitation

An illustrated Indian heritage wedding storybook experience inspired by Madhubani, Pattachitra, Kalamkari, and Rajasthani miniature art—built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Experience & Sections

- **3D Self-Drawing Opening Cover** (`src/components/royal-palace/HeritageOpeningCover.tsx`): Deep maroon velvet backdrop with an embossed 3D parchment invitation cover, ornamental Indian arch, floral vines, centered rotating mandala, and paired peacocks that draw themselves line-by-line before turning into the wedding storybook on `"Enter the Wedding Celebration"`.
- **Animated Indian Wedding Mandap** (`src/components/royal-palace/AnimatedMandapHero.tsx`): Traditional courtyard mandap with cylindrical 3D-shaded pillars, floral garlands, swinging temple bells, flickering clay diyas, falling petals, and rotating lotus mandala.
- **Interactive Event Scenes** (`src/components/royal-palace/HeritageEventsScenes.tsx`): Custom illustrated SVG tableaux for Haldi, Mehendi, Sangeet, Wedding Ceremony, and Royal Reception that expand into opaque parchment ceremony detail modals on click/tap.
- **Illustrated Storybook & Timeline** (`src/components/royal-palace/HeritageStoryBook.tsx`): Family invitation spread, painted parrots, miniature-framed bride & groom portraits, Madhubani frieze borders, and story chapters.
- **Countdown, Miniature Gallery, Venue & Footer**:
  - `HeritageCountdown.tsx` — Live Days, Hours, Minutes, and Seconds countdown.
  - `HeritageGallery.tsx` — Miniature-framed photo gallery with category filters and opaque full-screen lightbox.
  - `HeritageVenue.tsx` — Ceremonial painted elephant motif, venue card, hospitality notes, copy-address, Get Directions, and embedded Google Map.
  - `HeritageFooter.tsx` & `HeritageNav.tsx` — Closing spread, WhatsApp sharing, audio toggle, and cover replay.

## Centralized Theme & Data Configuration

- Colors & Typography: `src/themes/royalPalaceThemes.ts` & `src/themes/RoyalPalaceThemeProvider.tsx` (Default palette: Deep Maroon `#702632`, Traditional Red `#A83D3D`, Mustard Gold `#D5A642`, Warm Ivory `#F9EED8`, Forest Green `#3D684A`, Terracotta `#C77752`).
- Wedding Content: `src/config/royalPalaceData.ts` & `src/types/royalPalace.ts`.

## Scripts

```bash
npm install
npm run lint
npm run build
npm run dev
```
