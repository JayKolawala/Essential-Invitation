import React, { createContext, useContext, useEffect, useMemo } from 'react';
import type {
  HeritageFontConfig,
  HeritageThemeId,
  HeritageThemeTokens,
} from '../types/royalPalace';
import {
  buildHeritageCssVariables,
  HERITAGE_DEFAULT_FONTS,
  HERITAGE_DEFAULT_TOKENS,
  HERITAGE_THEME_PRESETS,
} from './royalPalaceThemes';

interface HeritageThemeContextValue {
  tokens: HeritageThemeTokens;
  fonts: HeritageFontConfig;
}

const HeritageThemeContext = createContext<HeritageThemeContextValue | null>(null);

interface RoyalPalaceThemeProviderProps {
  presetId?: HeritageThemeId;
  tokens?: Partial<HeritageThemeTokens>;
  fonts?: Partial<HeritageFontConfig>;
  children: React.ReactNode;
}

export const RoyalPalaceThemeProvider: React.FC<RoyalPalaceThemeProviderProps> = ({
  presetId = 'indian-heritage',
  tokens,
  fonts,
  children,
}) => {
  const baseTokens =
    (presetId && HERITAGE_THEME_PRESETS[presetId]?.tokens) ?? HERITAGE_DEFAULT_TOKENS;

  const resolvedTokens = useMemo<HeritageThemeTokens>(
    () => ({
      ...baseTokens,
      ...tokens,
    }),
    [baseTokens, tokens]
  );

  const resolvedFonts = useMemo<HeritageFontConfig>(
    () => ({
      ...HERITAGE_DEFAULT_FONTS,
      ...fonts,
    }),
    [fonts]
  );

  const cssVariables = useMemo(
    () => buildHeritageCssVariables(resolvedTokens, resolvedFonts),
    [resolvedFonts, resolvedTokens]
  );

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', resolvedTokens.ivory);
    }
  }, [cssVariables, resolvedTokens.ivory]);

  const value = useMemo(
    () => ({ tokens: resolvedTokens, fonts: resolvedFonts }),
    [resolvedFonts, resolvedTokens]
  );

  return (
    <HeritageThemeContext.Provider value={value}>
      <div
        className="heritage-paper min-h-screen bg-ih-ivory font-heritageBody text-ih-ink"
        style={cssVariables as React.CSSProperties}
      >
        {children}
      </div>
    </HeritageThemeContext.Provider>
  );
};

export function useRoyalPalaceTheme(): HeritageThemeContextValue {
  const ctx = useContext(HeritageThemeContext);
  if (!ctx) {
    throw new Error('useRoyalPalaceTheme must be used within a RoyalPalaceThemeProvider');
  }
  return ctx;
}
