import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Section */}
      <div className="footer-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Scale Your Business?
            </h2>
            <p className="cta-desc">
              Let&apos;s discuss how our growth strategies can help you achieve your business goals. Book a free consultation today.
            </p>
            <div className="cta-actions">
              <button className="cta-btn cta-btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Start a Project
              </button>
              <button className="cta-btn cta-btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Development Services */}
            <div className="footer-col">
              <h4 className="footer-heading">Development</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Web & Mobile App</a></li>
                <li><a href="#" className="footer-link">Website Design & Development</a></li>
                <li><a href="#" className="footer-link">E-commerce Solutions</a></li>
                <li><a href="#" className="footer-link">CRM & ERP Solutions</a></li>
              </ul>
            </div>

            {/* Growth Marketing Services */}
            <div className="footer-col">
              <h4 className="footer-heading">Growth Marketing</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Google Ads & PPC</a></li>
                <li><a href="#" className="footer-link">Social Media Marketing</a></li>
                <li><a href="#" className="footer-link">SEO & Organic Growth</a></li>
                <li><a href="#" className="footer-link">Email Marketing</a></li>
              </ul>
            </div>

            {/* AI Automation */}
            <div className="footer-col">
              <h4 className="footer-heading">AI Automation</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Workflow Automation</a></li>
                <li><a href="#" className="footer-link">AI Support Chatbots</a></li>
                <li><a href="#" className="footer-link">AI Sales Automation</a></li>
                <li><a href="#" className="footer-link">AI Marketing Automation</a></li>
              </ul>
            </div>

            {/* Company & Contact */}
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Case Studies</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
              </ul>
              <div className="footer-contact" style={{ marginTop: '24px' }}>
                <a href="mailto:hello@growbytes.com" className="contact-item" style={{ fontSize: '13px', marginBottom: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@growbytes.com
                </a>
                <a href="tel:+923001234567" className="contact-item" style={{ fontSize: '13px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +92 300 1234567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>© 2026 GrowBytes Agency. All rights reserved.</p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="white" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                </svg>
              </a>
            </div>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>

              <a href="#" className="legal-link">Terms of Service</a>

              <a href="#" className="legal-link">Cookie Policy</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}