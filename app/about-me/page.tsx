import Image from 'next/image';
import styles from './about-me.module.scss';

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/meme picture of johnny sins.webp"
              alt="Johnny Velasco"
              className={styles.profilePicture}
              width={240}
              height={240}
            />
            <div className={styles.statusBadge}>
              <span className={styles.statusDot}></span>
              Available for Projects
            </div>
          </div>
          <div className={styles.profileInfo}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.subtitle}>Game Developer • Web Developer • Filmmaker • Creative</p>
          </div>
        </div>

        {/* Who I Am Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>👤</span>
            Who I Am?
          </h2>
          <p className={styles.description}>
            I&apos;m <span className={styles.highlight}>Johnny Velasco</span>, a passionate <strong>GAME</strong> and <strong>WEB</strong> developer 
            with a love for creating beautiful and functional experiences. As the founder of ByUnitWare, I focus on developing 
            immersive co-op gaming experiences while mastering modern web technologies. Beyond code, I&apos;m also a <strong>creative multimedia 
            artist</strong> — from video editing in DaVinci Resolve and Premiere Pro to photography, film direction, and screenwriting. 
            I bring stories to life across multiple mediums.
          </p>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>⚡</span>
            My Technical Skills
          </h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>💻</div>
              <h3 className={styles.skillTitle}>Frontend Development</h3>
              <div className={styles.skillTags}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Next.js</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>Sass</span>
                <span className={styles.tag}>HTML/CSS</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🔧</div>
              <h3 className={styles.skillTitle}>Backend Development</h3>
              <div className={styles.skillTags}>
                <span className={styles.tag}>Node.js</span>
                <span className={styles.tag}>Express</span>
                <span className={styles.tag}>Database Design</span>
                <span className={styles.tag}>REST APIs</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🎮</div>
              <h3 className={styles.skillTitle}>Game Development</h3>
              <div className={styles.skillTags}>
                <span className={styles.tag}>Unity</span>
                <span className={styles.tag}>Unreal Engine</span>
                <span className={styles.tag}>P2P Networking</span>
                <span className={styles.tag}>Game Design</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🛠️</div>
              <h3 className={styles.skillTitle}>Tools & Workflow</h3>
              <div className={styles.skillTags}>
                <span className={styles.tag}>Git</span>
                <span className={styles.tag}>VS Code</span>
                <span className={styles.tag}>Figma</span>
                <span className={styles.tag}>Performance Optimization</span>
              </div>
            </div>

            <div className={styles.skillCard}>
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
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🎥</div>
              <h3 className={styles.skillTitle}>Film Production</h3>
              <div className={styles.skillTags}>
                <span className={styles.tag}>Directing</span>
                <span className={styles.tag}>Video Editing</span>
                <span className={styles.tag}>Writing</span>
                <span className={styles.tag}>Producing</span>
                <span className={styles.tag}>Post-Production</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>🚀</span>
            My Experience
          </h2>
          <div className={styles.experienceContent}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>ByUnitWare Studio</h3>
                <span className={styles.experienceBadge}>Founder & Lead Developer</span>
              </div>
              <p>
                Building an independent game studio focused on singleplayer and co-op experiences for PC and PlayStation. 
                Leading development, design, and technical implementation of game projects.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>Web Development Projects</h3>
                <span className={styles.experienceBadge}>Full-Stack Developer</span>
              </div>
              <p>
                Worked on various projects ranging from small websites to complex web applications. 
                Each project has taught me valuable lessons in design, development, and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
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
            <a href="/contact" className={styles.ctaButton}>
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}