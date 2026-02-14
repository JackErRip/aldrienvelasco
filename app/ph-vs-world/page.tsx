import styles from './ph-vs-world.module.scss';

export default function PHvsWorld() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Game Development: Philippines vs First-World Countries</h1>
          <p className={styles.subtitle}>
            How ICT infrastructure and digital access shape game development opportunities across different economies
          </p>
        </div>

        {/* Introduction */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🌏</span>
            Two Different Digital Worlds
          </h2>
          <p className={styles.text}>
            Creating games in the Philippines versus developed countries like the United States, United Kingdom, 
            or Japan presents fundamentally different challenges and opportunities. Infrastructure, market size, 
            cultural context, and access to resources vary dramatically—shaping what&apos;s possible for indie studios 
            like ByUnitWare.
          </p>
        </section>

        {/* Comparison Table */}
        <section className={styles.comparisonSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>⚖️</span>
            Side-by-Side Comparison
          </h2>
          
          <div className={styles.comparisonGrid}>
            {/* Internet Infrastructure */}
            <div className={styles.comparisonCard}>
              <h3 className={styles.comparisonTitle}>Internet Infrastructure</h3>
              <div className={styles.comparison}>
                <div className={styles.phSide}>
                  <div className={styles.flag}>🇵🇭 Philippines</div>
                  <div className={styles.stat}>Average: 38 Mbps</div>
                  <p>
                    Unreliable connections, frequent outages, expensive data caps. Upload speeds especially poor 
                    (5-10 Mbps), making cloud collaboration and large file uploads challenging.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Difficult to work with remote teams, upload builds to Steam, or use 
                    cloud-based development tools efficiently.
                  </div>
                </div>
                <div className={styles.worldSide}>
                  <div className={styles.flag}>🌐 US/UK/Japan</div>
                  <div className={styles.stat}>Average: 200-500 Mbps</div>
                  <p>
                    Fast, stable fiber connections. Symmetric upload/download speeds. Affordable unlimited data. 
                    Cloud services work seamlessly.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Remote collaboration is effortless. Cloud development tools, version 
                    control, and asset streaming work perfectly.
                  </div>
                </div>
              </div>
            </div>

            {/* Internet Penetration */}
            <div className={styles.comparisonCard}>
              <h3 className={styles.comparisonTitle}>Internet Penetration & Access</h3>
              <div className={styles.comparison}>
                <div className={styles.phSide}>
                  <div className={styles.flag}>🇵🇭 Philippines</div>
                  <div className={styles.stat}>67% Internet Access</div>
                  <p>
                    Many rely on mobile data or internet cafes. Home broadband is expensive relative to income. 
                    Rural areas lack access entirely.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Smaller addressable market for online games. LAN and offline modes 
                    are crucial for Philippine audiences.
                  </div>
                </div>
                <div className={styles.worldSide}>
                  <div className={styles.flag}>🌐 US/UK/Japan</div>
                  <div className={styles.stat}>90-95% Internet Access</div>
                  <p>
                    Nearly universal home broadband. High-speed connections are standard. Internet is considered 
                    essential infrastructure.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Can design games assuming players have stable internet. Online 
                    multiplayer is the default expectation.
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware & Development Tools */}
            <div className={styles.comparisonCard}>
              <h3 className={styles.comparisonTitle}>Development Hardware Access</h3>
              <div className={styles.comparison}>
                <div className={styles.phSide}>
                  <div className={styles.flag}>🇵🇭 Philippines</div>
                  <div className={styles.stat}>₱80,000-150,000 Dev PC</div>
                  <p>
                    High-end hardware costs 2-3x relative to local wages. Import taxes increase prices. Used 
                    hardware market helps but limits performance.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Developers work on mid-range PCs. Longer iteration times. Can&apos;t 
                    easily test high-end graphics or demanding features.
                  </div>
                </div>
                <div className={styles.worldSide}>
                  <div className={styles.flag}>🌐 US/UK/Japan</div>
                  <div className={styles.stat}>$1,500-3,000 Dev PC</div>
                  <p>
                    Powerful development machines are affordable. Easy access to latest GPUs, CPUs, and testing 
                    hardware. Tax deductible for businesses.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Can develop cutting-edge graphics, test on multiple platforms 
                    simultaneously, and iterate quickly.
                  </div>
                </div>
              </div>
            </div>

            {/* Market Size */}
            <div className={styles.comparisonCard}>
              <h3 className={styles.comparisonTitle}>Gaming Market Size</h3>
              <div className={styles.comparison}>
                <div className={styles.phSide}>
                  <div className={styles.flag}>🇵🇭 Philippines</div>
                  <div className={styles.stat}>43.5M Gamers, 95% Mobile</div>
                  <p>
                    Large player base but dominated by mobile gaming. PC/console gamers are minority. Low 
                    purchasing power limits premium game sales.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Must price games lower or risk being priced out of local market. 
                    Regional pricing is essential.
                  </div>
                </div>
                <div className={styles.worldSide}>
                  <div className={styles.flag}>🌐 US/UK/Japan</div>
                  <div className={styles.stat}>200M+ Gamers, Diverse Platforms</div>
                  <p>
                    Massive markets with high purchasing power. PC, console, and mobile all thriving. Players 
                    regularly buy $60-70 games.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Can charge premium prices. Larger potential revenue. More media 
                    coverage and discoverability.
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Training */}
            <div className={styles.comparisonCard}>
              <h3 className={styles.comparisonTitle}>Game Dev Education</h3>
              <div className={styles.comparison}>
                <div className={styles.phSide}>
                  <div className={styles.flag}>🇵🇭 Philippines</div>
                  <div className={styles.stat}>Few Formal Programs</div>
                  <p>
                    Limited game development courses in universities. Mostly self-taught through online 
                    tutorials. No established game dev schools.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Steeper learning curve. Harder to find experienced collaborators. 
                    Must rely on international online communities.
                  </div>
                </div>
                <div className={styles.worldSide}>
                  <div className={styles.flag}>🌐 US/UK/Japan</div>
                  <div className={styles.stat}>Abundant Programs & Mentorship</div>
                  <p>
                    Prestigious game design schools (DigiPen, USC). Industry mentorship programs. Game dev 
                    bootcamps and incubators.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Easier to learn best practices. Network with industry veterans. 
                    Access to internships and job opportunities.
                  </div>
                </div>
              </div>
            </div>

            {/* Funding & Investment */}
            <div className={styles.comparisonCard}>
              <h3 className={styles.comparisonTitle}>Funding Opportunities</h3>
              <div className={styles.comparison}>
                <div className={styles.phSide}>
                  <div className={styles.flag}>🇵🇭 Philippines</div>
                  <div className={styles.stat}>Very Limited Funding</div>
                  <p>
                    Few venture capital firms invest in game studios. Banks don&apos;t understand game dev as 
                    business. Must bootstrap or use personal savings.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Development moves slowly. Hard to scale teams. Must rely on 
                    international crowdfunding or publishers.
                  </div>
                </div>
                <div className={styles.worldSide}>
                  <div className={styles.flag}>🌐 US/UK/Japan</div>
                  <div className={styles.stat}>Abundant VC & Publisher Support</div>
                  <p>
                    Established indie funding ecosystem. Government grants for creative industries. Angels and 
                    VCs understand game economics.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Can secure funding to hire teams, afford marketing, and develop 
                    longer without revenue pressure.
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Literacy */}
            <div className={styles.comparisonCard}>
              <h3 className={styles.comparisonTitle}>Digital Literacy & Skills</h3>
              <div className={styles.comparison}>
                <div className={styles.phSide}>
                  <div className={styles.flag}>🇵🇭 Philippines</div>
                  <div className={styles.stat}>Growing But Uneven</div>
                  <p>
                    Young population is tech-savvy with social media and mobile apps. But formal programming 
                    and technical education is limited outside major cities.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Large pool of potential collaborators, but must train them. 
                    Self-teaching is the primary path.
                  </div>
                </div>
                <div className={styles.worldSide}>
                  <div className={styles.flag}>🌐 US/UK/Japan</div>
                  <div className={styles.stat}>High Technical Proficiency</div>
                  <p>
                    Computer science education in schools. Coding bootcamps widespread. Large pool of 
                    experienced programmers and artists.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Easy to find skilled collaborators. Can hire specialists for 
                    specific roles (shaders, AI, networking).
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Access */}
            <div className={styles.comparisonCard}>
              <h3 className={styles.comparisonTitle}>Platform & Console Access</h3>
              <div className={styles.comparison}>
                <div className={styles.phSide}>
                  <div className={styles.flag}>🇵🇭 Philippines</div>
                  <div className={styles.stat}>PC-Focused Market</div>
                  <p>
                    PlayStation/Xbox consoles are expensive (₱30,000+). Most gaming happens on PC or mobile. 
                    Console dev kits are hard to obtain.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Must prioritize PC development. Console releases require 
                    international partnerships or publishers.
                  </div>
                </div>
                <div className={styles.worldSide}>
                  <div className={styles.flag}>🌐 US/UK/Japan</div>
                  <div className={styles.stat}>Multi-Platform Ecosystem</div>
                  <p>
                    Easy access to dev kits. PlayStation, Xbox, and Nintendo programs support indies. Can 
                    develop for all platforms simultaneously.
                  </p>
                  <div className={styles.impact}>
                    <strong>Impact:</strong> Can launch on PC and consoles simultaneously. Broader market 
                    reach. More revenue opportunities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How ByUnitWare Adapts */}
        <section className={styles.adaptSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>💡</span>
            How ByUnitWare Adapts to Philippine Realities
          </h2>
          
          <div className={styles.strategyList}>
            <div className={styles.strategyItem}>
              <div className={styles.strategyNumber}>01</div>
              <div className={styles.strategyContent}>
                <h3>Global-First, Philippine-Aware Approach</h3>
                <p>
                  Develop for international markets (Steam, PlayStation) where revenue potential is highest, 
                  but implement Philippine-specific features like LAN multiplayer and regional pricing to 
                  serve the local market.
                </p>
              </div>
            </div>

            <div className={styles.strategyItem}>
              <div className={styles.strategyNumber}>02</div>
              <div className={styles.strategyContent}>
                <h3>Optimize for Mid-Range Hardware</h3>
                <p>
                  Design games to run well on mid-tier PCs (GTX 1060-level) without sacrificing visual quality. 
                  This serves both Philippine developers (who work on modest hardware) and broader audiences who 
                  don&apos;t have cutting-edge systems.
                </p>
              </div>
            </div>

            <div className={styles.strategyItem}>
              <div className={styles.strategyNumber}>03</div>
              <div className={styles.strategyContent}>
                <h3>Leverage Online Learning & Communities</h3>
                <p>
                  Compensate for lack of local game dev education by participating in international online 
                  communities (r/gamedev, Discord servers, YouTube tutorials). Learn from global best practices.
                </p>
              </div>
            </div>

            <div className={styles.strategyItem}>
              <div className={styles.strategyNumber}>04</div>
              <div className={styles.strategyContent}>
                <h3>Bootstrap & Reinvest</h3>
                <p>
                  Since Philippine venture capital is scarce, bootstrap by working on smaller projects first, 
                  then reinvest earnings into larger story-driven games. Use crowdfunding (Kickstarter) for 
                  international backing.
                </p>
              </div>
            </div>

            <div className={styles.strategyItem}>
              <div className={styles.strategyNumber}>05</div>
              <div className={styles.strategyContent}>
                <h3>Remote Collaboration Tools</h3>
                <p>
                  Work around internet limitations by using efficient tools (Git LFS for large files, Discord 
                  for communication, cloud storage with selective sync). Schedule uploads during off-peak hours.
                </p>
              </div>
            </div>

            <div className={styles.strategyItem}>
              <div className={styles.strategyNumber}>06</div>
              <div className={styles.strategyContent}>
                <h3>Focus on Co-op Niche</h3>
                <p>
                  Rather than competing in saturated genres, focus on quality co-op experiences where ByUnitWare 
                  can stand out. Niche focus helps compete against larger studios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities & Advantages */}
        <section className={styles.opportunitiesSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>✨</span>
            Philippine Advantages in Game Development
          </h2>
          
          <p className={styles.text}>
            Despite challenges, developing games in the Philippines offers unique advantages:
          </p>

          <div className={styles.advantagesGrid}>
            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>💰</div>
              <h3>Lower Development Costs</h3>
              <p>
                Salaries and living costs are significantly lower in the Philippines. This means indie studios 
                can sustain development longer on smaller budgets, giving more runway to polish games.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>🌏</div>
              <h3>Unique Cultural Perspective</h3>
              <p>
                Filipino developers bring different storytelling perspectives and cultural contexts that can 
                differentiate games in the global market. Fresh voices stand out.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>🎯</div>
              <h3>Hungry, Passionate Talent</h3>
              <p>
                Filipino game developers are motivated by passion rather than just paychecks. Limited industry 
                jobs means those who pursue game dev genuinely love it.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>🌐</div>
              <h3>English Proficiency</h3>
              <p>
                The Philippines is one of the largest English-speaking countries in Asia. This enables Filipino 
                developers to market games globally and collaborate with international teams seamlessly.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>⏰</div>
              <h3>Time Zone Advantage</h3>
              <p>
                Philippine time zone bridges Western and Eastern markets. Can support players in both Asia and 
                the Americas with reasonable working hours.
              </p>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>🚀</div>
              <h3>Underdog Motivation</h3>
              <p>
                Being the underdog fuels determination. Filipino indie devs have something to prove, driving 
                them to work harder and create standout games.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={styles.conclusionSection}>
          <div className={styles.conclusionContent}>
            <h2>Different Challenges, Same Goal: Great Games</h2>
            <p>
              Game development in the Philippines requires creativity, resourcefulness, and determination. While 
              infrastructure and funding lag behind first-world countries, passion and talent remain constant. 
              ByUnitWare embraces these challenges as opportunities to innovate, building quality co-op experiences 
              that compete globally despite local limitations.
            </p>
            <p>
              The digital divide is real, but it&apos;s narrowing. With smart strategies, Filipino indie studios can 
              not only survive but thrive—creating games that reflect our unique perspectives and resonate with 
              players worldwide.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}