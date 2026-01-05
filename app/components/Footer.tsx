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
              Let's discuss how our growth strategies can help you achieve your business goals. Book a free consultation today.
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
            {/* Company Info Column */}
            <div className="footer-col footer-brand">
              <a href="#" className="footer-logo">
                <div className="logo-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span>GrowBytes</span>
              </a>
              <p className="footer-desc">
                We engineer digital success through innovative software solutions, performance marketing, and cutting-edge automation for modern businesses.
              </p>
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
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="var(--footer-bg)" strokeWidth="2" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="var(--footer-bg)" strokeWidth="2" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Google">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </a>
              </div>
              <div className="footer-contact">
                <a href="mailto:hello@growbytes.com" className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@growbytes.com
                </a>
                <a href="tel:+923001234567" className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +92 300 1234567
                </a>
              </div>
            </div>

            {/* Marketing Services */}
            <div className="footer-col">
              <h4 className="footer-heading">Marketing & Growth</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Performance Marketing</a></li>
                <li><a href="#" className="footer-link">Meta Ads</a></li>
                <li><a href="#" className="footer-link">Google PPC </a></li>
                <li><a href="#" className="footer-link">TikTok & UGC Ads</a></li>
                <li><a href="#" className="footer-link">Sales Funnel </a></li>
                <li><a href="#" className="footer-link">Lead Magnet Funnels</a></li>
                <li><a href="#" className="footer-link">Email Marketing</a></li>
                <li><a href="#" className="footer-link">CRO</a></li>

              </ul>
            </div>

            {/* Development Services */}
            <div className="footer-col">
              <h4 className="footer-heading">Development & Design</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Business Websites</a></li>
                <li><a href="#" className="footer-link">Shopify Development</a></li>
                <li><a href="#" className="footer-link">Landing Page Design</a></li>
                <li><a href="#" className="footer-link">UI/UX Design</a></li>
                <li><a href="#" className="footer-link">CRM Systems</a></li>
                <li><a href="#" className="footer-link">ERP Solutions</a></li>
                <li><a href="#" className="footer-link">Custom Workflows</a></li>
              </ul>
            </div>

            {/* SEO & Technology */}
            <div className="footer-col">
              <h4 className="footer-heading">SEO & Technology</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Technical SEO</a></li>
                <li><a href="#" className="footer-link">On-Page SEO</a></li>
                <li><a href="#" className="footer-link">Link Building</a></li>
                <li><a href="#" className="footer-link">Local SEO</a></li>
                <li><a href="#" className="footer-link">Content Strategy</a></li>
                <li><a href="#" className="footer-link">AI Chatbots</a></li>
                <li><a href="#" className="footer-link">Business Automation</a></li>
                <li><a href="#" className="footer-link">Custom Dashboards</a></li>
              </ul>
            </div>

            {/* Industries & Resources */}
            <div className="footer-col">
              <h4 className="footer-heading">Industries</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">E-Commerce & D2C</a></li>
                <li><a href="#" className="footer-link">SaaS & Software</a></li>
                <li><a href="#" className="footer-link">Healthcare</a></li>
                <li><a href="#" className="footer-link">Real Estate</a></li>
                <li><a href="#" className="footer-link">FinTech</a></li>
                <li><a href="#" className="footer-link">EdTech</a></li>
                <li><a href="#" className="footer-link">Hospitality</a></li>
                <li><a href="#" className="footer-link">Retail</a></li>

              </ul>
            </div>

            {/* Company & Resources */}
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Case Studies</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Knowledgebase</a></li>
                <li><a href="#" className="footer-link">Affiliate</a></li>
                <li><a href="#" className="footer-link">FAQ</a></li>
              </ul>
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