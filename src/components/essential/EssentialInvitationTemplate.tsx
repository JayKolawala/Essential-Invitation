import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import type { WeddingConfig } from '../../types/wedding';
import { HeaderNav } from './HeaderNav';
import { HeroSection } from './HeroSection';
import { WelcomeSection } from './WelcomeSection';
import { CoupleSection } from './CoupleSection';
import { CountdownSection } from './CountdownSection';
import { EventsSection } from './EventsSection';
import { VenueSection } from './VenueSection';
import { GallerySection } from './GallerySection';
import { FooterSection } from './FooterSection';

interface EssentialInvitationTemplateProps {
  config: WeddingConfig;
}

export const EssentialInvitationTemplate: React.FC<EssentialInvitationTemplateProps> = ({
  config,
}) => {
  useEffect(() => {
    document.title = config.seo.title;
    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };
    setMeta('meta[name="description"]', config.seo.description);
    setMeta('meta[property="og:title"]', config.seo.title);
    setMeta('meta[property="og:description"]', config.seo.description);
    setMeta('meta[property="og:image"]', config.seo.ogImage);
    setMeta('meta[name="twitter:title"]', config.seo.title);
    setMeta('meta[name="twitter:description"]', config.seo.description);
    setMeta('meta[name="twitter:image"]', config.seo.ogImage);
  }, [config.seo]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-essential-bg text-essential-text">
        <HeaderNav config={config} />
        <main>
          <HeroSection config={config} />
          <WelcomeSection config={config} />
          <CoupleSection config={config} />
          <CountdownSection config={config} />
          <EventsSection config={config} />
          <VenueSection config={config} />
          <GallerySection config={config} />
        </main>
        <FooterSection config={config} />
      </div>
    </MotionConfig>
  );
};
