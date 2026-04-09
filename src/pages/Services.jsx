// src/pages/Services.jsx
import { Link } from 'react-router-dom';
import './Services.css';

const SERVICES = [
  {
    icon: '💼',
    title: 'B2B Consulting',
    tag: 'Strategy',
    desc: 'Expert business consulting to accelerate growth, optimize operations, and unlock new markets for your company.',
    features: ['Market Entry Strategy', 'Digital Transformation', 'Process Optimization', 'Revenue Growth Planning'],
    price: '₹30,000/month',
    color: 'blue',
  },
  {
    icon: '👥',
    title: 'Staff Outsourcing',
    tag: 'Talent',
    desc: 'Access prime talent — skilled developers, marketers, and analysts — on demand without the hiring overhead.',
    features: ['React / Node.js Developers', 'Digital Marketing Experts', 'Business Analysts', 'QA Engineers'],
    price: '₹40,000/person/month',
    color: 'teal',
    featured: true,
  },
  {
    icon: '🌐',
    title: 'Website Development',
    tag: 'Software',
    desc: 'Premium websites built with React and modern tech — fast, beautiful, and designed to convert visitors into clients.',
    features: ['React / Next.js', 'Mobile Responsive', 'SEO Optimized', 'AI Chatbot Integration'],
    price: '₹15,000 onwards',
    color: 'blue',
  },
  {
    icon: '📱',
    title: 'App Development',
    tag: 'Software',
    desc: 'Custom mobile and web applications built to scale — from MVP to enterprise-grade platforms.',
    features: ['React Native Apps', 'Web Applications', 'API Development', 'Cloud Deployment'],
    price: '₹50,000 onwards',
    color: 'teal',
  },
  {
    icon: '🤖',
    title: 'AI Solutions',
    tag: 'Innovation',
    desc: 'Cutting-edge AI tools — chatbots, automation, and intelligent systems — to supercharge your business.',
    features: ['AI Customer Support Bot', 'Process Automation', 'Data Analytics', 'ML Integration'],
    price: '₹25,000 onwards',
    color: 'blue',
  },
  {
    icon: '📊',
    title: 'Digital Marketing',
    tag: 'Growth',
    desc: 'Data-driven B2B marketing campaigns on LinkedIn, Google, and email to fill your sales pipeline.',
    features: ['LinkedIn Campaigns', 'Email Marketing', 'SEO & Content', 'Lead Generation'],
    price: '₹15,000/month',
    color: 'teal',
  },
];

export default function Services() {
  return (
    <main className="services-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner fade-up">
            <div className="tag tag-blue">Our Services</div>
            <h1>Prime Solutions for <span className="gradient-text">Every Need</span></h1>
            <p>From strategy to execution — we deliver end-to-end technology and consulting services that drive real business results.</p>
          </div>
        </div>
        <div className="page-hero-bg" />
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                className={`service-card ${svc.featured ? 'featured' : ''} fade-up delay-${(i % 3) + 1}`}
              >
                {svc.featured && <div className="featured-badge">⭐ Most Popular</div>}

                <div className={`service-icon-wrap color-${svc.color}`}>
                  <span className="service-icon">{svc.icon}</span>
                </div>

                <div className={`tag tag-${svc.color} service-tag`}>{svc.tag}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>

                <ul className="service-features">
                  {svc.features.map(f => (
                    <li key={f}>
                      <span className="feature-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="service-footer">
                  <span className="service-price">{svc.price}</span>
                  <Link to="/contact" className={`btn-service color-${svc.color}`}>
                    Get Started →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="tag tag-teal">How We Work</div>
            <h2>Our <span className="gradient-text">Simple Process</span></h2>
            <p>From first call to final delivery — a streamlined process built for speed and quality.</p>
          </div>

          <div className="process-steps">
            {[
              { step: '01', icon: '📞', title: 'Free Consultation', desc: 'We understand your business goals, challenges, and requirements in a 30-minute call.' },
              { step: '02', icon: '📋', title: 'Custom Proposal', desc: 'We create a detailed proposal with timeline, deliverables, and transparent pricing.' },
              { step: '03', icon: '🚀', title: 'Rapid Execution', desc: 'Our prime team gets to work with weekly updates and clear communication.' },
              { step: '04', icon: '📈', title: 'Results & Growth', desc: 'We deliver measurable results and continue optimizing for long-term success.' },
            ].map((step, i) => (
              <div key={step.step} className={`process-step fade-up delay-${i + 1}`}>
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < 3 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner fade-up">
            <h2>Ready to Work with Nexlora Prime?</h2>
            <p>Book a free 30-minute consultation. No commitment, no pressure — just real advice.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Book Free Consultation →</Link>
              <a href="https://wa.me/919494947544" className="btn-outline cta-wa" target="_blank" rel="noreferrer">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
