'use client';
import { useEffect, useRef } from 'react';

const CONNECT_DIST = 140;
const MOUSE_RADIUS = 110;

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    const mouse = { x: null, y: null };

    /* ── sizing ─────────────────────────────────────────── */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    /* ── mouse ──────────────────────────────────────────── */
    const onMove  = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = ()  => { mouse.x = null; mouse.y = null; };
    window.addEventListener('mousemove',  onMove,  { passive: true });
    window.addEventListener('mouseleave', onLeave, { passive: true });

    /* ── particles ──────────────────────────────────────── */
    const isMobile = window.innerWidth < 768;
    const COUNT    = isMobile ? 45 : 90;

    const particles = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r:  Math.random() * 1.6 + 0.8,
      a:  Math.random() * 0.45 + 0.15,
    }));

    /* ── animation loop ─────────────────────────────────── */
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* draw connections */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }

      /* update + draw each particle */
      for (const p of particles) {
        /* mouse repulsion */
        if (mouse.x !== null) {
          const dx   = p.x - mouse.x;
          const dy   = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            p.x += (dx / dist) * force * 2.2;
            p.y += (dy / dist) * force * 2.2;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        /* wrap around edges */
        if (p.x < -10)                  p.x = canvas.width  + 10;
        if (p.x > canvas.width  + 10)  p.x = -10;
        if (p.y < -10)                  p.y = canvas.height + 10;
        if (p.y > canvas.height + 10)  p.y = -10;

        /* dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.a})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize',     resize);
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -9 }}
      aria-hidden="true"
    />
  );
}
