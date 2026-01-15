// app/components/Footer.tsx
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Modern Large CTA Section */}
      {/* <div className="footer-cta-section">
        <div className="container">
          <div className="cta-glass-card">
            <div className="cta-text-content">
              <h2 className="cta-heading">
                Ready to <span className="text-gradient">transform</span> your digital presence?
              </h2>
              <p className="cta-subheading">
                Join hundreds of forward-thinking companies scaling with GrowBytes.
              </p>
            </div>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-lg">
                Start Your Project
              </button>
              <button className="btn btn-secondary btn-lg">
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="footer-main">
        <div className="container">
          <div className="footer-layout">
            
            {/* Left Column: Brand & Newsletter */}
            <div className="footer-brand-col">
              <a href="#" className="footer-logo">
                <div className="logo-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span>GrowBytes</span>
              </a>
              <p className="brand-desc">
                Engineering digital success through modern web development, data-driven marketing, and AI automation.
              </p>
              
              <div className="newsletter-widget">
                <label className="newsletter-label">Subscribe to our insights</label>
                <div className="newsletter-input-group">
                  <input type="email" placeholder="Enter your email" className="newsletter-input" />
                  <button className="newsletter-btn" aria-label="Subscribe">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Navigation Grid */}
            <div className="footer-nav-grid">
              <div className="nav-col">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">App Development</a></li>
                  <li><a href="#">UI/UX Design</a></li>
                  <li><a href="#">Cloud Solutions</a></li>
                  <li><a href="#">AI Integrations</a></li>
                </ul>
              </div>

              <div className="nav-col">
                <h4>Growth</h4>
                <ul>
                  <li><a href="#">SEO Optimization</a></li>
                  <li><a href="#">Social Media</a></li>
                  <li><a href="#">PPC Campaigns</a></li>
                  <li><a href="#">Content Strategy</a></li>
                  <li><a href="#">Email Marketing</a></li>
                </ul>
              </div>

              <div className="nav-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Careers</a> <span className="hiring-badge">Hiring</span></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="copyright">© {currentYear} GrowBytes Agency. All rights reserved.</p>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}