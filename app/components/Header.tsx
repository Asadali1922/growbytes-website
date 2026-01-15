'use client';

import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

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
          header.style.background = 'rgba(255, 255, 255, 0.95)';
          header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.15)';
          header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        } else {
          header.style.background = 'rgba(255, 255, 255, 0.8)';
          header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
          header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
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

  const toggleMobileSubmenu = (menu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  return (
    <header className="header-glass">
      <nav className="nav container">
        <a href="#" className="logo-wrapper">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
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
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="mega-menu">
              <div className="mega-menu-centered">
                <div className="mega-grid">
                  <div className="mega-col">
                    <a href="/services/web-mobile-app-development" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18M9 21V9" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Web & Mobile App</span>
                        <span className="link-desc">Custom web and mobile applications</span>
                      </div>
                    </a>
                      <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">E-commerce Solutions</span>
                        <span className="link-desc">Build and grow online stores</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="12" y1="11" x2="12" y2="17" />
                          <line x1="9" y1="14" x2="15" y2="14" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Web Design & Development</span>
                        <span className="link-desc">High-converting business websites</span>
                      </div>
                    </a>
                  
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">CRM & ERP Solutions</span>
                        <span className="link-desc">Streamline business operations</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                                        <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Social Media Marketing</span>
                        <span className="link-desc">Grow your audience and engagement</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Google Ads & PPC</span>
                        <span className="link-desc">Instant visibility & conversions</span>
                      </div>
                    </a>

                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">SEO & Organic Growth</span>
                        <span className="link-desc">Long-term sustainable traffic</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Email Marketing</span>
                        <span className="link-desc">Convert leads into customers</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Workflow Automation</span>
                        <span className="link-desc">AI-powered process automation</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">AI Support Chatbots</span>
                        <span className="link-desc">24/7 customer support automation</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="1" />
                          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">AI Sales Automation</span>
                        <span className="link-desc">Lead generation & sales acceleration</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">AI Marketing Automation</span>
                        <span className="link-desc">Content & campaign automation</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <div className="mega-feature-card">
                      <div className="feature-badge">Complete Solution</div>
                      <h4>Growth Command Center</h4>
                      <p>One unified platform combining development, marketing, and automation. Everything you need to scale.</p>
                      <a href="#" className="feature-link">Get Started →</a>
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
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="mega-menu">
              <div className="mega-menu-centered">
                <div className="mega-grid">
                  <div className="mega-col">
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
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
                          <path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 7h16M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" />
                          <path d="M9 12h6" />
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
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
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
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
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
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
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
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
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
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
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
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
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
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
                          <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" y1="19" x2="12" y2="22" />
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
                      {/* <div className="feature-icon-wrapper">
                        <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="9" cy="21" r="1"/>
                          <circle cx="20" cy="21" r="1"/>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                      </div> */}
                      <div className="feature-badge">Trending</div>
                      <h4>E-Commerce Solutions</h4>
                      <p>Complete growth system for online stores. From traffic to checkout optimization.</p>
                      <div className="feature-stats">
                        <div className="stat-item">
                          <span className="stat-value">40%</span>
                          <span className="stat-label">Avg Growth</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-value">$2M+</span>
                          <span className="stat-label">Revenue</span>
                        </div>
                      </div>
                      <a href="#" className="feature-link">Learn More →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resources Mega Menu */}
          <div className="nav-item">
            <button className="nav-link-btn">
              Resources
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="mega-menu">
              <div className="mega-menu-centered">
                <div className="mega-grid mega-grid-resources">
                  <div className="mega-col">
                    <h4>Learn</h4>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Blog</span>
                        <span className="link-desc">Latest insights & trends</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Guides</span>
                        <span className="link-desc">Step-by-step tutorials</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Video Library</span>
                        <span className="link-desc">Expert training sessions</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <h4>Tools</h4>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">ROI Calculator</span>
                        <span className="link-desc">Estimate campaign returns</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Website Audit</span>
                        <span className="link-desc">Free performance check</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Templates</span>
                        <span className="link-desc">Ready-to-use resources</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <h4>Company</h4>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">About Us</span>
                        <span className="link-desc">Our story & mission</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <line x1="19" y1="8" x2="19" y2="14" />
                          <line x1="22" y1="11" x2="16" y2="11" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Careers</span>
                        <span className="link-desc">Join our team</span>
                      </div>
                    </a>
                    <a href="#" className="mega-link-item">
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <div className="link-content">
                        <span className="link-title">Contact</span>
                        <span className="link-desc">Get in touch</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <div className="mega-feature-card">
                      {/* <div className="feature-icon-wrapper">
                        <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                      </div> */}
                      <div className="feature-badge">Free Guide</div>
                      <h4>Growth Playbook 2026</h4>
                      <p>Download our comprehensive guide with proven strategies to scale your business this year.</p>
                      <a href="#" className="feature-link">Download Now →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="nav-link-btn">Case Studies</a>
          {/* <a href="#" className="nav-link-btn">About</a> */}

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
              <span>Services</span>
              <svg
                className={`chevron ${activeMobileSubmenu === 'services' ? 'active' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
              >
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {activeMobileSubmenu === 'services' && (
              <div className="mobile-submenu">
                <div className="mobile-submenu-section">
                  <h5>Development</h5>
                  <a href="/services/web-mobile-app-development" className="mobile-submenu-item">Web & Mobile App</a>
                  <a href="#" className="mobile-submenu-item">Web Design & Development</a>
                  <a href="#" className="mobile-submenu-item">E-commerce Solutions</a>
                  <a href="#" className="mobile-submenu-item">CRM & ERP Solutions</a>
                </div>
                <div className="mobile-submenu-section">
                  <h5>Growth Marketing</h5>
                  <a href="#" className="mobile-submenu-item">Google Ads & PPC</a>
                  <a href="#" className="mobile-submenu-item">Social Media Marketing</a>
                  <a href="#" className="mobile-submenu-item">SEO & Organic Growth</a>
                  <a href="#" className="mobile-submenu-item">Email Marketing</a>
                </div>
                <div className="mobile-submenu-section">
                  <h5>AI Automation</h5>
                  <a href="#" className="mobile-submenu-item">Workflow Automation</a>
                  <a href="#" className="mobile-submenu-item">AI Support Chatbots</a>
                  <a href="#" className="mobile-submenu-item">AI Sales Automation</a>
                  <a href="#" className="mobile-submenu-item">AI Marketing Automation</a>
                </div>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <button
              className="mobile-menu-btn"
              onClick={() => toggleMobileSubmenu('industries')}
            >
              <span>Industries</span>
              <svg
                className={`chevron ${activeMobileSubmenu === 'industries' ? 'active' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
              >
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {activeMobileSubmenu === 'industries' && (
              <div className="mobile-submenu">
                <a href="#" className="mobile-submenu-item">E-Commerce & D2C</a>
                <a href="#" className="mobile-submenu-item">SaaS & Software</a>
                <a href="#" className="mobile-submenu-item">Healthcare</a>
                <a href="#" className="mobile-submenu-item">Real Estate</a>
                <a href="#" className="mobile-submenu-item">FinTech</a>
                <a href="#" className="mobile-submenu-item">EdTech</a>
                <a href="#" className="mobile-submenu-item">Hospitality</a>
                <a href="#" className="mobile-submenu-item">Retail</a>
                <a href="#" className="mobile-submenu-item">Professional Services</a>
                <a href="#" className="mobile-submenu-item">Automotive</a>
                <a href="#" className="mobile-submenu-item">Food & Beverage</a>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <button
              className="mobile-menu-btn"
              onClick={() => toggleMobileSubmenu('resources')}
            >
              <span>Resources</span>
              <svg
                className={`chevron ${activeMobileSubmenu === 'resources' ? 'active' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
              >
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {activeMobileSubmenu === 'resources' && (
              <div className="mobile-submenu">
                <div className="mobile-submenu-section">
                  <h5>Learn</h5>
                  <a href="#" className="mobile-submenu-item">Blog</a>
                  <a href="#" className="mobile-submenu-item">Guides</a>
                  <a href="#" className="mobile-submenu-item">Video Library</a>
                </div>
                <div className="mobile-submenu-section">
                  <h5>Tools</h5>
                  <a href="#" className="mobile-submenu-item">ROI Calculator</a>
                  <a href="#" className="mobile-submenu-item">Website Audit</a>
                  <a href="#" className="mobile-submenu-item">Templates</a>
                </div>
                <div className="mobile-submenu-section">
                  <h5>Company</h5>
                  <a href="#" className="mobile-submenu-item">About Us</a>
                  <a href="#" className="mobile-submenu-item">Careers</a>
                  <a href="#" className="mobile-submenu-item">Contact</a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="mobile-link">Case Studies</a>
          <a href="#" className="mobile-link">About</a>

          <div className="mobile-cta">
            <button className="btn btn-primary btn-block">Let's Talk</button>
          </div>
        </div>
      )}
    </header>
  );
}