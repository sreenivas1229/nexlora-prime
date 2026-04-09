// src/pages/About.jsx
import { Link } from 'react-router-dom';
import './About.css';

const VALUES = [
  { icon: '🎯', title: 'Results First', desc: 'Every decision we make is driven by measurable outcomes for your business.' },
  { icon: '🤝', title: 'Prime Relationships', desc: 'We build long-term partnerships, not one-time transactions.' },
  { icon: '⚡', title: 'Speed & Quality', desc: 'We deliver fast without compromising on quality — every single time.' },
  { icon: '🔒', title: 'Full Transparency', desc: 'Clear communication, honest pricing, no hidden surprises.' },
  { icon: '🧠', title: 'Deep Expertise', desc: 'Our team brings years of experience across tech, consulting and outsourcing.' },
  { icon: '🌍', title: 'Global Mindset', desc: 'We think globally while understanding the local Hyderabad market deeply.' },
];

const TEAM = [
  { name: 'Sreenivas Reddy', role: 'Founder & CEO', emoji: '👨‍💼', desc: 'Full-stack developer with 5+ years experience. Passionate about helping businesses grow with technology.' },
];

const SKILLS = [
  { label: 'React / Next.js', pct: 95 },
  { label: 'Node.js / APIs', pct: 90 },
  { label: 'B2B Consulting', pct: 85 },
  { label: 'Digital Marketing', pct: 80 },
  { label: 'Staff Outsourcing', pct: 85 },
  { label: 'AI & Automation', pct: 75 },
];

export default function About() {
  return (
    <main className="about-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner fade-up">
            <div className="tag tag-blue">About Us</div>
            <h1>Built on <span className="gradient-text">Prime Technology</span></h1>
            <p>We are a Hyderabad-based technology company on a mission to help businesses grow with prime consulting, talent, and software solutions.</p>
          </div>
        </div>
        <div className="page-hero-bg" />
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-story fade-up">
            <div className="story-content">
              <div className="tag tag-blue">Our Story</div>
              <h2>Why We Started <span className="gradient-text">Nexlora Prime</span></h2>
              <p>Nexlora Prime Technologies was founded with one clear mission: to bring prime-quality technology solutions and consulting to businesses in Hyderabad and beyond.</p>
              <p>We saw too many businesses struggling to find reliable technology partners, skilled talent, and honest consulting. So we built exactly that — a company that combines deep technical expertise with genuine business understanding.</p>
              <p>Today, we help companies with B2B consulting, staff outsourcing, website development, app development, and AI solutions — everything under one roof, delivered with prime quality.</p>
              <div className="story-stats">
                {[['20+','Projects'],['10+','Clients'],['5+','Years Exp'],['100%','Satisfaction']].map(([n,l]) => (
                  <div key={l} className="story-stat">
                    <span className="gradient-text">{n}</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="story-visual">
              <div className="about-card">
                <div className="about-card-header">
                  <div className="ac-icon">🏢</div>
                  <div>
                    <div className="ac-title">Nexlora Prime Technologies</div>
                    <div className="ac-sub">Private Limited, Hyderabad</div>
                  </div>
                </div>
                <div className="skills-list">
                  {SKILLS.map(({ label, pct }) => (
                    <div key={label} className="skill-row">
                      <div className="skill-header">
                        <span className="skill-label">{label}</span>
                        <span className="skill-pct">{pct}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-fill" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag tag-teal">Our Values</div>
            <h2>What Makes Us <span className="gradient-text">Prime</span></h2>
            <p>Six core principles that guide every decision we make and every project we deliver.</p>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`value-card fade-up delay-${(i%3)+1}`}>
                <span className="value-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag tag-blue">Our Team</div>
            <h2>Meet the <span className="gradient-text">Founder</span></h2>
          </div>
          <div className="team-grid">
            {TEAM.map(member => (
              <div key={member.name} className="team-card fade-up">
                <div className="team-avatar">{member.emoji}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner fade-up">
            <h2>Ready to Partner with Us?</h2>
            <p>Let's have a conversation about how Nexlora Prime can help your business grow.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Start the Conversation →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
