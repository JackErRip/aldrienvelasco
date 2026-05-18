'use client';
import { useState } from 'react';

const ALL_SKILLS = [
  { name: 'React.js',                     level: 65, cat: 'web' },
  { name: 'Next.js',                      level: 60, cat: 'web' },
  { name: 'JavaScript',                   level: 62, cat: 'web' },
  { name: 'WordPress',                    level: 70, cat: 'web' },
  { name: 'Node.js',                      level: 42, cat: 'web' },
  { name: 'Unreal Engine 4 (Blueprints)', level: 78, cat: 'game' },
  { name: 'Unreal Engine 5 (Blueprints)', level: 74, cat: 'game' },
  { name: 'DaVinci Resolve 20',           level: 85, cat: 'video' },
  { name: 'Topaz Video AI',               level: 75, cat: 'video' },
  { name: 'Adobe Premiere Pro',           level: 62, cat: 'video' },
  { name: 'Blender',                      level: 38, cat: 'video' },
  { name: 'Git & GitHub',                 level: 65, cat: 'tools' },
];

const TOOLS = ['VS Code', 'Vercel', 'Git & GitHub', 'DaVinci Resolve 20', 'Topaz Video AI', 'Blender', 'npm', 'REST APIs'];

const TAGS = ['Fast Learner', 'Cooperative', 'Adaptable', 'Detail-Oriented', 'STEM Graduate', 'Game Dev Enthusiast'];

const TABS = [
  { id: 'all',   label: 'All' },
  { id: 'web',   label: 'Web Dev' },
  { id: 'game',  label: 'Game Dev' },
  { id: 'video', label: 'Video Editing' },
  { id: 'tools', label: 'Tools' },
];

export default function Skills() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? ALL_SKILLS : ALL_SKILLS.filter((s) => s.cat === active);

  return (
    <section id="skills" className="py-20 sm:py-28 md:py-32 px-5 sm:px-10 md:px-20" style={{ background: 'var(--section-tint)' }}>
      <div className="max-w-6xl mx-auto">

        <p className="mono text-blue-400 text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 text-center">// skills_&_tools</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 text-center">
          What I <span className="gradient-text">build with</span>
        </h2>

        {/* Interactive tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="mono text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-250 min-h-[40px]"
              style={
                active === tab.id
                  ? {
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      color: '#fff',
                      boxShadow: '0 0 20px rgba(59,130,246,0.4)',
                    }
                  : {
                      background: 'rgba(59,130,246,0.08)',
                      color: '#93c5fd',
                      border: '1px solid rgba(59,130,246,0.2)',
                    }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-14 sm:mb-16">

          {/* Skill bars */}
          <div>
            <h3 className="mono text-blue-300 text-sm sm:text-base font-semibold mb-6 sm:mb-8">Technologies</h3>
            <div className="space-y-5 sm:space-y-6">
              {filtered.length > 0 ? filtered.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200 font-medium text-xs sm:text-sm">{skill.name}</span>
                    <span className="mono text-blue-400/60 text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(59,130,246,0.1)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(to right, #1d4ed8, #60a5fa)',
                        boxShadow: '0 0 8px rgba(59,130,246,0.6)',
                      }}
                    />
                  </div>
                </div>
              )) : (
                <p className="mono text-gray-600 text-sm">No skills in this category yet.</p>
              )}
            </div>
          </div>

          {/* Tools grid */}
          <div>
            <h3 className="mono text-blue-300 text-sm sm:text-base font-semibold mb-6 sm:mb-8">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {TOOLS.map((tool) => (
                <div
                  key={tool}
                  className="glass-card card-hover rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-gray-300 text-xs sm:text-sm font-medium hover:text-white min-h-[44px] flex items-center"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Highlights row */}
        <div>
          <h3 className="mono text-blue-300 text-sm sm:text-base font-semibold mb-5 sm:mb-6 text-center">Highlights</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="mono text-xs font-medium px-3 sm:px-4 py-2 rounded-full text-blue-300"
                style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
