// src/pages/Portfolio.jsx
import { useState } from 'react';
import './Portfolio.css';

const PROJECTS = [
  { id:1, title:'Steel Factory Website', client:'Medak Steel Fabricators', cat:'website', tag:'Website Dev', emoji:'🏭', desc:'Modern responsive website with product catalogue and lead generation form. Increased inquiries by 300%.', tech:['React','Tailwind','Formspree'], result:'300% more inquiries' },
  { id:2, title:'B2B Lead Gen Campaign', client:'Patancheru Exports Pvt Ltd', cat:'marketing', tag:'Digital Marketing', emoji:'📈', desc:'LinkedIn B2B campaign targeting international buyers. Generated 45 qualified leads in 60 days.', tech:['LinkedIn Ads','Email','Analytics'], result:'45 leads in 60 days' },
  { id:3, title:'Staff Outsourcing Portal', client:'IT Services Company', cat:'software', tag:'App Dev', emoji:'💻', desc:'Full-stack web application for managing outsourced staff profiles, timesheets, and billing.', tech:['React','Node.js','PostgreSQL'], result:'Saved 20hrs/week' },
  { id:4, title:'AI Customer Support Bot', client:'Healthcare Clinic Chain', cat:'ai', tag:'AI Solution', emoji:'🤖', desc:'Custom AI chatbot trained on clinic FAQs. Handles 80% of patient queries automatically.', tech:['OpenAI','LangChain','React'], result:'80% queries automated' },
  { id:5, title:'Pharma Company Website', client:'Genome Pharma Solutions', cat:'website', tag:'Website Dev', emoji:'💊', desc:'Professional website with product listings, compliance documentation and WhatsApp integration.', tech:['React','SEO','WhatsApp API'], result:'Top 3 Google ranking' },
  { id:6, title:'E-Commerce Platform', client:'Hyderabad Handicrafts', cat:'software', tag:'App Dev', emoji:'🛒', desc:'Full e-commerce solution with inventory management, payment gateway and order tracking.', tech:['React','Stripe','Node.js'], result:'₹8L revenue in 90 days' },
];

const FILTERS = [
  { key:'all',       label:'All Projects' },
  { key:'website',   label:'Websites' },
  { key:'software',  label:'Software' },
  { key:'marketing', label:'Marketing' },
  { key:'ai',        label:'AI Solutions' },
];

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === active);

  return (
    <main className="portfolio-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner fade-up">
            <div className="tag tag-teal">Our Work</div>
            <h1>Projects That <span className="gradient-text">Delivered Results</span></h1>
            <p>Real projects. Real clients. Real results. Here's what we've built and achieved together.</p>
          </div>
        </div>
        <div className="page-hero-bg" />
      </section>

      <section className="section">
        <div className="container">

          {/* Filters */}
          <div className="portfolio-filters fade-up">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-btn ${active === f.key ? 'active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-grid">
            {filtered.map((p, i) => (
              <div key={p.id} className={`portfolio-card fade-up delay-${(i%3)+1}`}>
                <div className="pc-visual">
                  <span className="pc-emoji">{p.emoji}</span>
                  <div className={`tag tag-blue pc-tag`}>{p.tag}</div>
                </div>
                <div className="pc-body">
                  <h3>{p.title}</h3>
                  <p className="pc-client">👤 {p.client}</p>
                  <p className="pc-desc">{p.desc}</p>
                  <div className="pc-tech">
                    {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  <div className="pc-result">
                    <span className="result-icon">📊</span>
                    <span className="result-text">{p.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
