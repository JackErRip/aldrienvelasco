let _ctx = null;

function getCtx() {
  if (typeof window === 'undefined') return null;
  try {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
  } catch {
    return null;
  }
}

function isMuted() {
  try { return localStorage.getItem('sound') === 'off'; } catch { return false; }
}

function playTone({ hz, endHz, dur, vol }) {
  if (isMuted()) return;
  const ctx = getCtx();
  if (!ctx) return;

  try {
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const t = ctx.currentTime;
    osc.type = 'sine';

    if (endHz && endHz !== hz) {
      osc.frequency.setValueAtTime(hz, t);
      osc.frequency.exponentialRampToValueAtTime(endHz, t + dur * 0.85);
    } else {
      osc.frequency.value = hz;
    }

    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(vol, t + Math.min(0.015, dur * 0.15));
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    osc.start(t);
    osc.stop(t + dur + 0.01);
  } catch { /* swallow audio errors silently */ }
}

export function playThemeSound(mode) {
  if (mode === 'light')  playTone({ hz: 440,  endHz: 880, dur: 0.18, vol: 0.038 });
  if (mode === 'dark')   playTone({ hz: 880,  endHz: 440, dur: 0.18, vol: 0.038 });
  if (mode === 'system') playTone({ hz: 660,  dur: 0.12,  vol: 0.030 });
}

export function playScrollTick() {
  playTone({ hz: 350, dur: 0.055, vol: 0.018 });
}

export function playHoverSound() {
  playTone({ hz: 900, dur: 0.030, vol: 0.012 });
}

export function playPressSound() {
  playTone({ hz: 580, dur: 0.045, vol: 0.022 });
}
