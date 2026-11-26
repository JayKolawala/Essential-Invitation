import React from 'react';
import { essentialWeddingData } from './config/weddingData';
import { EssentialThemeProvider } from './themes/ThemeProvider';
import { EssentialInvitationTemplate } from './components/essential/EssentialInvitationTemplate';
import { royalPalaceWeddingData } from './config/royalPalaceData';
import { RoyalPalaceThemeProvider } from './themes/RoyalPalaceThemeProvider';
import { RoyalPalaceInvitationTemplate } from './components/royal-palace/RoyalPalaceInvitationTemplate';

function resolveActiveTemplate(): 'essential' | 'heritage' {
  if (typeof window === 'undefined') return 'heritage';
  const params = new URLSearchParams(window.location.search);
  const queryTemplate = params.get('template')?.toLowerCase();
  const pathname = window.location.pathname.toLowerCase();

  if (queryTemplate === 'essential' || pathname.startsWith('/essential')) {
    return 'essential';
  }
  return 'heritage';
}

export const App: React.FC = () => {
  const activeTemplate = resolveActiveTemplate();

  if (activeTemplate === 'essential') {
    return (
      <EssentialThemeProvider
        initialPresetId={essentialWeddingData.theme.presetId}
        initialTokens={essentialWeddingData.theme.tokens}
      >
        <EssentialInvitationTemplate config={essentialWeddingData} />
      </EssentialThemeProvider>
    );
  }

  return (
    <RoyalPalaceThemeProvider
      presetId={royalPalaceWeddingData.theme.presetId}
      tokens={royalPalaceWeddingData.theme.tokens}
      fonts={royalPalaceWeddingData.theme.fonts}
    >
      <RoyalPalaceInvitationTemplate config={royalPalaceWeddingData} />
    </RoyalPalaceThemeProvider>
  );
};

export default App;
