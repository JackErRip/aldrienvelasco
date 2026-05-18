/* Fixed layer — orbs remain visible behind all glass cards while scrolling */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* Dot/grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orb 1 — top right */}
      <div
        className="absolute rounded-full"
        style={{
          width: '620px', height: '620px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.20) 0%, transparent 65%)',
          top: '-160px', right: '-40px',
          filter: 'blur(64px)',
          animation: 'orb1 15s ease-in-out infinite',
        }}
      />

      {/* Orb 2 — bottom left */}
      <div
        className="absolute rounded-full"
        style={{
          width: '520px', height: '520px',
          background: 'radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 65%)',
          bottom: '8%', left: '-110px',
          filter: 'blur(64px)',
          animation: 'orb2 19s ease-in-out infinite',
        }}
      />

      {/* Orb 3 — center float */}
      <div
        className="absolute rounded-full"
        style={{
          width: '380px', height: '380px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.13) 0%, transparent 65%)',
          top: '38%', left: '32%',
          filter: 'blur(56px)',
          animation: 'orb3 12s ease-in-out infinite',
        }}
      />

      {/* Orb 4 — bottom right accent */}
      <div
        className="absolute rounded-full"
        style={{
          width: '440px', height: '440px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)',
          bottom: '2%', right: '8%',
          filter: 'blur(60px)',
          animation: 'orb1 20s ease-in-out infinite reverse',
        }}
      />
    </div>
  );
}
