'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './contact.module.scss';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.content}>
        {/* Header with Parallax */}
        <motion.div className={styles.header} style={{ y, opacity }}>
          <ScrollReveal direction="none" delay={0.2}>
            <h1 className={styles.title}>Let&apos;s Connect</h1>
            <p className={styles.subtitle}>
              Reach out for collaborations, partnerships, or just to talk about co-op gaming
            </p>
          </ScrollReveal>
        </motion.div>

        {/* Main Contact Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.contactSection}>
            <StaggerContainer staggerDelay={0.15} className={styles.contactGrid}>
              <StaggerItem>
                <motion.div 
                  className={styles.contactCard}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.contactIcon}>📧</div>
                  <h3>Email</h3>
                  <p className={styles.contactInfo}>
                    <a href="mailto:johnny.velasco@byunitware.com">
                      johnny.velasco@byunitware.com
                    </a>
                  </p>
                  <p className={styles.contactDescription}>
                    For business inquiries, collaborations, and general questions
                  </p>
                  <div className={styles.responseTime}>
                    <strong>Response Time:</strong> 24-48 hours
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className={styles.contactCard}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.contactIcon}>🏢</div>
                  <h3>Studio Inquiries</h3>
                  <p className={styles.contactInfo}>
                    <a href="mailto:studio@byunitware.com">
                      studio@byunitware.com
                    </a>
                  </p>
                  <p className={styles.contactDescription}>
                    For publisher partnerships, media coverage, and official studio communications
                  </p>
                  <div className={styles.responseTime}>
                    <strong>Response Time:</strong> 2-3 business days
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className={styles.contactCard}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.contactIcon}>🛠️</div>
                  <h3>Technical Support</h3>
                  <p className={styles.contactInfo}>
                    <a href="mailto:support@byunitware.com">
                      support@byunitware.com
                    </a>
                  </p>
                  <p className={styles.contactDescription}>
                    For bug reports, technical issues, and game-related questions
                  </p>
                  <div className={styles.responseTime}>
                    <strong>Response Time:</strong> 48-72 hours
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Social Media */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.socialSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.icon}>🌐</span>
              Professional Social Media
            </h2>
            
            <StaggerContainer staggerDelay={0.1} className={styles.socialGrid}>
              {[
                { icon: "𝕏", title: "Twitter/X", handle: "@ByUnitWare", desc: "Development updates, community engagement, industry news", href: "https://twitter.com/byunitware" },
                { icon: "💬", title: "Discord", handle: "ByUnitWare Community", desc: "Join our community, beta testing, direct communication", href: "https://discord.gg/byunitware" },
                { icon: "📺", title: "YouTube", handle: "@ByUnitWare", desc: "DevLogs, trailers, gameplay showcases, behind-the-scenes", href: "https://www.youtube.com/@byunitware" },
                { icon: "🤖", title: "Reddit", handle: "r/ByUnitWare", desc: "Community discussions, AMAs, technical Q&A", href: "https://www.reddit.com/r/byunitware" },
                { icon: "🎮", title: "Steam", handle: "ByUnitWare Developer Page", desc: "Game releases, community discussions, patch notes", href: "https://store.steampowered.com/dev/byunitware" },
                { icon: "💼", title: "LinkedIn", handle: "ByUnitWare Studio", desc: "Professional networking, job postings, industry connections", href: "https://www.linkedin.com/company/byunitware" }
              ].map((social, i) => (
                <StaggerItem key={i}>
                  <motion.a
                    href={social.href}
                    className={styles.socialCard}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={styles.socialIcon}>{social.icon}</div>
                    <div className={styles.socialInfo}>
                      <h3>{social.title}</h3>
                      <p>{social.handle}</p>
                      <span className={styles.socialDesc}>{social.desc}</span>
                    </div>
                  </motion.a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Communication Guidelines */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.guidelinesSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.icon}>📋</span>
              Communication Guidelines
            </h2>
            
            <StaggerContainer staggerDelay={0.15} className={styles.guidelinesList}>
              {[
                { icon: "✅", title: "Professional & Respectful Communication", text: "All communications should be professional, respectful, and constructive. We value thoughtful feedback and genuine questions. Personal attacks, harassment, or toxic behavior will not be tolerated." },
                { icon: "⏱️", title: "Response Times", text: "We strive to respond to all inquiries within 24-72 hours during business days (Monday-Friday, 9 AM - 6 PM PHT). Complex technical issues or partnership discussions may require additional time." },
                { icon: "🔒", title: "Privacy & Confidentiality", text: "Your contact information and inquiries are kept confidential. We do not share email addresses or personal data with third parties. Read our full privacy policy on our website." },
                { icon: "💬", title: "Best Contact Methods", html: "<strong>General Questions:</strong> Email or Discord<br/><strong>Bug Reports:</strong> Support email or Steam Community<br/><strong>Business Inquiries:</strong> Studio email<br/><strong>Community Discussion:</strong> Discord or Reddit" }
              ].map((guideline, i) => (
                <StaggerItem key={i}>
                  <motion.div 
                    className={styles.guideline}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={styles.guidelineIcon}>{guideline.icon}</div>
                    <div className={styles.guidelineContent}>
                      <h3>{guideline.title}</h3>
                      {guideline.html ? (
                        <p dangerouslySetInnerHTML={{ __html: guideline.html }} />
                      ) : (
                        <p>{guideline.text}</p>
                      )}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Collaboration Interests */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.collaborationSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.icon}>🤝</span>
              Open to Collaboration
            </h2>
            
            <StaggerContainer staggerDelay={0.1} className={styles.interestsGrid}>
              {[
                { title: "Content Creators & Streamers", text: "Interested in covering our games? We provide early access keys to content creators whose audiences align with co-op gaming. Reach out with your channel stats and content examples." },
                { title: "Fellow Indie Developers", text: "Looking to collaborate, share resources, or discuss game development? We're always open to connecting with other Filipino indie devs and international studios." },
                { title: "Artists & Musicians", text: "Freelance artists, 3D modelers, composers, and voice actors are welcome to reach out with portfolios. We frequently collaborate with talented creatives for game projects." },
                { title: "Publishers & Investors", text: "Interested in publishing or funding our games? Send partnership proposals to our studio email with details about your organization and what you bring to the table." },
                { title: "Media & Press", text: "Gaming journalists and media outlets can request review codes, press kits, interviews, or behind-the-scenes access through our studio email." },
                { title: "Community Members", text: "Want to help with beta testing, provide feedback, or contribute to community moderation? Join our Discord server and introduce yourself—we value active community members!" }
              ].map((interest, i) => (
                <StaggerItem key={i}>
                  <motion.div 
                    className={styles.interestCard}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3>{interest.title}</h3>
                    <p>{interest.text}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Disclaimer */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.disclaimerSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.icon}>⚠️</span>
              Important Disclaimer
            </h2>
            
            <div className={styles.disclaimer}>
              <p>
                <strong>Responsible Communication Policy:</strong> All contact information provided is for 
                professional and legitimate purposes only. Misuse of contact information for spam, harassment, 
                or malicious purposes will result in immediate blocking and may be reported to relevant authorities.
              </p>
              <p>
                <strong>No Guarantees:</strong> While we read all messages, we cannot guarantee responses to 
                every inquiry. We prioritize business partnerships, technical support, and constructive community 
                feedback.
              </p>
              <p>
                <strong>Social Media Notes:</strong> The social media accounts listed are official ByUnitWare 
                channels. Be aware of impersonation accounts. We will never ask for personal information, 
                passwords, or payment outside official platforms (Steam, PayPal, etc.).
              </p>
              <p>
                <strong>Respectful Discourse:</strong> We maintain professional boundaries in all communications. 
                Political debates, controversial topics unrelated to gaming, or personal attacks are not appropriate 
                for business channels.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Footer CTA */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>Ready to Connect?</h2>
              <p>
                Whether you&apos;re a gamer excited about co-op experiences, a fellow developer, or a potential 
                partner, we&apos;d love to hear from you. Let&apos;s build something great together.
              </p>
              <div className={styles.ctaButtons}>
                <motion.a 
                  href="mailto:johnny.velasco@byunitware.com" 
                  className={styles.primaryButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Send an Email
                </motion.a>
                <motion.a 
                  href="https://discord.gg/byunitware" 
                  className={styles.secondaryButton} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Join Our Discord
                </motion.a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}