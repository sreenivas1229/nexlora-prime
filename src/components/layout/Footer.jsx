// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo size={34} showText={true} white={true} />
            </div>
            <p className="footer-tagline">
              Prime Technology. Prime Results.
            </p>
            <p className="footer-desc">
              B2B Consulting · Staff Outsourcing · Software Services
              for businesses in Hyderabad and globally.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/nexlora-prime-technologies/about/" target="_blank" rel="noreferrer" className="social-btn">in</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn">𝕏</a>
              <a href="https://wa.me/919494947544" target="_blank" rel="noreferrer" className="social-btn">W</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">B2B Consulting</Link></li>
              <li><Link to="/services">Staff Outsourcing</Link></li>
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">App Development</Link></li>
              <li><Link to="/services">AI Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:hello.nexloraprime@gmail.com">hello.nexloraprime@gmail.com</a>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+919494947544">+91 94949 7544</a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>HITEC City, Hyderabad, Telangana 500081</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Nexlora Prime Technologies Private Limited. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">GST: 36XXXXX1234X1ZX</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/919494947544"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </footer>
  );
}
