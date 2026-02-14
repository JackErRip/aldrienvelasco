'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './about-me.module.scss';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export default function AboutMe() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect for profile section
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.content}>
        {/* Profile Section with Parallax */}
        <motion.div 
          className={styles.profileSection}
          style={{ y, opacity }}
        >
          <ScrollReveal direction="none" delay={0.2}>
            <div className={styles.profileImageWrapper}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/meme picture of johnny sins.webp"
                  alt="Johnny Velazko"
                  className={styles.profilePicture}
                  width={240}
                  height={240}
                />
              </motion.div>
              <motion.div 
                className={styles.statusBadge}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <span className={styles.statusDot}></span>
                Available for Projects
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className={styles.profileInfo}>
              <h1 className={styles.title}>About Me</h1>
              <p className={styles.subtitle}>Game Developer • Web Developer • Filmmaker • Creative</p>
            </div>
          </ScrollReveal>
        </motion.div>

        {/* Who I Am Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>👤</span>
              Who I Am?
            </h2>
            <p className={styles.description}>
              I&apos;m <span className={styles.highlight}>Johnny Velazko</span>, a passionate <strong>GAME</strong> and <strong>WEB</strong> developer 
              with a love for creating beautiful and functional experiences. As the founder of ByUnitWare, I focus on developing 
              immersive co-op gaming experiences while mastering modern web technologies. Beyond code, I&apos;m also a <strong>creative multimedia 
              artist</strong> — from video editing in DaVinci Resolve and Premiere Pro to photography, film direction, and screenwriting. 
              I bring stories to life across multiple mediums.
            </p>
          </section>
        </ScrollReveal>

        {/* Skills Section with Staggered Cards */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>⚡</span>
              My Technical Skills
            </h2>
            <StaggerContainer staggerDelay={0.15} className={styles.skillsGrid}>
              <StaggerItem>
                <motion.div 
                  className={styles.skillCard}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={styles.skillIcon}>💻</div>
                  <h3 className={styles.skillTitle}>Frontend Development</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>React</span>
                    <span className={styles.tag}>Next.js</span>
                    <span className={styles.tag}>TypeScript</span>
                    <span className={styles.tag}>Sass</span>
                    <span className={styles.tag}>HTML/CSS</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className={styles.skillCard}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={styles.skillIcon}>🔧</div>
                  <h3 className={styles.skillTitle}>Backend Development</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>Node.js</span>
                    <span className={styles.tag}>Express</span>
                    <span className={styles.tag}>Database Design</span>
                    <span className={styles.tag}>REST APIs</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className={styles.skillCard}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={styles.skillIcon}>🎮</div>
                  <h3 className={styles.skillTitle}>Game Development</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>Unity</span>
                    <span className={styles.tag}>Unreal Engine</span>
                    <span className={styles.tag}>P2P Networking</span>
                    <span className={styles.tag}>Game Design</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className={styles.skillCard}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={styles.skillIcon}>🛠️</div>
                  <h3 className={styles.skillTitle}>Tools & Workflow</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>Git</span>
                    <span className={styles.tag}>VS Code</span>
                    <span className={styles.tag}>Figma</span>
                    <span className={styles.tag}>Performance Optimization</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className={styles.skillCard}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={styles.skillIcon}>🎬</div>
                  <h3 className={styles.skillTitle}>Creative & Media Production</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>DaVinci Resolve Studio</span>
                    <span className={styles.tag}>Adobe Premiere Pro</span>
                    <span className={styles.tag}>Adobe Photoshop</span>
                    <span className={styles.tag}>Photography</span>
                    <span className={styles.tag}>Film Direction</span>
                    <span className={styles.tag}>Screenwriting</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className={styles.skillCard}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={styles.skillIcon}>🎥</div>
                  <h3 className={styles.skillTitle}>Film Production</h3>
                  <div className={styles.skillTags}>
                    <span className={styles.tag}>Directing</span>
                    <span className={styles.tag}>Video Editing</span>
                    <span className={styles.tag}>Writing</span>
                    <span className={styles.tag}>Producing</span>
                    <span className={styles.tag}>Post-Production</span>
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Experience Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>🚀</span>
              My Experience
            </h2>
            <StaggerContainer staggerDelay={0.2} className={styles.experienceContent}>
              <StaggerItem>
                <motion.div 
                  className={styles.experienceCard}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className={styles.experienceHeader}>
                    <h3>ByUnitWare Studio</h3>
                    <span className={styles.experienceBadge}>Founder & Lead Developer</span>
                  </div>
                  <p>
                    Building an independent game studio focused on singleplayer and co-op experiences for PC and PlayStation. 
                    Leading development, design, and technical implementation of game projects.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className={styles.experienceCard}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className={styles.experienceHeader}>
                    <h3>Web Development Projects</h3>
                    <span className={styles.experienceBadge}>Full-Stack Developer</span>
                  </div>
                  <p>
                    Worked on various projects ranging from small websites to complex web applications. 
                    Each project has taught me valuable lessons in design, development, and user experience.
                  </p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Connect Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>🤝</span>
              Let&apos;s Connect
            </h2>
            <div className={styles.connectContent}>
              <p className={styles.connectText}>
                I&apos;m always open to new opportunities and collaborations. Whether you&apos;re interested in 
                game development, web projects, or just want to chat about tech and gaming, feel free to reach out!
              </p>
              <motion.a 
                href="/contact" 
                className={styles.ctaButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}