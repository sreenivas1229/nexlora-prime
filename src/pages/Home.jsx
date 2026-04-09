// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import './Home.css';

const SERVICES = [
  { icon: '💼', title: 'B2B Consulting', desc: 'Strategy, digital transformation, and growth consulting for serious businesses.', color: 'blue' },
  { icon: '👥', title: 'Staff Outsourcing', desc: 'Prime developers, marketers, and analysts on demand — no hiring overhead.', color: 'teal' },
  { icon: '🌐', title: 'Website Development', desc: 'Beautiful, fast React websites that convert visitors into clients.', color: 'blue' },
  { icon: '📱', title: 'App Development', desc: 'Scalable web and mobile applications from MVP to enterprise.', color: 'teal' },
  { icon: '🤖', title: 'AI Solutions', desc: 'Smart chatbots, automation tools, and intelligent business systems.', color: 'blue' },
  { icon: '📊', title: 'Digital Marketing', desc: 'LinkedIn, email, and SEO campaigns that fill your B2B sales pipeline.', color: 'teal' },
];

const TESTIMONIALS = [
  { stars: 5, text: 'Nexlora Prime built our website and within 45 days we started getting 10+ new buyer inquiries per month. Excellent work and very professional team!', name: 'Rajesh Kumar', role: 'MD — Medak Steel Fabricators', avatar: 'RK' },
  { stars: 5, text: 'Their staff outsourcing service gave us 3 skilled React developers within a week. Saved us months of hiring time and the quality is outstanding!', name: 'Sunita Patel', role: 'Director — Patancheru Exports Pvt Ltd', avatar: 'SP' },
  { stars: 5, text: 'The AI chatbot they built handles 80% of our patient queries automatically. Our staff can now focus on real work. Highly recommend Nexlora Prime!', name: 'Dr. Venkat Rao', role: 'CEO — Genome Healthcare', avatar: 'VR' },
];

const WHY_US = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'Websites in 7 days. Apps in 30 days. No long waiting.' },
  { icon: '💎', title: 'Prime Quality', desc: 'Every project is built to the highest standards — no shortcuts.' },
  { icon: '🎯', title: 'Results Driven', desc: 'We measure success by your business growth, not just deliverables.' },
  { icon: '🤝', title: 'Long-term Partner', desc: 'We\'re invested in your success beyond the project deadline.' },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Services Overview */}
      <section className="section home-services">
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag tag-blue">What We Do</div>
            <h2>Prime Solutions for <span className="gradient-text">Every Challenge</span></h2>
            <p>From strategy to execution — complete technology and consulting services under one roof.</p>
          </div>

          <div className="home-services-grid">
            {SERVICES.map((s, i) => (
              <div key={s.title} className={`home-service-card fade-up delay-${(i % 3) + 1}`}>
                <div className={`hs-icon color-${s.color}`}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className={`hs-link color-${s.color}`}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="services-cta fade-up">
            <Link to="/services" className="btn-primary">View All Services →</Link>
            <Link to="/contact" className="btn-outline">Get Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section home-why">
        <div className="container">
          <div className="why-grid">
            <div className="why-content fade-up">
              <div className="tag tag-teal">Why Nexlora Prime</div>
              <h2>Your <span className="gradient-text">Prime Technology</span> Partner</h2>
              <p>We combine deep technical expertise with genuine business understanding to deliver results that matter.</p>

              <div className="why-points">
                {WHY_US.map(w => (
                  <div key={w.title} className="why-point">
                    <span className="why-icon">{w.icon}</span>
                    <div>
                      <h4>{w.title}</h4>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-primary">Learn More About Us →</Link>
            </div>

            <div className="why-visual fade-up delay-2">
              <div className="why-card">
                <div className="wc-header">
                  <span className="wc-icon">📊</span>
                  <span className="wc-title">Client Results Dashboard</span>
                </div>
                {[
                  { label: 'Average Revenue Increase', value: '3x', color: 'blue' },
                  { label: 'Lead Generation Improvement', value: '250%', color: 'teal' },
                  { label: 'Cost Savings with Outsourcing', value: '60%', color: 'blue' },
                  { label: 'Project Delivery On Time', value: '98%', color: 'teal' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="wc-stat">
                    <span className="wc-label">{label}</span>
                    <span className={`wc-value color-${color}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section home-testimonials">
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag tag-blue">Client Stories</div>
            <h2>What Our Clients <span className="gradient-text">Say About Us</span></h2>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`testimonial-card fade-up delay-${i + 1}`}>
                <div className="testi-stars">{'★'.repeat(t.stars)}</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.avatar}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="final-cta fade-up">
            <div className="final-cta-inner">
              <h2>Ready to Grow with <span className="gradient-text">Nexlora Prime?</span></h2>
              <p>Join 30+ businesses that trust Nexlora Prime Technologies for their growth.</p>
              <div className="final-cta-actions">
                <Link to="/contact" className="btn-primary">Get Free Consultation →</Link>
                <a href="https://wa.me/919494947544" className="btn-outline wa-outline" target="_blank" rel="noreferrer">
                  💬 WhatsApp Us Now
                </a>
              </div>
              <div className="final-cta-note">
                <span>✅ Free 30-min consultation</span>
                <span>✅ No commitment required</span>
                <span>✅ Reply within 4 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
