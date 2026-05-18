export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 px-5 sm:px-10 md:px-20" style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
        <p className="mono text-gray-600 text-xs sm:text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-blue-400/70">Aldrien Velasco</span> · JackErRip
        </p>
        <p className="mono text-gray-700 text-[10px] sm:text-xs">
          Built with <span className="text-blue-400/70">Next.js</span> &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
