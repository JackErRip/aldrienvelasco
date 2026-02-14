'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './digital-citizenship.module.scss';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export default function DigitalCitizenship() {
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
        {/* Header */}
        <motion.div className={styles.header} style={{ y, opacity }}>
          <ScrollReveal direction="none" delay={0.2}>
            <h1 className={styles.title}>Digital Citizenship in Game Development</h1>
            <p className={styles.subtitle}>
              Ethical practices, responsible communication, and professional conduct in the digital age
            </p>
          </ScrollReveal>
        </motion.div>

        {/* Introduction */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🌐</span>
            What is Digital Citizenship for Game Developers?
          </h2>
          <p className={styles.text}>
            Digital citizenship means operating ethically and responsibly in online spaces. For game developers 
            at ByUnitWare, this encompasses how we communicate with players, protect user data, create content, 
            manage communities, and conduct business in the digital marketplace.
          </p>
          <p className={styles.text}>
            As indie developers competing in a global digital economy, our reputation is everything. One ethical 
            misstep—data breach, dishonest marketing, toxic community behavior—can destroy years of hard work. 
            Digital citizenship isn&apos;t just moral obligation; it&apos;s survival.
          </p>
          </section>
        </ScrollReveal>

        {/* Digital Etiquette */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>💬</span>
            Digital Etiquette: Professional Communication
          </h2>
          
          <StaggerContainer staggerDelay={0.15} className={styles.principlesGrid}>
            <StaggerItem>
              <motion.div 
                className={styles.principleCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Respectful Community Management</h3>
                <p className={styles.principle}>
                  <strong>Practice:</strong> Moderate Discord servers and forums with fairness. Address toxic 
                  behavior promptly but professionally. Set clear community guidelines that promote positive 
                  co-op gaming culture.
                </p>
                <div className={styles.realExample}>
                  <strong>Real Example:</strong> When players argue in Discord about game balance, respond 
                  calmly with data and reasoning. Ban harassment, not disagreement. Foster debate, not drama.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.principleCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Constructive Criticism Handling</h3>
                <p className={styles.principle}>
                  <strong>Practice:</strong> Accept negative feedback gracefully. Distinguish between helpful 
                  criticism and trolling. Thank players for bug reports. Don&apos;t argue with Steam reviews.
                </p>
                <div className={styles.realExample}>
                  <strong>Real Example:</strong> If a player criticizes co-op netcode, acknowledge the issue, 
                  explain what you&apos;re doing to fix it, and follow up when it&apos;s resolved. Build trust through 
                  accountability.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.principleCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Professional Social Media Conduct</h3>
                <p className={styles.principle}>
                  <strong>Practice:</strong> Keep studio social media focused on games. Avoid political rants, 
                  personal attacks, or controversial takes. Be the professional voice players can trust.
                </p>
                <div className={styles.realExample}>
                  <strong>Real Example:</strong> When asked about industry drama on Twitter, redirect to game 
                  development content. Don&apos;t engage in Twitter wars or call out competitors.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.principleCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Timely & Honest Communication</h3>
                <p className={styles.principle}>
                  <strong>Practice:</strong> Update players about delays, bugs, and changes. Don&apos;t ghost your 
                  community. Admit mistakes. Be transparent about development challenges.
                </p>
                <div className={styles.realExample}>
                  <strong>Real Example:</strong> If a major update is delayed, announce it early with reasons. 
                  Players appreciate honesty more than silence or false promises.
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Responsible Communication */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>📢</span>
            Responsible Communication with Players
          </h2>
          
          <div className={styles.communicationList}>
            <div className={styles.commItem}>
              <div className={styles.commNumber}>01</div>
              <div className={styles.commContent}>
                <h3>Honest Marketing & No Misleading Content</h3>
                <p>
                  Show actual gameplay, not cinematic trailers that misrepresent the game. Don&apos;t promise features 
                  that aren&apos;t implemented. Be upfront about Early Access state, bugs, and content roadmap.
                </p>
                <div className={styles.commitment}>
                  <strong>ByUnitWare Commitment:</strong> Our Steam page and trailers will show real gameplay from 
                  actual co-op sessions, with clear disclaimers about development status.
                </div>
              </div>
            </div>

            <div className={styles.commItem}>
              <div className={styles.commNumber}>02</div>
              <div className={styles.commContent}>
                <h3>Clear Communication of Monetization</h3>
                <p>
                  If games have DLC, expansions, or cosmetic items, communicate pricing and content clearly. 
                  No hidden costs. No predatory monetization. Respect players&apos; money.
                </p>
                <div className={styles.commitment}>
                  <strong>ByUnitWare Commitment:</strong> We reject microtransactions, loot boxes, pay-to-win 
                  mechanics, and aggressive cosmetic stores. Our games are sold as complete experiences with fair, 
                  transparent pricing. Any future DLC will provide substantial content, not nickel-and-dime players.
                </div>
              </div>
            </div>

            <div className={styles.commItem}>
              <div className={styles.commNumber}>03</div>
              <div className={styles.commContent}>
                <h3>Managing Player Expectations</h3>
                <p>
                  Set realistic timelines for updates and fixes. Don&apos;t overpromise features to generate hype. 
                  Under-promise and over-deliver when possible.
                </p>
                <div className={styles.commitment}>
                  <strong>ByUnitWare Commitment:</strong> Development roadmaps will include &quot;planned&quot; vs 
                  &quot;confirmed&quot; features, with honest timelines we can actually meet.
                </div>
              </div>
            </div>

            <div className={styles.commItem}>
              <div className={styles.commNumber}>04</div>
              <div className={styles.commContent}>
                <h3>Accessibility & Inclusion in Communication</h3>
                <p>
                  Provide patch notes in clear language. Offer subtitles and accessibility options where 
                  possible. Communicate in ways that reach different player demographics.
                </p>
                <div className={styles.commitment}>
                  <strong>ByUnitWare Commitment:</strong> Our games will include subtitles, colorblind modes, 
                  and difficulty options to make co-op experiences accessible to more players.
                </div>
              </div>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Data Privacy */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🔐</span>
            Data Privacy & Security Protection
          </h2>
          
          <div className={styles.privacyGrid}>
            <div className={styles.privacyCard}>
              <h3>Protecting Player Data</h3>
              <p>
                Collect only necessary data. Use encryption for sensitive information. Never sell player data to 
                third parties. Comply with GDPR and data protection laws even as an indie studio.
              </p>
              <ul className={styles.practices}>
                <li>Secure user authentication systems</li>
                <li>Encrypted communication for multiplayer</li>
                <li>Regular security audits and updates</li>
                <li>Clear privacy policy on website and Steam page</li>
              </ul>
            </div>

            <div className={styles.privacyCard}>
              <h3>Transparent Data Collection</h3>
              <p>
                If collecting analytics (crash reports, gameplay data), inform players clearly. Offer opt-out 
                options. Explain how data improves the game.
              </p>
              <ul className={styles.practices}>
                <li>In-game notices about analytics collection</li>
                <li>Optional crash reporting with player consent</li>
                <li>Anonymized gameplay metrics for balancing</li>
                <li>No tracking outside of game functionality</li>
              </ul>
            </div>

            <div className={styles.privacyCard}>
              <h3>Account Security Best Practices</h3>
              <p>
                Implement secure password requirements. Support two-factor authentication where applicable. 
                Protect against account theft and unauthorized access.
              </p>
              <ul className={styles.practices}>
                <li>Strong password policies</li>
                <li>Steam integration for authentication</li>
                <li>Session timeout for inactive accounts</li>
                <li>Account recovery processes</li>
              </ul>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Avoiding Misinformation */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>✅</span>
            Combating Misinformation & Fake News
          </h2>
          
          <div className={styles.misinfoContent}>
            <p className={styles.text}>
              The gaming industry is plagued by misinformation—fake leaks, misleading trailers, false rumors, 
              and fabricated controversy. As ethical developers, we combat this by being sources of truth.
            </p>
            
            <div className={styles.misinfoStrategies}>
              <div className={styles.misinfoItem}>
                <h3>Verify Before Sharing</h3>
                <p>
                  Don&apos;t retweet unconfirmed rumors or industry gossip. When sharing news, link to original 
                  sources. Fact-check before amplifying information.
                </p>
              </div>

              <div className={styles.misinfoItem}>
                <h3>Correct False Information About Your Games</h3>
                <p>
                  If false rumors spread about ByUnitWare games, politely correct them with factual information. 
                  Don&apos;t let misinformation define your studio&apos;s reputation.
                </p>
              </div>

              <div className={styles.misinfoItem}>
                <h3>Be Primary Source of Information</h3>
                <p>
                  Make official announcements through studio channels (Discord, Steam, website). Direct players 
                  to authoritative sources rather than letting rumors fill information gaps.
                </p>
              </div>

              <div className={styles.misinfoItem}>
                <h3>Educate Community About Scams</h3>
                <p>
                  Warn players about fake key sellers, phishing attempts, and scam Discord servers impersonating 
                  your studio. Protect your community from fraud.
                </p>
              </div>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Ethical Content Creation */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🎨</span>
            Ethical Content Creation
          </h2>
          
          <div className={styles.ethicsGrid}>
            <div className={styles.ethicsCard}>
              <h3>No Copyright Violations</h3>
              <p>
                License all assets properly. Don&apos;t steal art, music, or code from other games. Use royalty-free 
                or purchased assets. Credit original creators. Respect intellectual property.
              </p>
              <div className={styles.ethicsCommitment}>
                <strong>ByUnitWare Policy:</strong> All game assets are either original creations, properly 
                licensed from marketplaces, or used with explicit permission from creators.
              </div>
            </div>

            <div className={styles.ethicsCard}>
              <h3>Avoiding Harmful Stereotypes</h3>
              <p>
                Create diverse characters without relying on offensive stereotypes. Represent different cultures, 
                backgrounds, and identities respectfully. Let quality storytelling speak for itself.
              </p>
              <div className={styles.ethicsCommitment}>
                <strong>ByUnitWare Policy:</strong> Our co-op games will feature diverse protagonists whose 
                identities enhance stories naturally, not as forced diversity checkboxes.
              </div>
            </div>

            <div className={styles.ethicsCard}>
              <h3>Age-Appropriate Content Ratings</h3>
              <p>
                Rate games accurately. If content includes violence, strong language, or mature themes, apply 
                appropriate age ratings. Don&apos;t mislead parents or younger players.
              </p>
              <div className={styles.ethicsCommitment}>
                <strong>ByUnitWare Policy:</strong> We&apos;ll pursue ESRB/PEGI ratings honestly and implement 
                content warnings where appropriate for story-driven games.
              </div>
            </div>

            <div className={styles.ethicsCard}>
              <h3>Credit & Attribution</h3>
              <p>
                Credit all contributors—programmers, artists, musicians, voice actors, beta testers. Acknowledge 
                tools and middleware used. Celebrate collaborators publicly.
              </p>
              <div className={styles.ethicsCommitment}>
                <strong>ByUnitWare Policy:</strong> Our games will have comprehensive credits, acknowledging 
                everyone who contributed to the project, from core team to community beta testers.
              </div>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Real-World Applications */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.realWorldSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🎯</span>
            Real-World Digital Citizenship in Action
          </h2>
          
          <div className={styles.scenariosList}>
            <div className={styles.scenario}>
              <h3>Scenario: Player Reports a Security Vulnerability</h3>
              <div className={styles.scenarioContent}>
                <div className={styles.wrong}>
                  <strong>❌ Wrong Approach:</strong> Ignore the report or threaten legal action against the 
                  player for &quot;hacking.&quot;
                </div>
                <div className={styles.right}>
                  <strong>✅ Right Approach:</strong> Thank the player, investigate immediately, patch the 
                  vulnerability, and publicly acknowledge their responsible disclosure.
                </div>
              </div>
            </div>

            <div className={styles.scenario}>
              <h3>Scenario: Negative Review on Steam</h3>
              <div className={styles.scenarioContent}>
                <div className={styles.wrong}>
                  <strong>❌ Wrong Approach:</strong> Reply defensively, argue with the reviewer, or ask friends 
                  to report the review as &quot;not helpful.&quot;
                </div>
                <div className={styles.right}>
                  <strong>✅ Right Approach:</strong> If criticism is valid, acknowledge it and share plans to 
                  address the issue. If it&apos;s trolling, don&apos;t engage—let the review speak for itself.
                </div>
              </div>
            </div>

            <div className={styles.scenario}>
              <h3>Scenario: Influencer Asks for Free Game Key</h3>
              <div className={styles.scenarioContent}>
                <div className={styles.wrong}>
                  <strong>❌ Wrong Approach:</strong> Give keys to anyone with followers, regardless of their 
                  audience or content quality.
                </div>
                <div className={styles.right}>
                  <strong>✅ Right Approach:</strong> Evaluate if their audience matches co-op gaming. Check 
                  their content quality. Provide keys strategically to creators who&apos;ll genuinely showcase the game.
                </div>
              </div>
            </div>

            <div className={styles.scenario}>
              <h3>Scenario: Community Member Becomes Toxic</h3>
              <div className={styles.scenarioContent}>
                <div className={styles.wrong}>
                  <strong>❌ Wrong Approach:</strong> Let toxicity fester to avoid confrontation, or ban them 
                  instantly without explanation.
                </div>
                <div className={styles.right}>
                  <strong>✅ Right Approach:</strong> Issue a warning citing specific community guideline 
                  violations. Give them a chance to improve. If behavior continues, ban with clear explanation.
                </div>
              </div>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Conclusion */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.conclusionSection}>
            <div className={styles.conclusionContent}>
              <h2>Digital Citizenship as Competitive Advantage</h2>
              <p>
                Being ethical isn&apos;t just morally right—it&apos;s smart business. Players reward honesty with loyalty. 
                Communities built on respect last longer than those built on hype. Studios with strong digital 
                citizenship survive controversies that destroy less principled competitors.
              </p>
              <p>
                At ByUnitWare, digital citizenship means creating games with integrity, communicating with 
                transparency, protecting player data, and building communities based on mutual respect. This is 
                how we compete in the digital age—not by cutting corners, but by earning trust.
              </p>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}