'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './ict-in-gamedev.module.scss';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export default function ICTInGameDev() {
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
            <h1 className={styles.title}>ICT in Game Development</h1>
            <p className={styles.subtitle}>
              How Information and Communication Technology Powers Modern Game Creation
            </p>
          </ScrollReveal>
        </motion.div>

        {/* Introduction */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>💻</span>
            The Digital Foundation of Game Development
          </h2>
          <p className={styles.text}>
            Game development is built entirely on ICT infrastructure. Every aspect of creating singleplayer and 
            co-op experiences at ByUnitWare relies on digital tools, platforms, and communication systems. From 
            writing the first line of code to distributing finished games on Steam and PlayStation Network, 
            technology enables every step of the creative process.
          </p>
          </section>
        </ScrollReveal>

        {/* Game Engines */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🎮</span>
            Game Engines: The Core Development Tools
          </h2>
          <StaggerContainer staggerDelay={0.15} className={styles.toolGrid}>
            <StaggerItem>
              <motion.div 
                className={styles.toolCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.toolHeader}>
                  <h3>Unreal Engine 4 and 5</h3>
                  <span className={styles.badge}>Primary Engine</span>
                </div>
                <p>
                  Industry-leading engine for creating stunning story-driven experiences. Used for building immersive 
                  singleplayer campaigns and co-op adventures with photorealistic graphics and advanced physics.
                </p>
                <div className={styles.features}>
                  <span className={styles.feature}>• Nanite virtualized geometry</span>
                  <span className={styles.feature}>• Lumen global illumination</span>
                  <span className={styles.feature}>• C++ scripting</span>
                  <span className={styles.feature}>• Blueprint visual scripting</span>
                  <span className={styles.feature}>• Built-in multiplayer framework</span>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.toolCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.toolHeader}>
                  <h3>Unity Engine</h3>
                  <span className={styles.badge}>Alternative</span>
                </div>
                <p>
                  Versatile engine perfect for cross-platform development. Excellent for prototyping game mechanics 
                  and testing co-op networking features before full production.
                </p>
                <div className={styles.features}>
                  <span className={styles.feature}>• Cross-platform deployment</span>
                  <span className={styles.feature}>• Netcode for GameObjects</span>
                  <span className={styles.feature}>• Asset Store ecosystem</span>
                  <span className={styles.feature}>• C# scripting</span>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.toolCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.toolHeader}>
                  <h3>Godot Engine</h3>
                  <span className={styles.badge}>Open Source</span>
                </div>
                <p>
                  Free and open-source engine ideal for indie developers. Great for experimenting with game ideas 
                  without licensing costs, perfect for the indie game dev community.
                </p>
                <div className={styles.features}>
                  <span className={styles.feature}>• Completely free</span>
                  <span className={styles.feature}>• Lightweight and fast</span>
                  <span className={styles.feature}>• GDScript scripting</span>
                  <span className={styles.feature}>• Active community</span>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Digital Distribution */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🌐</span>
            Digital Distribution Platforms
          </h2>
          <StaggerContainer staggerDelay={0.15} className={styles.platformGrid}>
            <StaggerItem>
              <motion.div 
                className={styles.platformCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Steam (PC Gaming)</h3>
                <p>
                  Primary distribution platform for PC games. Steam&apos;s infrastructure handles game downloads, 
                  updates, achievements, cloud saves, and community features. Essential for reaching the global 
                  PC gaming market.
                </p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>120M+</span>
                    <span className={styles.statLabel}>Monthly Active Users</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>70%</span>
                    <span className={styles.statLabel}>Revenue Share to Developers</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className={styles.platformCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3>PlayStation Network</h3>
                <p>
                  Sony&apos;s platform for PlayStation distribution. Provides access to console gamers who prefer 
                  story-driven experiences and co-op gameplay on dedicated gaming hardware.
                </p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>108M+</span>
                    <span className={styles.statLabel}>PlayStation Plus Members</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>Console</span>
                    <span className={styles.statLabel}>Dedicated Hardware</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Development Tools */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🛠️</span>
            Essential Development Tools
          </h2>
          <div className={styles.categoryGrid}>
            <div className={styles.category}>
              <h3>Version Control & Collaboration</h3>
              <ul className={styles.toolList}>
                <li><strong>Git/GitHub:</strong> Source code management and team collaboration</li>
                <li><strong>Perforce:</strong> Large binary file version control for game assets</li>
                <li><strong>GitLab/Bitbucket:</strong> Alternative repositories with CI/CD pipelines</li>
              </ul>
            </div>

            <div className={styles.category}>
              <h3>Project Management</h3>
              <ul className={styles.toolList}>
                <li><strong>Trello:</strong> Visual task boards for sprint planning</li>
                <li><strong>Jira:</strong> Agile project management and bug tracking</li>
                <li><strong>Notion:</strong> Documentation and knowledge base</li>
              </ul>
            </div>

            <div className={styles.category}>
              <h3>3D Modeling & Art</h3>
              <ul className={styles.toolList}>
                <li><strong>Blender:</strong> Free 3D modeling, animation, and rendering</li>
                <li><strong>Maya/3ds Max:</strong> Professional 3D content creation</li>
                <li><strong>Substance Painter:</strong> Texture and material creation</li>
              </ul>
            </div>

            <div className={styles.category}>
              <h3>Audio Production</h3>
              <ul className={styles.toolList}>
                <li><strong>FMOD/Wwise:</strong> Interactive audio middleware</li>
                <li><strong>Audacity/Reaper:</strong> Audio editing and mixing</li>
                <li><strong>FL Studio:</strong> Music composition for game soundtracks</li>
              </ul>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Networking Technology */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🔗</span>
            Co-op Networking Technology
          </h2>
          <p className={styles.text}>
            For ByUnitWare&apos;s co-op focus, networking technology is crucial. We implement peer-to-peer (P2P) 
            networking and LAN multiplayer systems to create seamless cooperative experiences.
          </p>
          <div className={styles.networkingCards}>
            <div className={styles.networkCard}>
              <h3>Peer-to-Peer (P2P) Networking</h3>
              <p>
                Players connect directly to each other without dedicated servers. Perfect for small co-op 
                sessions (2-4 players) like It Takes Two or Split Fiction. Reduces costs and latency for 
                indie developers.
              </p>
            </div>
            <div className={styles.networkCard}>
              <h3>LAN Multiplayer</h3>
              <p>
                Local network play for split-screen and same-room co-op. Ideal for internet cafes in the 
                Philippines where friends gather to play together physically.
              </p>
            </div>
            <div className={styles.networkCard}>
              <h3>Matchmaking APIs</h3>
              <p>
                Services like Steam Networking and Epic Online Services handle player connections, 
                lobbies, and session management for seamless co-op experiences.
              </p>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Social Media Impact */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>📱</span>
            How Social Media Influences Game Development
          </h2>
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <h3>Marketing & Discovery</h3>
              <p>
                Social media is the primary marketing channel for indie game studios. Platforms like Twitter/X, 
                Reddit, and YouTube allow developers to showcase gameplay, build hype, and reach players 
                organically without massive advertising budgets.
              </p>
              <div className={styles.examples}>
                <strong>Example:</strong> Posting gameplay clips on Twitter can go viral and drive thousands of 
                wishlists on Steam before launch.
              </div>
            </div>

            <div className={styles.impactCard}>
              <h3>Community Building</h3>
              <p>
                Discord serves as the hub for player communities. Game developers use Discord servers to gather 
                feedback, run beta tests, announce updates, and build loyal fanbases who support the game 
                through development.
              </p>
              <div className={styles.examples}>
                <strong>Example:</strong> Phasmophobia&apos;s success was driven by community engagement on Discord 
                and Twitch streaming.
              </div>
            </div>

            <div className={styles.impactCard}>
              <h3>Streaming & Content Creation</h3>
              <p>
                YouTube Gaming and Twitch streamers can make or break a game. Co-op games naturally perform 
                well on streaming platforms because they create entertaining collaborative moments between 
                content creators.
              </p>
              <div className={styles.examples}>
                <strong>Example:</strong> It Takes Two became a massive hit partly due to streamers playing 
                it together and showcasing the co-op mechanics.
              </div>
            </div>

            <div className={styles.impactCard}>
              <h3>Player Feedback & Iteration</h3>
              <p>
                Social media provides instant feedback from players. Reddit communities, Steam forums, and 
                Twitter replies help developers identify bugs, understand what players enjoy, and prioritize 
                features for updates.
              </p>
              <div className={styles.examples}>
                <strong>Example:</strong> Early Access games use community feedback from Reddit and Discord 
                to shape development.
              </div>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Productivity Impact */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>⚡</span>
            How ICT Improves Game Development Productivity
          </h2>
          <div className={styles.productivityList}>
            <div className={styles.productivityItem}>
              <div className={styles.itemNumber}>01</div>
              <div className={styles.itemContent}>
                <h3>Remote Collaboration</h3>
                <p>
                  Cloud-based tools like GitHub, Google Drive, and Slack enable team members to work from 
                  anywhere. This is crucial for indie studios that can&apos;t afford physical office space.
                </p>
              </div>
            </div>

            <div className={styles.productivityItem}>
              <div className={styles.itemNumber}>02</div>
              <div className={styles.itemContent}>
                <h3>Automated Testing & CI/CD</h3>
                <p>
                  Continuous Integration pipelines automatically build and test games after every code change, 
                  catching bugs early and ensuring stability across platforms.
                </p>
              </div>
            </div>

            <div className={styles.productivityItem}>
              <div className={styles.itemNumber}>03</div>
              <div className={styles.itemContent}>
                <h3>Asset Marketplaces</h3>
                <p>
                  Unreal Marketplace, Unity Asset Store, and sites like itch.io provide ready-made assets, 
                  tools, and plugins that save months of development time for small teams.
                </p>
              </div>
            </div>

            <div className={styles.productivityItem}>
              <div className={styles.itemNumber}>04</div>
              <div className={styles.itemContent}>
                <h3>Cloud Rendering & Build Services</h3>
                <p>
                  Services like AWS and Google Cloud allow developers to render cinematics and build games 
                  for multiple platforms without investing in expensive hardware.
                </p>
              </div>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Conclusion */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.conclusionSection}>
            <div className={styles.conclusionContent}>
              <h2>ICT: The Backbone of Modern Game Development</h2>
              <p>
                Every aspect of creating quality singleplayer and co-op gaming experiences relies on ICT. 
                From game engines and networking technology to distribution platforms and community building, 
                technology enables independent studios like ByUnitWare to compete globally and create games 
                driven by passion and hard work.
              </p>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
