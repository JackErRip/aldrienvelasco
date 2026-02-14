'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './social-media.module.scss';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export default function SocialMedia() {
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
            <h1 className={styles.title}>Social Media Power in Game Development</h1>
            <p className={styles.subtitle}>
              How digital platforms shape game marketing, community building, and professional presence
            </p>
          </ScrollReveal>
        </motion.div>

        {/* Introduction */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🌐</span>
            The Digital Megaphone
          </h2>
          <p className={styles.text}>
            For indie game developers like ByUnitWare, social media isn&apos;t just a marketing tool—it&apos;s the 
            primary lifeline to players, publishers, and the gaming community. Without million-dollar 
            advertising budgets, indie studios rely on organic reach, community building, and viral moments 
            to make their games visible in an oversaturated market.
          </p>
          <p className={styles.text}>
            Social media has fundamentally changed how games are discovered, how communities form, and how 
            developers communicate with players. Understanding this power—and its risks—is essential for 
            success in modern game development.
          </p>
          </section>
        </ScrollReveal>

        {/* Benefits */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>✅</span>
            The Benefits: Why Social Media Matters
          </h2>
          
          <StaggerContainer staggerDelay={0.15} className={styles.benefitsGrid}>
            <StaggerItem>
              <motion.div 
                className={styles.benefitCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.benefitIcon}>📢</div>
                <h3>Marketing & Awareness</h3>
                <p>
                  Social media platforms allow indie developers to reach millions of potential players for free. 
                  A single viral tweet, Reddit post, or YouTube video can generate thousands of wishlists and 
                  transform an unknown game into a success story.
                </p>
                <div className={styles.example}>
                  <strong>Real Example:</strong> Among Us was released in 2018 but didn&apos;t take off until Twitch 
                  streamers discovered it in 2020. Social media exposure turned it into a global phenomenon.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.benefitCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.benefitIcon}>👥</div>
                <h3>Community Building</h3>
                <p>
                  Discord servers, subreddit communities, and Twitter followers create dedicated fanbases before 
                  a game even launches. These communities provide beta testers, word-of-mouth marketing, and 
                  long-term player engagement.
                </p>
                <div className={styles.example}>
                  <strong>For ByUnitWare:</strong> Building a Discord server where co-op gaming enthusiasts 
                  gather creates a ready-made audience excited for story-driven cooperative experiences.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.benefitCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.benefitIcon}>🎓</div>
                <h3>Education & Mobilization</h3>
                <p>
                  Social media educates players about game development realities, indie struggles, and the value 
                  of supporting small studios. It can mobilize communities to support Kickstarters, Early Access, 
                  or Filipino indie developers.
                </p>
                <div className={styles.example}>
                  <strong>Advocacy Impact:</strong> Campaigns like #IndieGameDevPH can raise awareness about 
                  Filipino indie games and drive support for local studios.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.benefitCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.benefitIcon}>📊</div>
                <h3>Direct Player Feedback</h3>
                <p>
                  Social media provides instant feedback from players. Steam community discussions, Reddit threads, 
                  and Twitter replies reveal what players love, what frustrates them, and what features they want. 
                  This guides development decisions.
                </p>
                <div className={styles.example}>
                  <strong>Development Benefit:</strong> Early Access games use Reddit and Discord feedback to 
                  iterate quickly, fixing bugs and balancing gameplay based on real player data.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.benefitCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.benefitIcon}>🎥</div>
                <h3>Content Creator Amplification</h3>
                <p>
                  YouTube and Twitch streamers act as free marketing when they play and showcase games. Co-op 
                  games especially benefit since streamers often play them together, creating entertaining content 
                  that drives sales.
                </p>
                <div className={styles.example}>
                  <strong>Co-op Advantage:</strong> Games like Phasmophobia and It Takes Two exploded in 
                  popularity because streamers played them, showing viewers how fun cooperative gameplay can be.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.benefitCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.benefitIcon}>🤝</div>
                <h3>Networking & Collaboration</h3>
                <p>
                  Twitter/X and LinkedIn connect indie developers with other studios, artists, voice actors, 
                  publishers, and potential collaborators. Professional relationships form through social media 
                  interactions.
                </p>
                <div className={styles.example}>
                  <strong>Industry Connections:</strong> Many indie developers find team members, freelance artists, 
                  or publishing deals through Twitter networking and industry Discord servers.
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Risks */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.risksSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>⚠️</span>
            The Risks: Social Media&apos;s Dark Side
          </h2>
          
          <StaggerContainer staggerDelay={0.15} className={styles.risksGrid}>
            <StaggerItem>
              <motion.div 
                className={styles.riskCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.riskIcon}>🎭</div>
                <h3>Misinformation & Hype Culture</h3>
                <p>
                  Social media can spread false information about games—misleading trailers, exaggerated features, 
                  or unrealistic promises. This creates hype that games can&apos;t deliver on, leading to disappointed 
                  players and damaged reputations.
                </p>
                <div className={styles.warning}>
                  <strong>Danger:</strong> Overpromising features on Twitter to generate hype, then failing to 
                  deliver, destroys trust and results in negative reviews.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.riskCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.riskIcon}>💣</div>
                <h3>Cancel Culture & Review Bombing</h3>
                <p>
                  Social media mobs can destroy games and developers over perceived slights, controversial 
                  statements, or simply because the game doesn&apos;t align with certain ideologies. Review bombing on 
                  Steam can kill sales overnight.
                </p>
                <div className={styles.warning}>
                  <strong>Danger:</strong> A single controversial tweet or game design choice can spark coordinated 
                  campaigns to leave negative Steam reviews and tank a game&apos;s success.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.riskCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.riskIcon}>🔐</div>
                <h3>Privacy & Security Concerns</h3>
                <p>
                  Game developers face doxxing, harassment, and privacy violations through social media. Sharing 
                  too much personal information or engaging with toxic communities can have real-world consequences.
                </p>
                <div className={styles.warning}>
                  <strong>Danger:</strong> Developers who share personal details on social media have faced doxxing, 
                  swatting, and harassment campaigns from hostile online groups.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.riskCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.riskIcon}>😓</div>
                <h3>Mental Health Impact</h3>
                <p>
                  Constant public scrutiny, negative feedback, comparison to other developers, and the pressure to 
                  maintain an active social media presence takes a toll on mental health. Burnout and anxiety are 
                  common among indie developers.
                </p>
                <div className={styles.warning}>
                  <strong>Danger:</strong> Reading thousands of negative comments about your passion project can be 
                  devastating. Social media amplifies criticism more than praise.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.riskCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.riskIcon}>⏰</div>
                <h3>Time Sink & Distraction</h3>
                <p>
                  Managing social media, responding to comments, creating content, and engaging with communities 
                  takes time away from actual game development. It&apos;s easy to spend hours on Twitter instead of 
                  writing code.
                </p>
                <div className={styles.warning}>
                  <strong>Danger:</strong> Indie developers can fall into the trap of &quot;building in public&quot; so much 
                  that they never finish building the actual game.
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.riskCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.riskIcon}>🎯</div>
                <h3>Algorithmic Pressure</h3>
                <p>
                  Social media algorithms favor controversy, outrage, and frequent posting. This pressures developers 
                  to create controversial content or post constantly to stay visible, rather than focusing on quality.
                </p>
                <div className={styles.warning}>
                  <strong>Danger:</strong> Developers feel pressured to engage in drama or post hot takes to gain 
                  visibility, which can backfire and damage their professional reputation.
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Managing Online Presence */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🛡️</span>
            Managing Professional Online Presence as a Game Developer
          </h2>
          
          <div className={styles.strategiesList}>
            <div className={styles.strategy}>
              <div className={styles.strategyNumber}>01</div>
              <div className={styles.strategyContent}>
                <h3>Separate Personal & Professional Accounts</h3>
                <p>
                  Maintain distinct social media accounts for ByUnitWare (studio) and personal use. Keep personal 
                  opinions, political views, and controversial takes off the studio account to protect the brand.
                </p>
              </div>
            </div>

            <div className={styles.strategy}>
              <div className={styles.strategyNumber}>02</div>
              <div className={styles.strategyContent}>
                <h3>Be Transparent but Strategic</h3>
                <p>
                  Share development progress, challenges, and authentic behind-the-scenes content. But don&apos;t 
                  overpromise features, show misleading footage, or create unrealistic expectations. Honesty 
                  builds trust.
                </p>
              </div>
            </div>

            <div className={styles.strategy}>
              <div className={styles.strategyNumber}>03</div>
              <div className={styles.strategyContent}>
                <h3>Set Boundaries & Protect Mental Health</h3>
                <p>
                  Limit time on social media. Don&apos;t read every comment or engage with trolls. Use social media 
                  managers or tools to schedule posts and filter negativity. Your mental health matters more 
                  than engagement metrics.
                </p>
              </div>
            </div>

            <div className={styles.strategy}>
              <div className={styles.strategyNumber}>04</div>
              <div className={styles.strategyContent}>
                <h3>Focus on Community, Not Controversy</h3>
                <p>
                  Build communities around shared love of gaming and co-op experiences. Avoid political debates, 
                  culture war topics, and inflammatory discussions. Let the games speak for themselves.
                </p>
              </div>
            </div>

            <div className={styles.strategy}>
              <div className={styles.strategyNumber}>05</div>
              <div className={styles.strategyContent}>
                <h3>Leverage Content Creators Wisely</h3>
                <p>
                  Send game keys to streamers and YouTubers whose audiences align with co-op gaming. Don&apos;t pay 
                  for fake hype or misleading coverage. Organic enthusiasm from creators is worth more than 
                  paid promotion.
                </p>
              </div>
            </div>

            <div className={styles.strategy}>
              <div className={styles.strategyNumber}>06</div>
              <div className={styles.strategyContent}>
                <h3>Have a Crisis Management Plan</h3>
                <p>
                  Be prepared for review bombs, negative viral moments, or criticism. Respond calmly and 
                  professionally. Acknowledge legitimate feedback. Don&apos;t feed trolls or engage in Twitter wars.
                </p>
              </div>
            </div>

            <div className={styles.strategy}>
              <div className={styles.strategyNumber}>07</div>
              <div className={styles.strategyContent}>
                <h3>Prioritize Development Over Posting</h3>
                <p>
                  The best marketing is a great game. Don&apos;t let social media management replace actual game 
                  development. Schedule posts, batch content creation, and automate where possible.
                </p>
              </div>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Platform Specific Strategies */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.platformSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>📱</span>
            Platform-Specific Strategies for Game Developers
          </h2>
          
          <div className={styles.platformStrategies}>
            <div className={styles.platformStrategy}>
              <h3>Twitter/X</h3>
              <p><strong>Best for:</strong> Quick updates, GIFs, short gameplay clips, engaging with gaming community</p>
              <p><strong>Strategy:</strong> Post development progress, tease new features, share community content, 
              engage with other indie devs. Keep it professional and game-focused.</p>
            </div>

            <div className={styles.platformStrategy}>
              <h3>Discord</h3>
              <p><strong>Best for:</strong> Building dedicated community, beta testing, direct player communication</p>
              <p><strong>Strategy:</strong> Create channels for feedback, bug reports, co-op matchmaking, and 
              general discussion. Moderate actively to maintain positive atmosphere.</p>
            </div>

            <div className={styles.platformStrategy}>
              <h3>YouTube</h3>
              <p><strong>Best for:</strong> DevLogs, trailers, gameplay showcases, tutorials</p>
              <p><strong>Strategy:</strong> Create high-quality trailers and development update videos. Share 
              behind-the-scenes content. Partner with gaming YouTubers for coverage.</p>
            </div>

            <div className={styles.platformStrategy}>
              <h3>Reddit</h3>
              <p><strong>Best for:</strong> Deep discussions, technical Q&A, honest feedback</p>
              <p><strong>Strategy:</strong> Engage in r/gamedev, r/IndieGaming, and relevant gaming subreddits. 
              Be authentic—Redditors can&apos;t smell marketing BS.</p>
            </div>

            <div className={styles.platformStrategy}>
              <h3>Steam Community</h3>
              <p><strong>Best for:</strong> Patch notes, announcements, player support</p>
              <p><strong>Strategy:</strong> Actively respond to forum posts and discussions. Update players on 
              fixes and content. Address concerns professionally.</p>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Conclusion */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.conclusionSection}>
            <div className={styles.conclusionContent}>
              <h2>Harnessing Social Media Power Responsibly</h2>
              <p>
                Social media is simultaneously the indie developer&apos;s greatest tool and biggest threat. Used wisely, 
                it builds communities, drives sales, and creates opportunities. Used recklessly, it destroys mental 
                health, damages reputations, and distracts from actual development.
              </p>
              <p>
                At ByUnitWare, the approach is clear: use social media to showcase passion-driven game development, 
                build authentic communities around co-op gaming, and maintain professional boundaries that protect 
                both the studio and personal wellbeing.
              </p>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
