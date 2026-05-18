'use client';
import { useEffect, useState } from 'react';

const ROLES = [
  'Web Developer',
  'Video Editor',
  'Filmmaker',
  'Game Dev Enthusiast',
];

export default function Hero() {
  const [typed, setTyped]       = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting]   = useState(false);
  const [started, setStarted]     = useState(false);

  useEffect(() => {
    const boot = setTimeout(() => setStarted(true), 900);
    return () => clearTimeout(boot);
  }, []);

  useEffect(() => {
    if (!started) return;
    const current = ROLES[roleIndex];
    let t;

    if (!deleting && typed === current) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed === '') {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      t = setTimeout(() => {
        setTyped(deleting
          ? current.slice(0, typed.length - 1)
          : current.slice(0, typed.length + 1)
        );
      }, deleting ? 35 : 65);
    }

    return () => clearTimeout(t);
  }, [typed, deleting, roleIndex, started]);

  return (
    <section
      className="hero-section relative min-h-dvh flex flex-col justify-center px-5 sm:px-10 md:px-20 pt-20 pb-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl w-full">

        <p
          className="mono text-blue-400 text-xs sm:text-sm tracking-widest mb-3 sm:mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          hello_world.js
        </p>

        <h1
          className="gradient-text font-black leading-[0.9] mb-4 sm:mb-5 opacity-0 animate-fade-in-up"
          style={{
            fontSize: 'clamp(3rem, 13vw, 11rem)',
            animationDelay: '0.2s',
            animationFillMode: 'forwards',
          }}
        >
          JackErRip
        </h1>

        {/* Cycling typewriter */}
        <div
          className="flex items-center gap-1.5 mb-6 sm:mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <span className="mono text-base sm:text-xl md:text-2xl text-blue-300 font-semibold">{typed}</span>
          <span className="mono text-blue-400 text-xl sm:text-2xl cursor-blink">|</span>
        </div>

        <p
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 sm:mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
        >
          A creative from the Philippines — I build websites, edit videos, and make films.
          Currently working on client projects and a passion film of my own.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3 sm:gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <a href="#connect" className="btn-blue px-6 sm:px-7 py-3 rounded-full text-sm font-semibold text-white min-h-[44px] flex items-center">
            Get in touch
          </a>
          <a
            href="#about"
            className="px-6 sm:px-7 py-3 rounded-full text-sm font-semibold text-blue-300 border border-blue-500/30 hover:border-blue-400/70 hover:text-white transition-all duration-300 min-h-[44px] flex items-center"
          >
            Learn more
          </a>
        </div>

        {/* Floating tags (desktop only) */}
        <div
          className="absolute top-8 right-0 hidden lg:block opacity-0 animate-fade-in"
          style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
        >
          <div className="glass-card mono text-blue-300 text-xs px-4 py-2 rounded-lg" style={{ transform: 'rotate(2deg)' }}>
            ⚡ React & Next.js
          </div>
        </div>
        <div
          className="absolute bottom-28 right-10 hidden lg:block opacity-0 animate-fade-in"
          style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
        >
          <div className="glass-card mono text-blue-300 text-xs px-4 py-2 rounded-lg" style={{ transform: 'rotate(-2.5deg)' }}>
            🎬 DaVinci Resolve
          </div>
        </div>
        <div
          className="absolute top-1/2 right-16 hidden xl:block opacity-0 animate-fade-in"
          style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
        >
          <div className="glass-card mono text-blue-300 text-xs px-4 py-2 rounded-lg" style={{ transform: 'rotate(1deg)' }}>
            🎮 Unreal Engine
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
      >
        <span className="mono text-gray-600 text-[10px] tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </div>
    </section>
  );
}
