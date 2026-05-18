'use client';
import Image from 'next/image';
import { useState } from 'react';

const socials = [
  {
    name: 'GitHub',
    handle: '@JackErRip',
    href: 'https://github.com/JackErRip',
    logo: '/images/github-mark-white.png',
    action: 'link',
    description: 'Check out my projects and contributions',
  },
  {
    name: 'Twitter / X',
    handle: '@JackErRip23',
    href: 'https://x.com/JackErRip23',
    logo: '/images/Twitter_new_X_logo.png',
    action: 'link',
    description: 'Follow me for updates and thoughts',
  },
  {
    name: 'Discord',
    handle: 'jackerrip',
    href: '#',
    logo: '/images/discord-color-logo-E5E6DFEF80-seeklogo.com.png',
    action: 'copy',
    description: 'Click to copy my username',
  },
];

export default function Connect() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('jackerrip');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Failed to copy text to clipboard');
    }
  };

  return (
    <section id="connect" className="py-20 sm:py-28 md:py-32 px-5 sm:px-10 md:px-20" style={{ background: 'var(--section-tint)' }}>
      <div className="max-w-6xl mx-auto">

        <p className="mono text-blue-400 text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 text-center">// connect</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 text-center">
          Let&apos;s <span className="gradient-text">talk</span>
        </h2>
        <p className="text-gray-400 text-center mb-8 sm:mb-10 max-w-lg mx-auto text-sm sm:text-base">
          I&apos;m always open to new opportunities, collaborations, or just a friendly chat.
        </p>

        {/* Email CTA */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <a
            href="mailto:jackerrip23@gmail.com"
            className="btn-blue inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base min-h-[48px]"
          >
            <span>📧</span>
            <span className="break-all sm:break-normal">jackerrip23@gmail.com</span>
          </a>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {socials.map((social) => {
            const isDiscord = social.action === 'copy';

            const card = (
              <div className="glass-card card-hover rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-4 sm:gap-5 cursor-pointer group h-full min-h-[200px]">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 shrink-0"
                  style={{ background: 'rgba(59,130,246,0.1)', boxShadow: '0 0 20px rgba(59,130,246,0.15)' }}
                >
                  <Image src={social.logo} alt={social.name} width={34} height={34} className="object-contain" />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{social.name}</h3>
                  <p className="gradient-text mono font-semibold text-xs sm:text-sm mb-2 sm:mb-3">{social.handle}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{social.description}</p>
                </div>

                {isDiscord ? (
                  <span
                    className="mt-auto mono text-xs font-medium px-3 sm:px-4 py-2 rounded-full transition-all duration-300"
                    style={{
                      background: copied ? 'rgba(74,222,128,0.1)'  : 'rgba(59,130,246,0.1)',
                      color:      copied ? '#4ade80'                : '#60a5fa',
                      border:     `1px solid ${copied ? 'rgba(74,222,128,0.3)' : 'rgba(59,130,246,0.25)'}`,
                    }}
                  >
                    {copied ? '✓ Copied!' : '⎘ Click to copy'}
                  </span>
                ) : (
                  <span
                    className="mt-auto mono text-xs font-medium px-3 sm:px-4 py-2 rounded-full text-blue-400"
                    style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}
                  >
                    Visit profile →
                  </span>
                )}
              </div>
            );

            if (isDiscord) {
              return <a key={social.name} href="#" onClick={handleCopy} className="block">{card}</a>;
            }
            return (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                {card}
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
