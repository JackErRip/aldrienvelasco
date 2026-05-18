const clients = [
  { name: 'SoundMint',              desc: 'Page updates and performance fixes.',                                                           tags: ['React', 'Next.js'], done: true  },
  { name: 'Knoll Steel',            desc: 'Revamped the original site in WordPress — improved layout, functionality, and appearance.',     tags: ['WordPress'],        done: true  },
  { name: 'Knoll Crane',            desc: 'Redesigned and updated the site in WordPress — enhanced layout, components, and visual appeal.',tags: ['WordPress'],        done: true  },
  { name: 'Spread Eagle Golf Course', desc: 'WordPress and Next.js component setup and build-out.',                                       tags: ['WordPress','Next.js'],done: true  },
  { name: 'Goodpix',                desc: 'Currently working on development tasks for the project.',                                       tags: ['Next.js'],          done: false },
  { name: 'Fortissimo Revamp',      desc: 'Assisting in planning and setup for website overhaul.',                                        tags: ['Next.js'],          done: false },
];

const projects = [
  {
    icon: '🎬',
    title: 'Creatine 2: Summer of Vengeance',
    desc:  'Passion project sequel to a 10th-grade promotional film set in an original universe where "Creatine" is a temporary strength compound — think Super Soldier Serum. The sequel goes deeper on story, fight choreography, and action.',
    tags:  ['Director', 'Writer', 'Editor', 'Actor', 'DaVinci Resolve', 'In Production'],
    inProduction: true,
  },
  {
    icon: '🎮',
    title: 'UE4 Bounce Mechanic',
    desc:  'Created a CoD4-inspired bounce mechanic using Unreal Engine Blueprints, focusing on velocity handling and gameplay feel.',
    tags:  ['Unreal Engine 4', 'Blueprints', 'Game Dev'],
  },
  {
    icon: '🧱',
    title: 'UE5 Wallrun Jump Mechanic',
    desc:  'Developed a custom movement prototype in UE5 — includes wallrun and custom jump logic for practice in game scripting.',
    tags:  ['Unreal Engine 5', 'Blueprints', 'Game Dev'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 md:py-32 px-5 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto">

        <p className="mono text-blue-400 text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 text-center">// experience_&_projects</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16 text-center">
          What I&apos;ve <span className="gradient-text">built</span>
        </h2>

        {/* ── Work experience ── */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="h-px flex-1" style={{ background: 'rgba(59,130,246,0.15)' }} />
            <h3 className="mono text-blue-300 text-sm sm:text-base font-semibold whitespace-nowrap">Work Experience</h3>
            <div className="h-px flex-1" style={{ background: 'rgba(59,130,246,0.15)' }} />
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8">
            {/* Role header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-6">
              <div>
                <h4 className="text-white text-lg sm:text-xl font-bold">Part-Time Developer</h4>
                <p className="gradient-text mono font-semibold text-xs sm:text-sm mt-1">Web Agency</p>
              </div>
              <span
                className="mono text-xs px-3 py-1.5 rounded-full self-start sm:self-auto whitespace-nowrap"
                style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                Part-time
              </span>
            </div>

            <p className="mono text-blue-400/50 text-xs mb-4">// client_projects</p>

            {/* Client cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {clients.map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl p-3 sm:p-4 transition-all duration-250 hover:border-blue-500/30"
                  style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.1)' }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-white font-semibold text-xs sm:text-sm leading-snug">{c.name}</span>
                    <span
                      className="mono text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0"
                      style={{
                        background: c.done ? 'rgba(74,222,128,0.08)' : 'rgba(251,191,36,0.08)',
                        color:      c.done ? '#86efac'               : '#fcd34d',
                        border:     `1px solid ${c.done ? 'rgba(74,222,128,0.2)' : 'rgba(251,191,36,0.2)'}`,
                      }}
                    >
                      {c.done ? 'Done' : 'In Progress'}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{c.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span key={t} className="mono text-[10px] sm:text-xs px-2 py-0.5 rounded text-blue-400/70" style={{ background: 'rgba(59,130,246,0.1)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Personal projects ── */}
        <div>
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="h-px flex-1" style={{ background: 'rgba(59,130,246,0.15)' }} />
            <h3 className="mono text-blue-300 text-sm sm:text-base font-semibold whitespace-nowrap">Personal Projects</h3>
            <div className="h-px flex-1" style={{ background: 'rgba(59,130,246,0.15)' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((p) => (
              <div key={p.title} className="glass-card card-hover rounded-2xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-2 mb-4 sm:mb-5">
                  <span className="text-3xl sm:text-4xl">{p.icon}</span>
                  {p.inProduction && (
                    <span
                      className="mono text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0"
                      style={{ background: 'rgba(251,191,36,0.08)', color: '#fcd34d', border: '1px solid rgba(251,191,36,0.2)' }}
                    >
                      In Production
                    </span>
                  )}
                </div>
                <h4 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">{p.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.filter((t) => t !== 'In Production').map((t) => (
                    <span key={t} className="mono text-xs px-3 py-1 rounded-full text-blue-300" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
