import { useCallback, useEffect, useRef, useState } from 'react';

export type AudioStatus = 'unavailable' | 'paused' | 'loading' | 'playing' | 'error';

const TARGET_VOLUME = 0.52;

/**
 * Manages optional Indian instrumental wedding music with smooth volume fades
 * and gentle ceremonial chimes (Web Audio API), triggered only on user interaction.
 */
export function useRoyalPalaceAudio(src?: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const [status, setStatus] = useState<AudioStatus>(src ? 'paused' : 'unavailable');
  const [sfxEnabled, setSfxEnabled] = useState<boolean>(true);

  const clearFade = useCallback(() => {
    if (fadeTimerRef.current !== null) {
      window.clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!src) {
      setStatus('unavailable');
      return;
    }

    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';
    audioRef.current = audio;
    setStatus('paused');

    const handlePlaying = () => setStatus('playing');
    const handlePause = () => setStatus('paused');
    const handleWaiting = () => setStatus('loading');
    const handleError = () => setStatus('error');

    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('error', handleError);

    return () => {
      clearFade();
      audio.pause();
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('error', handleError);
      audioRef.current = null;
    };
  }, [clearFade, src]);

  const fadeVolume = useCallback(
    (to: number, durationMs: number, onDone?: () => void) => {
      const audio = audioRef.current;
      if (!audio) return;
      clearFade();

      const from = audio.volume;
      const steps = Math.max(1, Math.round(durationMs / 40));
      let step = 0;

      fadeTimerRef.current = window.setInterval(() => {
        step += 1;
        const progress = Math.min(1, step / steps);
        audio.volume = Math.max(0, Math.min(1, from + (to - from) * progress));
        if (progress >= 1) {
          clearFade();
          onDone?.();
        }
      }, 40);
    },
    [clearFade]
  );

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      setStatus('loading');
      audio.volume = 0.02;
      await audio.play();
      setStatus('playing');
      fadeVolume(TARGET_VOLUME, 1400);
    } catch {
      setStatus('paused');
    }
  }, [fadeVolume]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    fadeVolume(0, 420, () => {
      audio.pause();
      setStatus('paused');
    });
  }, [fadeVolume]);

  const toggle = useCallback(() => {
    if (status === 'playing' || status === 'loading') {
      pause();
    } else if (status === 'paused') {
      void play();
    }
  }, [pause, play, status]);

  /**
   * Plays a gentle resonant Raga Bhupali brass bell & string harmonic shimmer
   * when entering the storybook or opening a ceremony scene.
   */
  const playPalaceChime = useCallback(
    (variant: 'doors' | 'window' = 'doors') => {
      if (!sfxEnabled || typeof window === 'undefined') return;
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      try {
        const ctx = new AudioCtx();
        const now = ctx.currentTime;
        // Raga Bhupali harmonic intervals: Sa (D5), Ga (F#5), Pa (A5)
        const freqs = variant === 'doors' ? [587.33, 739.99, 880.0] : [587.33, 880.0];
        const duration = variant === 'doors' ? 2.4 : 1.05;

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.07);

          const peak = variant === 'doors' ? 0.055 / (idx + 1) : 0.035 / (idx + 1);
          gain.gain.setValueAtTime(0.0001, now + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(peak, now + idx * 0.07 + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + duration);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + duration + 0.05);
        });

        window.setTimeout(() => {
          void ctx.close().catch(() => undefined);
        }, (duration + 0.5) * 1000);
      } catch {
        // Ignore audio context restriction errors gracefully
      }
    },
    [sfxEnabled]
  );

  return {
    status,
    isPlaying: status === 'playing',
    hasAudio: Boolean(src) && status !== 'error' && status !== 'unavailable',
    sfxEnabled,
    setSfxEnabled,
    play,
    pause,
    toggle,
    playPalaceChime,
  };
}
