export default function Home() {
  return (
    <div className="page-wrapper">
      <main className="main">
        {/* Navigation placeholder - we'll add this later */}
        <nav className="nav">
          <div className="nav-brand">
            <h2 className="brand-name">ByUnitWare</h2>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-tag">Game Developer • Studio Founder</div>
            <h1 className="hero-title">
              Hi, I&apos;m <span className="highlight">Johnny Velasco</span>
            </h1>
            <p className="hero-subtitle">
              Founder of <span className="brand-highlight">ByUnitWare</span> — an independent game studio 
              crafting immersive singleplayer and co-op experiences for PC and PlayStation.
            </p>
            <div className="hero-mission">
              <div className="mission-label">Mission</div>
              <p className="mission-text">
                &quot;Building worlds that bring players together, one line of code at a time.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <h2 className="section-title">Who I Want to Be</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="card-icon">🎮</div>
              <h3 className="card-title">Game Developer</h3>
              <p className="card-text">
                Creating interactive experiences that combine storytelling, art, and technology. 
                My focus is on cooperative gameplay that strengthens bonds between players.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🏢</div>
              <h3 className="card-title">Studio Founder</h3>
              <p className="card-text">
                Building ByUnitWare from the ground up, focusing on quality singleplayer and 
                co-op experiences for PC (Steam) and PlayStation platforms.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🤝</div>
              <h3 className="card-title">Community Builder</h3>
              <p className="card-text">
                Fostering positive gaming communities through cooperative gameplay. No PVP toxicity — 
                just friends working together through LAN and P2P connections.
              </p>
            </div>
          </div>
        </section>

        {/* Why Game Development */}
        <section className="why-section">
          <h2 className="section-title">Why Game Development?</h2>
          <div className="why-content">
            <div className="why-item">
              <span className="why-number">01</span>
              <div className="why-text">
                <h3>Passion for Interactive Storytelling</h3>
                <p>Games are unique — they let players become part of the story, making choices 
                that matter and creating memories with friends.</p>
              </div>
            </div>

            <div className="why-item">
              <span className="why-number">02</span>
              <div className="why-text">
                <h3>Merging Art, Code, and Design</h3>
                <p>Game development sits at the intersection of creativity and technology. 
                It&apos;s problem-solving meets artistic expression.</p>
              </div>
            </div>

            <div className="why-item">
              <span className="why-number">03</span>
              <div className="why-text">
                <h3>Building Meaningful Connections</h3>
                <p>Co-op games bring people together. Whether it&apos;s friends on a couch playing 
                via LAN or teammates coordinating online, games create lasting bonds.</p>
              </div>
            </div>

            <div className="why-item">
              <span className="why-number">04</span>
              <div className="why-text">
                <h3>Filipino Game Dev Representation</h3>
                <p>The Philippine game development industry is growing, and I want to be part 
                of putting Filipino indie developers on the global map.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Philosophy Section */}
        <section className="why-section">
          <h2 className="section-title">How We Build ByUnitWare</h2>
          <div className="why-content">
            <div className="why-item">
              <span className="why-number">01</span>
              <div className="why-text">
                <h3>Independence First</h3>
                <p>ByUnitWare is built to remain independent. We don&apos;t answer to shareholders obsessed 
                with quarterly profits or investors who want to dictate our vision. Our games are made 
                the way we want to make them, driven by passion rather than boardroom decisions.</p>
              </div>
            </div>

            <div className="why-item">
              <span className="why-number">02</span>
              <div className="why-text">
                <h3>Self-Publishing Our Way</h3>
                <p>We publish directly through Steam, PlayStation Network, and other platforms ourselves. 
                This means full creative control over our games, fair pricing for players, and the ability 
                to say no to predatory monetization schemes that publishers would push.</p>
              </div>
            </div>

            <div className="why-item">
              <span className="why-number">03</span>
              <div className="why-text">
                <h3>Open to the Right Partner</h3>
                <p>We&apos;re not against investment—we&apos;re against the <em>wrong</em> investment. If a genuinely 
                aligned investor comes along who respects our vision, supports quality over trends, and 
                doesn&apos;t seek ownership or control, we&apos;d listen. But we&apos;ll never sell out.</p>
              </div>
            </div>

            <div className="why-item">
              <span className="why-number">04</span>
              <div className="why-text">
                <h3>Quality Over Growth</h3>
                <p>We&apos;d rather make three amazing games than thirty mediocre ones. ByUnitWare&apos;s goal is 
                to create experiences players remember and cherish, not to become a massive corporation 
                with 500 employees shipping games every quarter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Explore My Journey</h2>
            <p className="cta-text">
              Discover how ICT shapes game development, my advocacy for the gaming community, 
              and how I plan to make a difference in the industry.
            </p>
            <div className="button-group">
              <a className="button" href="/ict-in-gamedev">
                ICT in Game Dev
              </a>
              <a className="button-secondary" href="/advocacy">
                My Advocacy
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">
            © 2026 ByUnitWare Studio • Johnny Velasco • Game Development Portfolio
          </p>
        </footer>
      </main>
    </div>
  );
}