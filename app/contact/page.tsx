import styles from './contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Let&apos;s Connect</h1>
          <p className={styles.subtitle}>
            Reach out for collaborations, partnerships, or just to talk about co-op gaming
          </p>
        </div>

        {/* Main Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactGrid}>
            {/* Email */}
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📧</div>
              <h3>Email</h3>
              <p className={styles.contactInfo}>
                <a href="mailto:johnny.velasco@byunitware.com">
                  johnny.velasco@byunitware.com
                </a>
              </p>
              <p className={styles.contactDescription}>
                For business inquiries, collaborations, and general questions
              </p>
              <div className={styles.responseTime}>
                <strong>Response Time:</strong> 24-48 hours
              </div>
            </div>

            {/* Studio Email */}
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>🏢</div>
              <h3>Studio Inquiries</h3>
              <p className={styles.contactInfo}>
                <a href="mailto:studio@byunitware.com">
                  studio@byunitware.com
                </a>
              </p>
              <p className={styles.contactDescription}>
                For publisher partnerships, media coverage, and official studio communications
              </p>
              <div className={styles.responseTime}>
                <strong>Response Time:</strong> 2-3 business days
              </div>
            </div>

            {/* Support */}
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>🛠️</div>
              <h3>Technical Support</h3>
              <p className={styles.contactInfo}>
                <a href="mailto:support@byunitware.com">
                  support@byunitware.com
                </a>
              </p>
              <p className={styles.contactDescription}>
                For bug reports, technical issues, and game-related questions
              </p>
              <div className={styles.responseTime}>
                <strong>Response Time:</strong> 48-72 hours
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className={styles.socialSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🌐</span>
            Professional Social Media
          </h2>
          
          <div className={styles.socialGrid}>
            <a href="https://twitter.com/byunitware" className={styles.socialCard} target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>𝕏</div>
              <div className={styles.socialInfo}>
                <h3>Twitter/X</h3>
                <p>@ByUnitWare</p>
                <span className={styles.socialDesc}>Development updates, community engagement, industry news</span>
              </div>
            </a>

            <a href="https://discord.gg/byunitware" className={styles.socialCard} target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>💬</div>
              <div className={styles.socialInfo}>
                <h3>Discord</h3>
                <p>ByUnitWare Community</p>
                <span className={styles.socialDesc}>Join our community, beta testing, direct communication</span>
              </div>
            </a>

            <a href="https://www.youtube.com/@byunitware" className={styles.socialCard} target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>📺</div>
              <div className={styles.socialInfo}>
                <h3>YouTube</h3>
                <p>@ByUnitWare</p>
                <span className={styles.socialDesc}>DevLogs, trailers, gameplay showcases, behind-the-scenes</span>
              </div>
            </a>

            <a href="https://www.reddit.com/r/byunitware" className={styles.socialCard} target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>🤖</div>
              <div className={styles.socialInfo}>
                <h3>Reddit</h3>
                <p>r/ByUnitWare</p>
                <span className={styles.socialDesc}>Community discussions, AMAs, technical Q&A</span>
              </div>
            </a>

            <a href="https://store.steampowered.com/dev/byunitware" className={styles.socialCard} target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>🎮</div>
              <div className={styles.socialInfo}>
                <h3>Steam</h3>
                <p>ByUnitWare Developer Page</p>
                <span className={styles.socialDesc}>Game releases, community discussions, patch notes</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/company/byunitware" className={styles.socialCard} target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>💼</div>
              <div className={styles.socialInfo}>
                <h3>LinkedIn</h3>
                <p>ByUnitWare Studio</p>
                <span className={styles.socialDesc}>Professional networking, job postings, industry connections</span>
              </div>
            </a>
          </div>
        </section>

        {/* Communication Guidelines */}
        <section className={styles.guidelinesSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>📋</span>
            Communication Guidelines
          </h2>
          
          <div className={styles.guidelinesList}>
            <div className={styles.guideline}>
              <div className={styles.guidelineIcon}>✅</div>
              <div className={styles.guidelineContent}>
                <h3>Professional & Respectful Communication</h3>
                <p>
                  All communications should be professional, respectful, and constructive. We value thoughtful 
                  feedback and genuine questions. Personal attacks, harassment, or toxic behavior will not be tolerated.
                </p>
              </div>
            </div>

            <div className={styles.guideline}>
              <div className={styles.guidelineIcon}>⏱️</div>
              <div className={styles.guidelineContent}>
                <h3>Response Times</h3>
                <p>
                  We strive to respond to all inquiries within 24-72 hours during business days (Monday-Friday, 
                  9 AM - 6 PM PHT). Complex technical issues or partnership discussions may require additional time.
                </p>
              </div>
            </div>

            <div className={styles.guideline}>
              <div className={styles.guidelineIcon}>🔒</div>
              <div className={styles.guidelineContent}>
                <h3>Privacy & Confidentiality</h3>
                <p>
                  Your contact information and inquiries are kept confidential. We do not share email addresses 
                  or personal data with third parties. Read our full privacy policy on our website.
                </p>
              </div>
            </div>

            <div className={styles.guideline}>
              <div className={styles.guidelineIcon}>💬</div>
              <div className={styles.guidelineContent}>
                <h3>Best Contact Methods</h3>
                <p>
                  <strong>General Questions:</strong> Email or Discord<br/>
                  <strong>Bug Reports:</strong> Support email or Steam Community<br/>
                  <strong>Business Inquiries:</strong> Studio email<br/>
                  <strong>Community Discussion:</strong> Discord or Reddit
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Interests */}
        <section className={styles.collaborationSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>🤝</span>
            Open to Collaboration
          </h2>
          
          <div className={styles.interestsGrid}>
            <div className={styles.interestCard}>
              <h3>Content Creators & Streamers</h3>
              <p>
                Interested in covering our games? We provide early access keys to content creators whose 
                audiences align with co-op gaming. Reach out with your channel stats and content examples.
              </p>
            </div>

            <div className={styles.interestCard}>
              <h3>Fellow Indie Developers</h3>
              <p>
                Looking to collaborate, share resources, or discuss game development? We&apos;re always open to 
                connecting with other Filipino indie devs and international studios.
              </p>
            </div>

            <div className={styles.interestCard}>
              <h3>Artists & Musicians</h3>
              <p>
                Freelance artists, 3D modelers, composers, and voice actors are welcome to reach out with 
                portfolios. We frequently collaborate with talented creatives for game projects.
              </p>
            </div>

            <div className={styles.interestCard}>
              <h3>Publishers & Investors</h3>
              <p>
                Interested in publishing or funding our games? Send partnership proposals to our studio email 
                with details about your organization and what you bring to the table.
              </p>
            </div>

            <div className={styles.interestCard}>
              <h3>Media & Press</h3>
              <p>
                Gaming journalists and media outlets can request review codes, press kits, interviews, or 
                behind-the-scenes access through our studio email.
              </p>
            </div>

            <div className={styles.interestCard}>
              <h3>Community Members</h3>
              <p>
                Want to help with beta testing, provide feedback, or contribute to community moderation? 
                Join our Discord server and introduce yourself—we value active community members!
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className={styles.disclaimerSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.icon}>⚠️</span>
            Important Disclaimer
          </h2>
          
          <div className={styles.disclaimer}>
            <p>
              <strong>Responsible Communication Policy:</strong> All contact information provided is for 
              professional and legitimate purposes only. Misuse of contact information for spam, harassment, 
              or malicious purposes will result in immediate blocking and may be reported to relevant authorities.
            </p>
            <p>
              <strong>No Guarantees:</strong> While we read all messages, we cannot guarantee responses to 
              every inquiry. We prioritize business partnerships, technical support, and constructive community 
              feedback.
            </p>
            <p>
              <strong>Social Media Notes:</strong> The social media accounts listed are official ByUnitWare 
              channels. Be aware of impersonation accounts. We will never ask for personal information, 
              passwords, or payment outside official platforms (Steam, PayPal, etc.).
            </p>
            <p>
              <strong>Respectful Discourse:</strong> We maintain professional boundaries in all communications. 
              Political debates, controversial topics unrelated to gaming, or personal attacks are not appropriate 
              for business channels.
            </p>
          </div>
        </section>

        {/* Footer CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Connect?</h2>
            <p>
              Whether you&apos;re a gamer excited about co-op experiences, a fellow developer, or a potential 
              partner, we&apos;d love to hear from you. Let&apos;s build something great together.
            </p>
            <div className={styles.ctaButtons}>
              <a href="mailto:johnny.velasco@byunitware.com" className={styles.primaryButton}>
                Send an Email
              </a>
              <a href="https://discord.gg/byunitware" className={styles.secondaryButton} target="_blank" rel="noopener noreferrer">
                Join Our Discord
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}