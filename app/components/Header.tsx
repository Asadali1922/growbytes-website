'use client';

import { useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
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

  return (
    <header className={`${styles.headerGlass} header-glass`}>
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.logoWrapper}>
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className={styles.logoText}>GrowBytes</span>
        </a>

        <div className={styles.navLinks}>
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
                  <div className="mega-col">
                    <h4 className={styles.megaCatTitle}>Development</h4>
                    <a href="#" className={styles.megaLinkItem}>
                      <span className={styles.iconBox}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </span>
                      <div>
                        <span className={styles.linkTitle}>Web Apps</span>
                        <span className={styles.linkDesc}>Next.js & React</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <h4 className={styles.megaCatTitle}>Design</h4>
                    <a href="#" className={styles.megaLinkItem}>
                      <span className={styles.iconBox}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                        </svg>
                      </span>
                      <div>
                        <span className={styles.linkTitle}>UI/UX Design</span>
                        <span className={styles.linkDesc}>Modern Interfaces</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <h4 className={styles.megaCatTitle}>Strategy</h4>
                    <a href="#" className={styles.megaLinkItem}>
                      <span className={styles.iconBox}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                        </svg>
                      </span>
                      <div>
                        <span className={styles.linkTitle}>Consulting</span>
                        <span className={styles.linkDesc}>Tech Roadmap</span>
                      </div>
                    </a>
                  </div>

                  <div className="mega-col">
                    <div className={styles.megaFeatureCard}>
                      <div className={styles.featureBadge}>New</div>
                      <h4>Free Audit</h4>
                      <p>Get a tech stack review.</p>
                      <a href="#" className={styles.featureLink}>Book Now →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className={styles.navLinkBtn}>Work</a>
          <a href="#" className={styles.navLinkBtn}>About</a>
          
          <div className={styles.sepVertical}></div>
          <button className="btn btn-primary btn-sm">Let&apos;s Talk</button>
        </div>
      </nav>
    </header>
  );
}