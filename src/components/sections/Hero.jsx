// src/components/sections/Hero.jsx
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content fade-up">
          <div className="tag tag-blue hero-tag">
            🚀 Hyderabad's Premier Tech Partner
          </div>

          <h1 className="hero-title">
            Prime Technology<br />
            <span className="gradient-text">Prime Results.</span>
          </h1>

          <p className="hero-desc">
            Nexlora Prime Technologies delivers world-class B2B Consulting,
            Staff Outsourcing, and Software Development. We help businesses
            in Hyderabad and globally scale with confidence.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">
              Get Free Consultation →
            </Link>
            <Link to="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>

          <div className="hero-stats">
            {[
              { num: '20+',  label: 'Projects Delivered' },
              { num: '10+',  label: 'Happy Clients' },
              { num: '5+',   label: 'Years Experience' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map(({ num, label }) => (
              <div key={label} className="hero-stat">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual fade-up delay-2">
          <div className="hero-card-main">
            <div className="hc-header">
              <div className="hc-dot red" /><div className="hc-dot yellow" /><div className="hc-dot green" />
              <span className="hc-title">nexloraprime.com</span>
            </div>
            <div className="hc-body">
              <div className="hc-line hc-line-blue" />
              <div className="hc-line hc-line-short" />
              <div className="hc-code">
                <span className="code-kw">const</span>
                <span className="code-var"> partner</span>
                <span className="code-op"> = </span>
                <span className="code-str">"Nexlora Prime"</span>
              </div>
              <div className="hc-code">
                <span className="code-kw">await</span>
                <span className="code-fn"> growBusiness</span>
                <span>(partner)</span>
              </div>
              <div className="hc-output">✅ Revenue increased by 3x</div>
            </div>
          </div>

          <div className="hero-card-float float-1">
            <span className="float-icon">💼</span>
            <div>
              <div className="float-title">B2B Consulting</div>
              <div className="float-sub">Strategy & Growth</div>
            </div>
          </div>

          <div className="hero-card-float float-2">
            <span className="float-icon">👨‍💻</span>
            <div>
              <div className="float-title">Staff Outsourcing</div>
              <div className="float-sub">Prime Talent</div>
            </div>
          </div>

          <div className="hero-card-float float-3">
            <span className="float-icon">🚀</span>
            <div>
              <div className="float-title">Software Dev</div>
              <div className="float-sub">Web & Mobile Apps</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By */}
      <div className="hero-trusted">
        <div className="container">
          <p className="trusted-label">Trusted by businesses across Hyderabad & beyond</p>
          <div className="trusted-logos">
            {['Manufacturing', 'Healthcare', 'Pharma', 'IT Services', 'Exports', 'Retail'].map(i => (
              <div key={i} className="trusted-logo">{i}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
