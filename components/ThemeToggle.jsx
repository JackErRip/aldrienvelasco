'use client';
import { useState, useEffect } from 'react';
import { playThemeSound } from '../lib/sounds';

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2"    x2="12" y2="5" />
      <line x1="12" y1="19"   x2="12" y2="22" />
      <line x1="4.22" y1="4.22"   x2="6.34"  y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2"  y1="12" x2="5"  y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" />
      <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8"  y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

const MODES = [
  { id: 'dark',   label: 'Dark',   Icon: MoonIcon },
  { id: 'light',  label: 'Light',  Icon: SunIcon },
  { id: 'system', label: 'System', Icon: MonitorIcon },
];

function applyTheme(mode) {
  const resolved = mode === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : mode;
  document.documentElement.setAttribute('data-theme', resolved);
}

export default function ThemeToggle() {
  const [mode, setMode]       = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setMode(saved);
    applyTheme(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || mode !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme('system');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [mode, mounted]);

  const handleSet = (newMode) => {
    setMode(newMode);
    localStorage.setItem('theme', newMode);
    applyTheme(newMode);
    playThemeSound(newMode);
  };

  if (!mounted) return <div style={{ width: 96, height: 34 }} />;

  return (
    <div
      className="flex items-center gap-0.5 p-1 rounded-full"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
    >
      {MODES.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => handleSet(id)}
          aria-label={`Switch to ${label} mode`}
          title={label}
          className="w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200"
          style={
            mode === id
              ? { background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: '#fff' }
              : { color: 'rgba(148,163,184,0.55)' }
          }
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}
