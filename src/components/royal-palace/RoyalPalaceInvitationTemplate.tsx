import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Music2, Pause, Play } from 'lucide-react';
import type { RoyalPalaceConfig } from '../../types/royalPalace';
import { useRoyalPalaceAudio } from '../../hooks/useRoyalPalaceAudio';
import { HeritageOpeningCover } from './HeritageOpeningCover';
import { HeritageNav } from './HeritageNav';
import { AnimatedMandapHero } from './AnimatedMandapHero';
import { HeritageStoryBook } from './HeritageStoryBook';
import { HeritageCountdown } from './HeritageCountdown';
import { HeritageEventsScenes } from './HeritageEventsScenes';
import { HeritageGallery } from './HeritageGallery';
import { HeritageVenue } from './HeritageVenue';
import { HeritageFooter } from './HeritageFooter';

interface RoyalPalaceInvitationTemplateProps {
  config: RoyalPalaceConfig;
}

export const RoyalPalaceInvitationTemplate: React.FC<RoyalPalaceInvitationTemplateProps> = ({
  config,
}) => {
  const guestName = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const raw = new URLSearchParams(window.location.search).get('guest');
    return raw ? raw.trim() : null;
  }, []);

  const [coverOpen, setCoverOpen] = useState(true);
  const [playAudioOnEnter, setPlayAudioOnEnter] = useState(true);

  const audio = useRoyalPalaceAudio(config.media.audioSrc);

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

  useEffect(() => {
    document.body.style.overflow = coverOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [coverOpen]);

  const handleEnterTrigger = useCallback(() => {
    audio.playPalaceChime('doors');
    if (playAudioOnEnter && audio.hasAudio) {
      void audio.play();
    }
  }, [audio, playAudioOnEnter]);

  const handleEntered = useCallback(() => {
    setCoverOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleReplayCover = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setCoverOpen(true);
  }, []);

  const handleShareWhatsApp = useCallback(() => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const encoded = encodeURIComponent(`${config.media.whatsappShareText} ${url}`);
    window.open(`https://wa.me/?text=${encoded}`, '_blank', 'noopener,noreferrer');
  }, [config.media.whatsappShareText]);

  const showFloatingAudio =
    !coverOpen && audio.hasAudio && audio.status !== 'unavailable' && audio.status !== 'error';

  return (
    <MotionConfig reducedMotion="user">
      <div className="heritage-paper relative min-h-screen bg-ih-ivory text-ih-ink">
        <HeritageOpeningCover
          isOpen={coverOpen}
          config={config}
          guestName={guestName}
          hasAudio={audio.hasAudio}
          playAudioOnEnter={playAudioOnEnter}
          onToggleAudioPreference={() => setPlayAudioOnEnter((prev) => !prev)}
          onEnterTrigger={handleEnterTrigger}
          onEntered={handleEntered}
        />

        <HeritageNav
          config={config}
          audioStatus={audio.status}
          onToggleAudio={audio.toggle}
          onReplayCover={handleReplayCover}
          onShareWhatsApp={handleShareWhatsApp}
        />

        <main>
          <AnimatedMandapHero config={config} revealed={!coverOpen} guestName={guestName} />
          <HeritageEventsScenes
            config={config}
            onSceneOpen={() => audio.playPalaceChime('window')}
          />
          <HeritageStoryBook config={config} />
          <HeritageCountdown config={config} />
          <HeritageGallery config={config} />
          <HeritageVenue config={config} />
        </main>

        <HeritageFooter
          config={config}
          onShareWhatsApp={handleShareWhatsApp}
          onReplayCover={handleReplayCover}
        />

        {showFloatingAudio && (
          <div className="fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6">
            <button
              type="button"
              onClick={audio.toggle}
              aria-label={audio.isPlaying ? 'Pause wedding music' : 'Play wedding music'}
              style={{
                backgroundColor: 'var(--ih-ivory-card)',
                borderColor: 'var(--ih-gold)',
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 text-ih-maroon shadow-storybook backdrop-blur-md transition-transform hover:-translate-y-0.5 sm:h-auto sm:w-auto sm:gap-2.5 sm:px-4 sm:py-2.5"
            >
              <span
                style={{ backgroundColor: 'var(--ih-maroon)', color: 'var(--ih-on-maroon)' }}
                className="flex h-7 w-7 items-center justify-center rounded-full"
              >
                {audio.isPlaying ? (
                  <Pause className="h-3.5 w-3.5" />
                ) : (
                  <Play className="h-3.5 w-3.5 translate-x-[0.5px]" />
                )}
              </span>
              <span className="hidden text-left sm:block">
                <span className="flex items-center gap-1 font-heritageBody text-[10px] font-semibold uppercase tracking-[0.16em] text-ih-red">
                  <Music2 className="h-3 w-3" />
                  {audio.isPlaying ? 'Now Playing' : 'Classical Score'}
                </span>
                <span className="block max-w-[140px] truncate font-heritageBody text-xs text-ih-inkMuted">
                  {config.media.audioTitle}
                </span>
              </span>
            </button>
          </div>
        )}
      </div>
    </MotionConfig>
  );
};
