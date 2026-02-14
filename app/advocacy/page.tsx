import styles from './advocacy.module.scss';

export default function Advocacy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroTag}>My Advocacy</div>
          <h1 className={styles.title}>
            Quality-Driven Singleplayer & Co-op Gaming
          </h1>
          <p className={styles.heroSubtitle}>
            Building games with passion and hard work, creating meaningful experiences that bring players together
          </p>
          <div className={styles.hashtag}>#PlayWithPurpose #CoopNotCompete</div>
        </div>

        {/* The Problem */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>⚠️</span>
            The Problem: Quality Lost in the Noise
          </h2>
          <div className={styles.problemContent}>
            <p className={styles.text}>
              The modern gaming industry faces a crisis of identity. Major publishers prioritize trends over 
              substance, political messaging over gameplay, and monetization over player experience. Meanwhile, 
              competitive gaming culture breeds toxicity, elitism, and stress rather than fun and friendship.
            </p>
            <p className={styles.text}>
              In the Philippines specifically, this creates unique challenges:
            </p>
            <div className={styles.challengesList}>
              <div className={styles.challenge}>
                <div className={styles.challengeNumber}>01</div>
                <div className={styles.challengeContent}>
                  <h3>Limited Access to Quality Gaming</h3>
                  <p>
                    Filipino gamers often default to free-to-play competitive games (Mobile Legends, Valorant) 
                    not by choice, but because AAA story-driven games are prohibitively expensive. This creates 
                    a culture dominated by competitive toxicity rather than cooperative enjoyment.
                  </p>
                </div>
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeNumber}>02</div>
                <div className={styles.challengeContent}>
                  <h3>Lack of Filipino Representation</h3>
                  <p>
                    Filipino indie developers struggle to compete against Western and Asian giants. Local 
                    stories, perspectives, and creative visions get drowned out by mainstream trends, leaving 
                    Filipino gamers without games that reflect their experiences.
                  </p>
                </div>
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeNumber}>03</div>
                <div className={styles.challengeContent}>
                  <h3>Gaming Seen as Competitive Only</h3>
                  <p>
                    In Philippine gaming culture, success is often measured by rank, K/D ratio, or esports 
                    performance. The value of story-driven singleplayer games and cooperative experiences is 
                    underappreciated, limiting what gaming can be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philippine Statistics */}
        <section className={styles.statsSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>📊</span>
            Gaming in the Philippines: By the Numbers
          </h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>43.5M</div>
              <div className={styles.statLabel}>Filipino Gamers (2024)</div>
              <p className={styles.statDescription}>
                Nearly half of the Philippine population plays video games, making it one of the largest 
                gaming markets in Southeast Asia.
              </p>
              <div className={styles.source}>Source: Newzoo Global Games Market Report 2024</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Mobile Gaming Dominance</div>
              <p className={styles.statDescription}>
                The vast majority of Filipino gamers play on mobile devices due to affordability and 
                accessibility, limiting exposure to quality PC and console experiences.
              </p>
              <div className={styles.source}>Source: DataReportal Philippines Digital 2024</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>₱3,500</div>
              <div className={styles.statLabel}>Average AAA Game Price</div>
              <p className={styles.statDescription}>
                A single AAA game costs roughly 10% of the monthly minimum wage in Metro Manila, making 
                quality story-driven games inaccessible to many Filipino gamers.
              </p>
              <div className={styles.source}>Source: PlayStation Store PH & Steam Regional Pricing</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>73%</div>
              <div className={styles.statLabel}>Internet Cafe Usage</div>
              <p className={styles.statDescription}>
                Most Filipino gamers access PC gaming through internet cafes, creating opportunities for 
                LAN-based co-op gaming but limiting access to lengthy singleplayer campaigns.
              </p>
              <div className={styles.source}>Source: Philippine Statistics Authority 2023</div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>💡</span>
            The Solution: Quality-First Game Development
          </h2>
          <p className={styles.text}>
            At ByUnitWare, our approach is simple: create games built with passion, not trends. We focus on 
            what makes gaming special—immersive stories, meaningful cooperation, and pure fun.
          </p>
          
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🎮</div>
              <h3>Story-Driven Experiences</h3>
              <p>
                Create singleplayer campaigns with the depth and quality of God of War or The Last of Us. 
                Filipino gamers deserve games that move them emotionally and stay with them long after 
                the credits roll.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🤝</div>
              <h3>Co-op Over Competition</h3>
              <p>
                Design cooperative experiences like It Takes Two, Phasmophobia, and Split Fiction where 
                players work together, not against each other. Replace toxicity with teamwork and friendship.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>💰</div>
              <h3>Accessible Pricing</h3>
              <p>
                Price games fairly for the Philippine market while maintaining quality. Use regional pricing 
                on Steam and offer LAN multiplayer options for internet cafe culture.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🇵🇭</div>
              <h3>Filipino Representation</h3>
              <p>
                Showcase Filipino indie developers and create games that reflect local stories and values. 
                Build a Philippine game development community focused on quality over quantity.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🎯</div>
              <h3>Passion Over Trends</h3>
              <p>
                Reject corporate mandates and trend-chasing. Make games we genuinely want to play, with 
                mechanics driven by fun rather than monetization or external agendas.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🚫</div>
              <h3>No Predatory Monetization</h3>
              <p>
                Refuse to implement microtransactions, loot boxes, pay-to-win mechanics, or aggressive 
                cosmetic stores. Sell complete games for fair prices. Players deserve full experiences, 
                not endless monetization schemes.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🛠️</div>
              <h3>Community-Driven Development</h3>
              <p>
                Use Discord and social media to gather genuine player feedback. Create games players actually 
                want, not what publishers think will sell.
              </p>
            </div>
          </div>
        </section>

        {/* ICT-Based Implementation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>⚙️</span>
            ICT-Based Solutions for Change
          </h2>
          <div className={styles.ictSolutions}>
            <div className={styles.ictItem}>
              <h3>1. Digital Distribution Platforms</h3>
              <p>
                Leverage Steam&apos;s regional pricing and PlayStation Network to make quality games affordable 
                for Filipino gamers. Use platforms that support indie developers without massive upfront costs.
              </p>
            </div>

            <div className={styles.ictItem}>
              <h3>2. P2P & LAN Networking</h3>
              <p>
                Implement peer-to-peer networking and LAN multiplayer to support Philippine internet cafe 
                culture. Enable local co-op gaming without requiring expensive online infrastructure.
              </p>
            </div>

            <div className={styles.ictItem}>
              <h3>3. Community Platforms</h3>
              <p>
                Build Discord communities where Filipino gamers can connect, share experiences, and provide 
                feedback. Use social media (Reddit, YouTube, Twitter/X) to showcase development progress and 
                build grassroots support.
              </p>
            </div>

            <div className={styles.ictItem}>
              <h3>4. Streaming & Content Creation</h3>
              <p>
                Partner with Filipino content creators and streamers to showcase cooperative gameplay. 
                Co-op games naturally create entertaining moments for YouTube and Twitch audiences.
              </p>
            </div>

            <div className={styles.ictItem}>
              <h3>5. Open Development & Transparency</h3>
              <p>
                Share development updates through DevLogs on YouTube and development blogs. Let players see 
                the passion and hard work that goes into creating quality games, building trust and loyalty.
              </p>
            </div>
          </div>
        </section>

        {/* Building ByUnitWare Independently */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🚀</span>
            How We Build ByUnitWare: Independence & Self-Publishing
          </h2>
          <p className={styles.text}>
            At the core of our advocacy is how we operate as a studio. We believe that indie developers 
            must have the freedom to create without corporate pressure or investor interference.
          </p>

          <div className={styles.independenceGrid}>
            <div className={styles.independenceCard}>
              <h3>🏛️ Independence First</h3>
              <p>
                ByUnitWare remains independent. We don&apos;t answer to shareholders obsessed with quarterly 
                earnings or investors who want to dictate creative decisions. Our games are made the way 
                we want—driven by vision, passion, and player respect, not profit margins.
              </p>
            </div>

            <div className={styles.independenceCard}>
              <h3>📦 Self-Publishing</h3>
              <p>
                We publish directly through Steam, PlayStation Network, and other platforms ourselves. 
                This gives us full creative control over pricing, distribution, and game content. We can 
                refuse predatory monetization schemes and maintain our values without a publisher forcing 
                their agenda.
              </p>
            </div>

            <div className={styles.independenceCard}>
              <h3>💰 Open to Aligned Partners</h3>
              <p>
                We&apos;re not against investment—we&apos;re against the <em>wrong</em> investment. If an investor 
                comes along who genuinely aligns with our vision, respects creative freedom, and doesn&apos;t seek 
                ownership or control, we&apos;d listen. But we won&apos;t compromise our core values for funding.
              </p>
            </div>

            <div className={styles.independenceCard}>
              <h3>⚖️ Vision Over Scale</h3>
              <p>
                We&apos;d rather make three amazing games than thirty mediocre ones. Growth for growth&apos;s sake 
                destroys studios. Our goal is to create unforgettable experiences that players remember for 
                years, not to become a massive corporation shipping content endlessly.
              </p>
            </div>

            <div className={styles.independenceCard}>
              <h3>🎮 Full Creative Authority</h3>
              <p>
                Every design decision, every line of dialogue, every mechanic—these come from us. We make 
                games we genuinely want to play. No focus groups ruining art. No producers forcing trends. 
                No executives killing creative ideas to fit predicted market trends.
              </p>
            </div>

            <div className={styles.independenceCard}>
              <h3>🇵🇭 Supporting Local Talent</h3>
              <p>
                By staying independent, we can hire and support Filipino developers on our own terms. 
                We&apos;re building a studio that values people, not just extracting maximum productivity 
                for shareholder returns.
              </p>
            </div>
          </div>

          <div className={styles.philosophyBlocks}>
            <div className={styles.philosophyBlock}>
              <h3>Why This Matters for Game Development</h3>
              <p>
                When studios have investors or publishers calling the shots, creative freedom dies. 
                We&apos;ve all seen it: beloved franchises ruined by corporate mandates, indie darlings 
                that sold out, and visionary developers leaving their own studios because they lost control 
                of their creations.
              </p>
              <p>
                Independence isn&apos;t about being anti-business. It&apos;s about maintaining the creative 
                integrity that makes games special. It&apos;s about saying no to predatory practices. It&apos;s 
                about building something authentic that players can trust.
              </p>
            </div>

            <div className={styles.philosophyBlock}>
              <h3>What This Means for Players</h3>
              <p>
                When you buy a ByUnitWare game, you&apos;re getting:
              </p>
              <ul>
                <li>✓ A complete game, not a platform for endless monetization</li>
                <li>✓ Genuine design driven by fun, not by engagement metrics</li>
                <li>✓ No unfair mechanics designed to push you toward spending</li>
                <li>✓ Fair pricing that respects your wallet</li>
                <li>✓ Creative vision, not trend-chasing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Join the Movement</h2>
            <p className={styles.ctaText}>
              Quality gaming built with passion, not trends. Story-driven experiences and cooperative gameplay 
              that bring friends together. Filipino indie developers creating games players actually want.
            </p>
            <p className={styles.ctaText}>
              This is what ByUnitWare stands for. This is the future of gaming.
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.ctaHashtags}>
                <span className={styles.hashtagItem}>#PlayWithPurpose</span>
                <span className={styles.hashtagItem}>#CoopNotCompete</span>
                <span className={styles.hashtagItem}>#QualityOverTrends</span>
                <span className={styles.hashtagItem}>#IndieGameDevPH</span>
              </div>
              <p className={styles.ctaFinal}>
                Support indie developers. Play quality games. Build communities, not toxicity.
              </p>
            </div>
          </div>
        </section>

        {/* What You Can Do */}
        <section className={styles.actionSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>✊</span>
            How You Can Help
          </h2>
          <div className={styles.actionGrid}>
            <div className={styles.actionCard}>
              <h3>Support Filipino Indie Developers</h3>
              <p>
                Buy games from local studios. Wishlist indie titles on Steam. Share Filipino-made games 
                with your gaming communities.
              </p>
            </div>

            <div className={styles.actionCard}>
              <h3>Choose Co-op Over Competitive</h3>
              <p>
                Play cooperative games with friends. Build gaming communities focused on fun and teamwork 
                rather than ranks and toxicity.
              </p>
            </div>

            <div className={styles.actionCard}>
              <h3>Demand Quality, Not Trends</h3>
              <p>
                Vote with your wallet. Support games built with passion and hard work. Reject cash-grabs 
                and trend-chasing publishers.
              </p>
            </div>

            <div className={styles.actionCard}>
              <h3>Reject Predatory Monetization</h3>
              <p>
                Refuse games with pay-to-win mechanics, aggressive microtransactions, loot boxes, and 
                cosmetic-focused monetization. Support studios that sell complete games, not endless DLC 
                and battle passes.
              </p>
            </div>

            <div className={styles.actionCard}>
              <h3>Spread the Word</h3>
              <p>
                Share this message. Use #PlayWithPurpose when posting about quality gaming. Help build 
                a culture that values substance over hype.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}