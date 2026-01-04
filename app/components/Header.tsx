'use client';

import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAnimations = () => {
      const navItems = document.querySelectorAll('.nav-item');
      
      navItems.forEach(item => {
        const menu = item.querySelector('.mega-menu') as HTMLElement;
        if (!menu) return;

        item.addEventListener('mouseenter', () => {
          menu.style.opacity = '1';
          menu.style.visibility = 'visible';
          menu.style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseleave', () => {
          menu.style.opacity = '0';
          menu.style.visibility = 'hidden';
          menu.style.transform = 'translateY(10px)';
        });
      });

      let lastScroll = 0;
      window.addEventListener('scroll', () => {
        const header = document.querySelector('.header-glass') as HTMLElement;
        if (!header) return;
        
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
          header.style.background = 'rgba(11, 11, 11, 0.95)';
          header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
          header.style.background = 'rgba(17, 17, 17, 0.7)';
          header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }
        lastScroll = currentScroll;
      });
    };

    initAnimations();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (menu) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  return (
    <header className="header-glass">
      <nav className="nav container">
        <a href="#" className="logo-wrapper">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span>GrowBytes</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {/* Services Mega Menu */}
          <div className="nav-item">
            <button className="nav-link-btn">
              Services
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="mega-menu">
              <div className="container">
                <div className="mega-grid">
                  <div className="mega-col">
                    <h4>Growth Services</h4>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Performance Marketing</span>
                        <span className="link-desc">Paid campaigns for leads & sales</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2"/>
                          <path d="M3 9h18M9 21V9"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Business Websites</span>
                        <span className="link-desc">Conversion-focused websites</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                          <line x1="12" y1="22.08" x2="12" y2="12"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">CRM / ERP Systems</span>
                        <span className="link-desc">Manage leads & operations</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <h4>Conversion</h4>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Sales Funnels</span>
                        <span className="link-desc">Turn clicks into paying customers</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23"/>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">CRO</span>
                        <span className="link-desc">Maximize revenue from traffic</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/>
                          <path d="m21 21-4.35-4.35"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">SEO & Organic Growth</span>
                        <span className="link-desc">High-intent traffic that converts</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <h4>Technology</h4>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                          <circle cx="12" cy="12" r="4"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">AI Automation</span>
                        <span className="link-desc">Automate workflows & leads</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 3v18h18"/>
                          <path d="m19 9-5 5-4-4-3 3"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Analytics & Insights</span>
                        <span className="link-desc">Real-time dashboards</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
                          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Brand Systems</span>
                        <span className="link-desc">Positioning & messaging</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <div className="mega-feature-card">
                      <div className="feature-badge">Bundles</div>
                      <h4>Start / Scale / Enterprise</h4>
                      <p>Pick a bundle and get your tailored growth system today.</p>
                      <a href="#" className="feature-link">View Bundles →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Mega Menu */}
          <div className="nav-item">
            <button className="nav-link-btn">
              Industries
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="mega-menu">
              <div className="container">
                <div className="mega-grid">
                  <div className="mega-col">
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="9" cy="21" r="1"/>
                          <circle cx="20" cy="21" r="1"/>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">E-Commerce & D2C</span>
                        <span className="link-desc">Boost online sales & growth</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 7h16M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7"/>
                          <path d="M9 12h6"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">SaaS & Software</span>
                        <span className="link-desc">Scale software leads</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Healthcare</span>
                        <span className="link-desc">Attract patients digitally</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Real Estate</span>
                        <span className="link-desc">Generate qualified leads</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23"/>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">FinTech</span>
                        <span className="link-desc">Build trust & automate</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">EdTech</span>
                        <span className="link-desc">Scale education programs</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Hospitality</span>
                        <span className="link-desc">Increase bookings</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                          <line x1="3" y1="6" x2="21" y2="6"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Retail</span>
                        <span className="link-desc">Drive online & offline sales</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Professional Services</span>
                        <span className="link-desc">Attract premium clients</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Automotive</span>
                        <span className="link-desc">Convert leads to sales</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                          <line x1="12" y1="19" x2="12" y2="22"/>
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Food & Beverage</span>
                        <span className="link-desc">Boost online orders</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <div className="mega-feature-card">
                      <div className="feature-badge">View All</div>
                      <h4>Industry Solutions</h4>
                      <p>Explore tailored strategies for your specific industry needs.</p>
                      <a href="#" className="feature-link">Browse Industries →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="nav-link-btn">Case Studies</a>
          <a href="#" className="nav-link-btn">About</a>
          <a href="#" className="nav-link-btn">Resources</a>

          <div className="sep-vertical"></div>
          <button className="btn btn-primary">Let's Talk</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="mobile-bar"></span>
          <span className="mobile-bar"></span>
          <span className="mobile-bar"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-item">
            <button 
              className="mobile-menu-btn"
              onClick={() => toggleMobileSubmenu('services')}
            >
              Services
              <svg 
                className={`chevron ${activeMobileSubmenu === 'services' ? 'active' : ''}`} 
                width="10" 
                height="6" 
                viewBox="0 0 10 6"
                fill="none" 
                stroke="currentColor"
              >
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeMobileSubmenu === 'services' && (
              <div className="mobile-submenu">
                <a href="#" className="mobile-submenu-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-title">Performance Marketing</span>
                  </div>
                </a>
                <a href="#" className="mobile-submenu-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M3 9h18M9 21V9"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-title">Business Websites</span>
                  </div>
                </a>
                <a href="#" className="mobile-submenu-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-title">Sales Funnels</span>
                  </div>
                </a>
                <a href="#" className="mobile-submenu-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-title">SEO & Growth</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <button 
              className="mobile-menu-btn"
              onClick={() => toggleMobileSubmenu('industries')}
            >
              Industries
              <svg 
                className={`chevron ${activeMobileSubmenu === 'industries' ? 'active' : ''}`}
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                stroke="currentColor"
              >
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeMobileSubmenu === 'industries' && (
              <div className="mobile-submenu">
                <a href="#" className="mobile-submenu-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"/>
                      <circle cx="20" cy="21" r="1"/>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-title">E-Commerce & D2C</span>
                  </div>
                </a>
                <a href="#" className="mobile-submenu-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 7h16M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-title">SaaS & Software</span>
                  </div>
                </a>
                <a href="#" className="mobile-submenu-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-title">Real Estate</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a href="#" className="mobile-link">Case Studies</a>
          <a href="#" className="mobile-link">About</a>
          <a href="#" className="mobile-link">Resources</a>

          <div className="mobile-cta">
            <button className="btn btn-primary btn-block">Let's Talk</button>
          </div>
        </div>
      )}
    </header>
  );
}