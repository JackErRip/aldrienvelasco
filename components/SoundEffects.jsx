'use client';
import { useEffect, useRef } from 'react';
import { playScrollTick, playHoverSound, playPressSound } from '../lib/sounds';

const INTERACTIVE = 'button, a, [role="button"]';

export default function SoundEffects() {
  const lastScroll  = useRef(0);
  const lastHovered = useRef(null);
  const lastHover   = useRef(0);

  useEffect(() => {
    /* ── scroll ─────────────────────────────────────── */
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScroll.current < 200) return;
      lastScroll.current = now;
      playScrollTick();
    };

    /* ── hover ──────────────────────────────────────── */
    const handleMouseOver = (e) => {
      const target = e.target.closest(INTERACTIVE);
      if (!target || target === lastHovered.current) return;
      const now = Date.now();
      if (now - lastHover.current < 80) return;   // min 80ms between hover sounds
      lastHovered.current = target;
      lastHover.current   = now;
      playHoverSound();
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(INTERACTIVE)) lastHovered.current = null;
    };

    /* ── press ──────────────────────────────────────── */
    const handlePointerDown = (e) => {
      if (e.target.closest(INTERACTIVE)) playPressSound();
    };

    window.addEventListener('scroll',      handleScroll,      { passive: true });
    document.addEventListener('mouseover', handleMouseOver,   { passive: true });
    document.addEventListener('mouseout',  handleMouseOut,    { passive: true });
    document.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener('scroll',      handleScroll);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout',  handleMouseOut);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return null;
}
