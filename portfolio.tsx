import { useEffect, useRef } from 'react';
import '../styles/portfolio.css';

export default function Portfolio() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-bg">
        <div className="portfolio-bg-grid" />
        <div className="portfolio-bg-hex" />
      </div>

      <div className="portfolio-container">
        {/* Hero Section */}
        <section className="hero-section portfolio-section visible" ref={addToRefs}>
          <div className="hero-content">
            <div className="hero-badge" data-testid="hero-badge">
              <span className="hero-badge-dot" />
              <span>Available for Remote Work</span>
            </div>
            
            <h1 className="hero-name" data-testid="hero-name">Saiyadul Alam Saddo</h1>
            <p className="hero-title" data-testid="hero-title">Crypto Community Manager | Telegram Moderator</p>
            <p className="hero-tagline" data-testid="hero-tagline">
              I help crypto projects build safe, active, and trusted communities.
            </p>
            
            <div className="hero-buttons">
              <a 
                href="#contact" 
                className="btn btn-primary" 
                onClick={scrollToContact}
                data-testid="button-hire-me"
              >
                <span>Hire Me</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a 
                href="https://t.me/Xyman15" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                data-testid="button-telegram"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section portfolio-section" ref={addToRefs} id="about">
          <div className="about-content">
            <div className="about-text">
              <span className="section-label">About Me</span>
              <h2 className="section-title" data-testid="section-about">Who I Am</h2>
              <p data-testid="about-text">
                I'm a motivated crypto community manager with hands-on experience moderating 
                Telegram communities, preventing scams, and keeping members engaged. I specialize 
                in maintaining order, protecting users, and supporting project growth through 
                clear communication.
              </p>
              <p>
                I'm seeking a remote, part-time role (3–4 hours daily) where I can contribute 
                to building trustworthy Web3 communities.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <div className="about-stats">
                  <div className="stat-item">
                    <div className="stat-value" data-testid="stat-hours">3-4h</div>
                    <div className="stat-label">Daily Availability</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value" data-testid="stat-remote">100%</div>
                    <div className="stat-label">Remote Ready</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value" data-testid="stat-timezone">24/7</div>
                    <div className="stat-label">Flexible Timezone</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value" data-testid="stat-focus">Web3</div>
                    <div className="stat-label">Industry Focus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section portfolio-section" ref={addToRefs} id="skills">
          <span className="section-label">Expertise</span>
          <h2 className="section-title" data-testid="section-skills">Core Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-card" data-testid="skill-moderation">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="skill-title">Telegram & Discord Moderation</h3>
              <p className="skill-description">
                Expert in managing large crypto communities, enforcing rules, and maintaining healthy discussions.
              </p>
            </div>
            
            <div className="skill-card" data-testid="skill-security">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="skill-title">Spam, Scam & Phishing Prevention</h3>
              <p className="skill-description">
                Proactive identification and removal of malicious actors, fake admins, and phishing attempts.
              </p>
            </div>
            
            <div className="skill-card" data-testid="skill-engagement">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="skill-title">Community Engagement & Growth</h3>
              <p className="skill-description">
                Fostering active participation, welcoming new members, and building community loyalty.
              </p>
            </div>
            
            <div className="skill-card" data-testid="skill-announcements">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="skill-title">Announcement Writing</h3>
              <p className="skill-description">
                Clear, professional communication of project updates, events, and important information.
              </p>
            </div>
            
            <div className="skill-card" data-testid="skill-support">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3 className="skill-title">User Support & Conflict Resolution</h3>
              <p className="skill-description">
                Patient, professional handling of user issues and disputes with a focus on positive outcomes.
              </p>
            </div>
            
            <div className="skill-card" data-testid="skill-bots">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="11" width="18" height="10" rx="2"/>
                  <circle cx="12" cy="5" r="2"/>
                  <path d="M12 7v4"/>
                  <line x1="8" y1="16" x2="8" y2="16"/>
                  <line x1="16" y1="16" x2="16" y2="16"/>
                </svg>
              </div>
              <h3 className="skill-title">Basic Bot Handling & Rules Enforcement</h3>
              <p className="skill-description">
                Configuration and management of moderation bots to automate community protection.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section portfolio-section" ref={addToRefs} id="experience">
          <span className="section-label">Background</span>
          <h2 className="section-title" data-testid="section-experience">Experience</h2>
          
          <div className="experience-list">
            <div className="experience-item" data-testid="exp-moderated">
              <div className="experience-marker" />
              <div className="experience-content">
                <h3>Moderated Active Crypto Telegram Communities</h3>
                <p>Maintained order and fostered engagement in fast-paced cryptocurrency discussion groups.</p>
              </div>
            </div>
            
            <div className="experience-item" data-testid="exp-security">
              <div className="experience-marker" />
              <div className="experience-content">
                <h3>Removed Scam Links, Fake Admins & Bot Attacks</h3>
                <p>Proactively identified and eliminated threats to protect community members from fraud.</p>
              </div>
            </div>
            
            <div className="experience-item" data-testid="exp-guidance">
              <div className="experience-marker" />
              <div className="experience-content">
                <h3>Guided Users with Pinned Messages & Official Links</h3>
                <p>Ensured members had access to accurate information and official project resources.</p>
              </div>
            </div>
            
            <div className="experience-item" data-testid="exp-environment">
              <div className="experience-marker" />
              <div className="experience-content">
                <h3>Maintained Positive, Respectful Chat Environment</h3>
                <p>Created welcoming spaces that encouraged healthy discussion and community growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Availability & Languages */}
        <section className="availability-section portfolio-section" ref={addToRefs} id="availability">
          <span className="section-label">Details</span>
          <h2 className="section-title" data-testid="section-availability">Availability & Languages</h2>
          
          <div className="availability-grid">
            <div className="availability-card" data-testid="card-availability">
              <h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Availability
              </h3>
              <ul>
                <li>
                  <span>Daily Hours</span>
                  <span>3–4 hours</span>
                </li>
                <li>
                  <span>Schedule</span>
                  <span>Part-time</span>
                </li>
                <li>
                  <span>Time Zones</span>
                  <span>Flexible / Global</span>
                </li>
                <li>
                  <span>Work Style</span>
                  <span>100% Remote</span>
                </li>
              </ul>
            </div>
            
            <div className="availability-card" data-testid="card-languages">
              <h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Languages
              </h3>
              <ul>
                <li>
                  <span>Bangla</span>
                  <span>Native</span>
                </li>
                <li>
                  <span>English</span>
                  <span>Basic to Intermediate</span>
                </li>
                <li>
                  <span>Hindi</span>
                  <span>Basic</span>
                </li>
                <li>
                  <span>Urdu</span>
                  <span>Basic</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section portfolio-section" ref={addToRefs} id="contact">
          <span className="section-label">Get in Touch</span>
          <h2 className="contact-cta" data-testid="contact-cta">Let's secure and grow your community.</h2>
          <p className="contact-subtitle">Ready to build something great together? Reach out through any channel.</p>
          
          <div className="contact-links">
            <a 
              href="mailto:xysaddo@gmail.com" 
              className="contact-link"
              data-testid="link-email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
              xysaddo@gmail.com
            </a>
            
            <a 
              href="https://t.me/Xyman15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
              data-testid="link-telegram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              @Xyman15
            </a>
            
            <a 
              href="https://twitter.com/SaddoXY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
              data-testid="link-twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              @SaddoXY
            </a>
          </div>
        </section>

        <footer className="portfolio-footer">
          <p>© 2026 Saiyadul Alam Saddo. Open to opportunities.</p>
        </footer>
      </div>
    </div>
  );
}
