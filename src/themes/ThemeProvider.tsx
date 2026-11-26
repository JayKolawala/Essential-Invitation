import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type {
  EssentialThemeId,
  EssentialThemePreset,
  EssentialThemeTokens,
} from '../types/wedding';
import {
  buildEssentialThemeVariables,
  ESSENTIAL_THEME_LIST,
  ESSENTIAL_THEME_PRESETS,
  isLightColor,
} from './essentialThemes';

interface ThemeContextValue {
  activePreset: EssentialThemePreset;
  tokens: EssentialThemeTokens;
  isLightBase: boolean;
  presets: EssentialThemePreset[];
  setPresetId: (id: EssentialThemeId) => void;
  setCustomTokens: (overrides?: Partial<EssentialThemeTokens>) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface EssentialThemeProviderProps {
  initialPresetId?: EssentialThemeId;
  initialTokens?: Partial<EssentialThemeTokens>;
  children: React.ReactNode;
}

export const EssentialThemeProvider: React.FC<EssentialThemeProviderProps> = ({
  initialPresetId = 'ivory-sage',
  initialTokens,
  children,
}) => {
  const [presetId, setPresetIdState] = useState<EssentialThemeId>(() =>
    initialPresetId in ESSENTIAL_THEME_PRESETS ? initialPresetId : 'ivory-sage'
  );
  const [customTokens, setCustomTokens] = useState<Partial<EssentialThemeTokens> | undefined>(
    initialTokens
  );

  useEffect(() => {
    setPresetIdState(
      initialPresetId in ESSENTIAL_THEME_PRESETS ? initialPresetId : 'ivory-sage'
    );
    setCustomTokens(initialTokens);
  }, [initialPresetId, initialTokens]);

  const activePreset =
    ESSENTIAL_THEME_PRESETS[presetId] ?? ESSENTIAL_THEME_PRESETS['ivory-sage'];

  const resolvedTokens = useMemo<EssentialThemeTokens>(
    () => ({
      ...activePreset.tokens,
      ...customTokens,
    }),
    [activePreset, customTokens]
  );

  const cssVariables = useMemo(
    () => buildEssentialThemeVariables(resolvedTokens),
    [resolvedTokens]
  );

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', resolvedTokens.background);
    }
  }, [cssVariables, resolvedTokens.background]);

  const handleSetPresetId = (id: EssentialThemeId) => {
    setPresetIdState(id);
    setCustomTokens(undefined);
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      activePreset,
      tokens: resolvedTokens,
      isLightBase: isLightColor(resolvedTokens.background),
      presets: ESSENTIAL_THEME_LIST,
      setPresetId: handleSetPresetId,
      setCustomTokens,
    }),
    [activePreset, resolvedTokens]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        className="min-h-screen bg-essential-bg text-essential-text transition-colors duration-300"
        style={cssVariables as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export function useEssentialTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useEssentialTheme must be used within an EssentialThemeProvider');
  }
  return ctx;
}
