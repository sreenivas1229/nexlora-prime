// src/pages/Contact.jsx
import { useState } from 'react';
import './Contact.css';

const SERVICES = [
  'B2B Consulting',
  'Staff Outsourcing',
  'Website Development',
  'App Development',
  'AI Solutions',
  'Digital Marketing',
  'Full Package',
  'Not Sure — Need Advice',
];

export default function Contact() {
  const [form, setForm]     = useState({ name:'', company:'', phone:'', email:'', service:'', message:'' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) return;

    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/mbdabyrw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `🚀 New Lead — ${form.name} | ${form.service} | Nexlora Prime`,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name:'', company:'', phone:'', email:'', service:'', message:'' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner fade-up">
            <div className="tag tag-teal">Get In Touch</div>
            <h1>Let's Build Something <span className="gradient-text">Great Together</span></h1>
            <p>Free 30-minute consultation. No commitment. Just honest advice on how we can help your business grow.</p>
          </div>
        </div>
        <div className="page-hero-bg" />
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Info */}
            <div className="contact-info fade-up">
              <h2>Contact <span className="gradient-text">Nexlora Prime</span></h2>
              <p className="contact-intro">
                Ready to take your business to the next level? Reach out and our team will respond within 4 business hours.
              </p>

              <div className="contact-items">
                {[
                  { icon: '📧', title: 'Email Us', value: 'hello.nexloraprime@gmail.com', href: 'mailto:hello.nexloraprime@gmail.com' },
                  { icon: '📞', title: 'Call / WhatsApp', value: '+91 94949 7544', href: 'tel:+919494947544' },
                  { icon: '📍', title: 'Office', value: 'HITEC City, Hyderabad\nTelangana 500081, India', href: null },
                  { icon: '⏰', title: 'Working Hours', value: 'Mon–Sat: 9 AM – 7 PM IST', href: null },
                ].map(item => (
                  <div key={item.title} className="contact-item">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-title">{item.title}</div>
                      {item.href
                        ? <a href={item.href} className="contact-item-value link">{item.value}</a>
                        : <span className="contact-item-value">{item.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-wa">
                <a
                  href="https://wa.me/919494947544"
                  className="wa-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>💬</span>
                  <div>
                    <div className="wa-title">Chat on WhatsApp</div>
                    <div className="wa-sub">Fastest response — usually within 1 hour</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap fade-up delay-2">
              <div className="contact-form-card">
                <h3>Send Us a Message</h3>
                <p>Fill in your details and we'll get back to you within 4 hours.</p>

                {status === 'success' ? (
                  <div className="form-success">
                    <div className="success-icon">✅</div>
                    <h4>Message Sent!</h4>
                    <p>We'll reply within 4 business hours. Meanwhile, feel free to WhatsApp us for faster response!</p>
                    <button className="btn-primary" onClick={() => setStatus('idle')}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input
                          name="name" value={form.name} onChange={handleChange}
                          placeholder="Rajesh Kumar" required
                        />
                      </div>
                      <div className="form-group">
                        <label>Company Name</label>
                        <input
                          name="company" value={form.company} onChange={handleChange}
                          placeholder="Medak Industries Pvt Ltd"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Phone / WhatsApp *</label>
                        <input
                          name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210" required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          name="email" type="email" value={form.email} onChange={handleChange}
                          placeholder="rajesh@company.com"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Service You Need *</label>
                      <select name="service" value={form.service} onChange={handleChange} required>
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Tell Us About Your Business</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        placeholder="What does your company do? What is your main challenge? What results do you want to achieve?..."
                        rows={4}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="form-error">
                        ❌ Something went wrong. Please try again or WhatsApp us directly.
                      </div>
                    )}

                    <button type="submit" className="btn-primary form-submit" disabled={status === 'sending'}>
                      {status === 'sending' ? '⏳ Sending...' : 'Send Message — We\'ll Reply in 4 Hours ✦'}
                    </button>

                    <p className="form-privacy">
                      🔒 Your information is 100% private. We never share your details with anyone.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
