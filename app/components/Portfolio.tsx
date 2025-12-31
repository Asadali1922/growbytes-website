'use client';

import { useEffect } from 'react';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    };

    initAnimations();
  }, []);

  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <h2 className="mb-lg reveal">Selected Projects</h2>

        <div className={`${styles.workItem} reveal`}>
          <div className={styles.workImgWrapper}>
            <div className={styles.workImgPlaceholder}>FINTECH DASHBOARD</div>
          </div>
          <div className={styles.workInfo}>
            <span className={styles.workTag}>FINANCE / WEB APP</span>
            <h3 className="mt-sm">Modernizing Banking for the 21st Century</h3>
            <p className="text-muted mt-md mb-lg">
              A complete overhaul of a legacy banking system into a high-speed cloud platform.
            </p>
            <button className="btn btn-secondary btn-sm">View Case Study</button>
          </div>
        </div>

        <div className={`${styles.workItem} reveal`}>
          <div className={styles.workInfo}>
            <span className={styles.workTag}>E-COMMERCE / DESIGN</span>
            <h3 className="mt-sm">Global Luxury Retail Experience</h3>
            <p className="text-muted mt-md mb-lg">
              Designing a headless commerce experience for a premium fashion house.
            </p>
            <button className="btn btn-secondary btn-sm">View Case Study</button>
          </div>
          <div className={styles.workImgWrapper}>
            <div className={styles.workImgPlaceholder}>LUXURY RETAIL UI</div>
          </div>
        </div>
      </div>

       <div className={`${styles.workItem} reveal`}>
          <div className={styles.workImgWrapper}>
            <div className={styles.workImgPlaceholder}>FINTECH DASHBOARD</div>
          </div>
          <div className={styles.workInfo}>
            <span className={styles.workTag}>FINANCE / WEB APP</span>
            <h3 className="mt-sm">Modernizing Banking for the 21st Century</h3>
            <p className="text-muted mt-md mb-lg">
              A complete overhaul of a legacy banking system into a high-speed cloud platform.
            </p>
            <button className="btn btn-secondary btn-sm">View Case Study</button>
          </div>
        </div>
    </section>
  );
}
