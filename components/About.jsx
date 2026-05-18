export default function About() {
  const fields = [
    { key: 'role',     value: '"Developer · Editor · Filmmaker"' },
    { key: 'stack',    value: '"React · Next.js · DaVinci · UE5"' },
    { key: 'location', value: '"Philippines"' },
    { key: 'status',   value: '"Available ✓"' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 px-5 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          <div>
            <p className="mono text-blue-400 text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">// about_me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-6 leading-tight">
              Crafting digital<br />
              <span className="gradient-text">experiences</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-5">
              A creative from the Philippines who works across web development, video editing, and
              filmmaking. My strongest ground is in post-production — editing and cutting in
              DaVinci Resolve — but I enjoy building across disciplines.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-5">
              On the web side I&apos;ve contributed to client projects using React, Next.js, and WordPress.
              On the creative side I&apos;m currently directing, writing, and editing
              <span className="text-blue-300 font-medium"> Creatine 2: Summer of Vengeance</span> —
              a passion film project I&apos;ve been building from scratch.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I go by <span className="gradient-text font-bold mono">JackErRip</span> online — feel
              free to reach out on any of my socials!
            </p>
          </div>

          {/* Code-style info card */}
          <div className="glass-card card-hover rounded-2xl p-6 sm:p-8">
            <p className="mono text-blue-400/50 text-xs mb-5">const aldrien = {'{'}</p>
            <div className="space-y-3 sm:space-y-4 pl-4 sm:pl-5 border-l border-blue-500/20">
              {fields.map(({ key, value }) => (
                <div key={key} className="flex flex-wrap gap-x-2 gap-y-1 items-baseline">
                  <span className="mono text-blue-300 text-xs sm:text-sm">{key}:</span>
                  <span className="mono text-green-300/80 text-xs sm:text-sm break-all">{value},</span>
                </div>
              ))}
            </div>
            <p className="mono text-blue-400/50 text-xs mt-5">{'}'}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
