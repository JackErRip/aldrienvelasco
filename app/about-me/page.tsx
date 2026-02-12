import styles from './about-me.module.scss';

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <img src="/meme picture of johnny sins.webp" alt="Profile Picture" className={styles.profilePicture} />
        <section className={styles.section}>
          <h2>Who I Am?</h2>
          <p className={styles.description}>
            I&apos;m Johnny Velasco a passionate <strong>GAME</strong> and <strong>WEB</strong> developer with a love for creating beautiful and functional web experiences.
            With expertise in modern web technologies, I strive to build applications that make a difference.
          </p>
        </section>

        <section className={styles.section}>
          <h2>My Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <h3>Frontend</h3>
              <p>React, Next.js, TypeScript, Sass, HTML/CSS</p>
            </div>
            <div className={styles.skill}>
              <h3>Backend</h3>
              <p>Node.js, Express, Database Design</p>
            </div>
            <div className={styles.skill}>
              <h3>Tools</h3>
              <p>Git, VS Code, Figma, Web Performance</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>My Experience</h2>
          <p>
            I&apos;ve worked on various projects ranging from small websites to complex web applications.
            Each project has taught me valuable lessons in design, development, and user experience.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Let&apos;s Connect</h2>
          <p>
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me through
            the contact page or on social media.
          </p>
        </section>
      </div>
    </div>
  );
}
