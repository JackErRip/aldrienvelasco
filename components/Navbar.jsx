'use client';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const LINKS = ['about', 'skills', 'experience', 'connect'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-4 flex items-center justify-between transition-all duration-300"
        style={{
          background:          scrolled || open ? 'var(--nav-bg)' : 'transparent',
          backdropFilter:      scrolled || open ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter:scrolled || open ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled && !open ? '1px solid rgba(59,130,246,0.12)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="mono text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors tracking-widest"
          onClick={() => setOpen(false)}
        >
          AV<span className="text-white">.</span>
        </a>

        {/* Desktop: links + theme toggle */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm text-gray-400">
            {LINKS.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize hover:text-blue-400 transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="relative z-50 p-2 flex flex-col gap-[5px]"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-6 h-[2px] bg-blue-400 rounded transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-blue-400 rounded transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-blue-400 rounded transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen glass overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-10 transition-all duration-400"
        style={{
          background:           'var(--mobile-menu-bg)',
          backdropFilter:       'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          opacity:      open ? 1 : 0,
          pointerEvents:open ? 'auto' : 'none',
        }}
      >
        {LINKS.map((link, i) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setOpen(false)}
            className="capitalize text-4xl font-bold text-gray-300 hover:text-blue-400 transition-colors"
            style={{
              transform:  open ? 'translateY(0)' : 'translateY(24px)',
              opacity:    open ? 1 : 0,
              transition: `opacity 0.35s ease ${i * 70}ms, transform 0.35s ease ${i * 70}ms, color 0.2s`,
            }}
          >
            {link}
          </a>
        ))}

        <div
          className="absolute bottom-12 flex gap-6"
          style={{ opacity: open ? 1 : 0, transition: 'opacity 0.35s ease 0.35s' }}
        >
          <a href="https://github.com/JackErRip" target="_blank" rel="noopener noreferrer" className="mono text-xs text-gray-500 hover:text-blue-400 transition-colors">GitHub</a>
          <a href="https://x.com/JackErRip23" target="_blank" rel="noopener noreferrer" className="mono text-xs text-gray-500 hover:text-blue-400 transition-colors">Twitter</a>
          <a href="mailto:jackerrip23@gmail.com" className="mono text-xs text-gray-500 hover:text-blue-400 transition-colors">Email</a>
        </div>
      </div>
    </>
  );
}
