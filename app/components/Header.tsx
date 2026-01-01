'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      const navItems = document.querySelectorAll('.nav-item');
      
      navItems.forEach(item => {
        const menu = item.querySelector('.mega-menu');
        const arrow = item.querySelector('.chevron');
        if (!menu) return;

        const menuTl = gsap.timeline({ 
          paused: true,
          defaults: { duration: 0.3, ease: "power2.out" }
        });

        menuTl.to(menu, { autoAlpha: 1, y: 0 })
              .from(menu.querySelectorAll('.mega-col'), {
                  y: 10, opacity: 0, stagger: 0.05 
              }, "-=0.2");

        item.addEventListener('mouseenter', () => {
          menuTl.play();
          if (arrow) gsap.to(arrow, { rotation: 180, duration: 0.2 });
        });

        item.addEventListener('mouseleave', () => {
          menuTl.reverse();
          if (arrow) gsap.to(arrow, { rotation: 0, duration: 0.2 });
        });
      });

      const header = document.querySelector('.header-glass');
      if (header) {
        ScrollTrigger.create({
          start: 'top -50',
          end: 99999,
          onUpdate: (self) => {
            if (self.direction === 1) {
              gsap.to(header, { 
                background: "rgba(11, 11, 11, 0.95)", 
                duration: 0.3 
              });
            } else {
              gsap.to(header, { 
                background: "rgba(11, 11, 11, 0.7)", 
                duration: 0.3 
              });
            }
          }
        });
      }
    };

    initAnimations();
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`${styles.headerGlass} header-glass`}>
      <nav className={`${styles.nav} container`}>
        {/* Logo */}
        <a href="#" className={styles.logoWrapper}>
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className={styles.logoText}>GrowBytes</span>
        </a>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          {/* Services Mega Menu */}
          <div className="nav-item">
            <button className={styles.navLinkBtn}>
              Services
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`${styles.megaMenu} mega-menu`}>
              <div className="container">
                <div className={styles.megaGrid}>
                  {/* 3 columns: 9 Services */}
                  <div className="mega-col">
                    <h4 className={styles.megaCatTitle}>Growth Services</h4>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Performance Marketing</span><span className={styles.linkDesc}>Paid campaigns for leads & sales</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Business Websites</span><span className={styles.linkDesc}>Conversion-focused websites</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>CRM / ERP Systems</span><span className={styles.linkDesc}>Manage leads & operations</span></div></a>
                  </div>

                  <div className="mega-col">
                    <h4 className={styles.megaCatTitle}>&nbsp;</h4>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Sales Funnels</span><span className={styles.linkDesc}>Turn clicks into paying customers</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>CRO</span><span className={styles.linkDesc}>Maximize revenue from traffic</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>SEO & Organic Growth</span><span className={styles.linkDesc}>High-intent traffic that converts</span></div></a>
                  </div>

                  <div className="mega-col">
                    <h4 className={styles.megaCatTitle}>&nbsp;</h4>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>AI Automation</span><span className={styles.linkDesc}>Automate workflows & leads</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Analytics & Insights</span><span className={styles.linkDesc}>Real-time dashboards</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Brand Systems</span><span className={styles.linkDesc}>Positioning & messaging</span></div></a>
                  </div>

                  {/* CTA Column */}
                  <div className="mega-col">
                    <div className={styles.megaFeatureCard}>
                      <div className={styles.featureBadge}>Bundles</div>
                      <h4>Start / Scale / Enterprise</h4>
                      <p>Pick a bundle and get your tailored growth system today.</p>
                      <a href="#" className={styles.featureLink}>View Bundles →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Mega Menu */}
          <div className="nav-item">
            <button className={styles.navLinkBtn}>
              Industries
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`${styles.megaMenu} mega-menu`}>
              <div className="container">
                <div className={styles.megaGrid}>
                  {/* 12 Industries → 3 columns */}
                  <div className="mega-col">
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>E-Commerce & D2C</span><span className={styles.linkDesc}>Boost online sales & growth</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>SaaS & Software</span><span className={styles.linkDesc}>Scale software leads & conversions</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Healthcare & Telemedicine</span><span className={styles.linkDesc}>Attract patients & automate care</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Real Estate & Property</span><span className={styles.linkDesc}>Generate qualified buyers</span></div></a>
                  </div>

                  <div className="mega-col">
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Financial Services & FinTech</span><span className={styles.linkDesc}>Automate workflows & build trust</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Education & EdTech</span><span className={styles.linkDesc}>Capture students & scale programs</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Hospitality & Travel</span><span className={styles.linkDesc}>Increase bookings & guest engagement</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Retail & Consumer Goods</span><span className={styles.linkDesc}>Drive footfall & online sales</span></div></a>
                  </div>

                  <div className="mega-col">
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Professional Services</span><span className={styles.linkDesc}>Attract high-value clients</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Automotive</span><span className={styles.linkDesc}>Convert leads into sales</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Luxury & Lifestyle</span><span className={styles.linkDesc}>Showcase premium experiences</span></div></a>
                    <a href="#" className={styles.megaLinkItem}><div><span className={styles.linkTitle}>Food & Beverage</span><span className={styles.linkDesc}>Boost online orders & delivery</span></div></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Static Links */}
          <a href="#" className={styles.navLinkBtn}>Case Studies</a>
          <a href="#" className={styles.navLinkBtn}>About</a>

          <div className={styles.sepVertical}></div>
          <button className="btn btn-primary btn-sm">Let's Talk</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
          <span className={styles.mobileBar}></span>
          <span className={styles.mobileBar}></span>
          <span className={styles.mobileBar}></span>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <a href="#">Services</a>
            <a href="#">Industries</a>
            <a href="#">Case Studies</a>
            <a href="#">About</a>
            <a href="#" className="btn btn-primary btn-sm">Let's Talk</a>
          </div>
        )}
      </nav>
    </header>
  );
}
