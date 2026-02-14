'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Card animation variants with 3D effect
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  // Why item variants
  const whyItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: (custom: number) => ({
      opacity: 1, 
      x: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  };

  return (
    <div className="page-wrapper" ref={ref}>
      <main className="main">
        {/* Navigation placeholder */}
        <motion.nav 
          className="nav"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="nav-brand">
            <h2 className="brand-name">ByUnitWare</h2>
          </div>
        </motion.nav>

        {/* Hero Section with Parallax */}
        <motion.section 
          className="hero-section"
          style={{ y, opacity }}
        >
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="hero-tag"
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { 
                  scale: 1, 
                  opacity: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }
              }}
            >
              Game Developer • Studio Founder
            </motion.div>

            <motion.h1 
              className="hero-title"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 }
                }
              }}
            >
              Hi, I&apos;m <span className="highlight">Johnny Velazko</span>
            </motion.h1>

            <motion.p 
              className="hero-subtitle"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, delay: 0.4 }
                }
              }}
            >
              Founder of <span className="brand-highlight">ByUnitWare</span> — an independent game studio 
              crafting immersive singleplayer and co-op experiences for PC and PlayStation.
            </motion.p>

            <motion.div 
              className="hero-mission"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="mission-label">Mission</div>
              <p className="mission-text">
                &quot;Building worlds that bring players together, one line of code at a time.&quot;
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* About Section with Scroll Reveal */}
        <motion.section 
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="section-title"
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            Who I Want to Be
          </motion.h2>

          <div className="about-content">
            {[
              { icon: "🎮", title: "Game Developer", text: "Creating interactive experiences that combine storytelling, art, and technology. My focus is on cooperative gameplay that strengthens bonds between players." },
              { icon: "🏢", title: "Studio Founder", text: "Building ByUnitWare from the ground up, focusing on quality singleplayer and co-op experiences for PC (Steam) and PlayStation platforms." },
              { icon: "🤝", title: "Community Builder", text: "Fostering positive gaming communities through cooperative gameplay. No PVP toxicity — just friends working together through LAN and P2P connections." }
            ].map((card, index) => (
              <motion.div 
                key={index}
                className="about-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -15,
                  rotateX: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 1000 }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Game Development Section */}
        <motion.section 
          className="why-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="section-title"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.6 }
              }
            }}
          >
            Why Game Development?
          </motion.h2>

          <div className="why-content">
            {[
              { number: "01", title: "Passion for Interactive Storytelling", text: "Games are unique — they let players become part of the story, making choices that matter and creating memories with friends." },
              { number: "02", title: "Merging Art, Code, and Design", text: "Game development sits at the intersection of creativity and technology. It's problem-solving meets artistic expression." },
              { number: "03", title: "Building Meaningful Connections", text: "Co-op games bring people together. Whether it's friends on a couch playing via LAN or teammates coordinating online, games create lasting bonds." },
              { number: "04", title: "Filipino Game Dev Representation", text: "The Philippine game development industry is growing, and I want to be part of putting Filipino indie developers on the global map." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="why-item"
                custom={index}
                variants={whyItemVariants}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <span className="why-number">{item.number}</span>
                <div className="why-text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Business Philosophy Section */}
        <motion.section 
          className="why-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="section-title"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.6 }
              }
            }}
          >
            How We Build ByUnitWare
          </motion.h2>

          <div className="why-content">
            {[
              { number: "01", title: "Independence First", text: "ByUnitWare is built to remain independent. We don't answer to shareholders obsessed with quarterly profits or investors who want to dictate our vision. Our games are made the way we want to make them, driven by passion rather than boardroom decisions." },
              { number: "02", title: "Self-Publishing Our Way", text: "We publish directly through Steam, PlayStation Network, and other platforms ourselves. This means full creative control over our games, fair pricing for players, and the ability to say no to predatory monetization schemes that publishers would push." },
              { number: "03", title: "Open to the Right Partner", text: "We're not against investment—we're against the wrong investment. If a genuinely aligned investor comes along who respects our vision, supports quality over trends, and doesn't seek ownership or control, we'd listen. But we'll never sell out." },
              { number: "04", title: "Quality Over Growth", text: "We'd rather make three amazing games than thirty mediocre ones. ByUnitWare's goal is to create experiences players remember and cherish, not to become a massive corporation with 500 employees shipping games every quarter." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="why-item"
                custom={index}
                variants={whyItemVariants}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <span className="why-number">{item.number}</span>
                <div className="why-text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="cta-content">
            <motion.h2 
              className="cta-title"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              Explore My Journey
            </motion.h2>

            <motion.p 
              className="cta-text"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 }
                }
              }}
            >
              Discover how ICT shapes game development, my advocacy for the gaming community, 
              and how I plan to make a difference in the industry.
            </motion.p>

            <motion.div 
              className="button-group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 }
                }
              }}
            >
              <motion.a 
                className="button" 
                href="/ict-in-gamedev"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ICT in Game Dev
              </motion.a>
              <motion.a 
                className="button-secondary" 
                href="/advocacy"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                My Advocacy
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="footer-text">
            © 2026 ByUnitWare Studio • Johnny Velasco • Game Development Portfolio
          </p>
        </motion.footer>
      </main>
    </div>
  );
}