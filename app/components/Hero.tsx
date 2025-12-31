'use client';

import { useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAnimations = async () => {
      const { gsap } = await import('gsap');
      
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl.from(`.${styles.heroBadge}`, { 
        y: 20, 
        opacity: 0, 
        duration: 0.8,
        delay: 0.2 
      })
      .from(`.${styles.heroTitle}`, { 
        y: 30, 
        opacity: 0, 
        duration: 0.8 
      }, "-=0.6")
      .from(`.${styles.heroDesc}`, { 
        y: 20, 
        opacity: 0, 
        duration: 0.8 
      }, "-=0.6")
      .from(`.${styles.heroBtns}`, { 
        y: 20, 
        opacity: 0, 
        duration: 0.8 
      }, "-=0.6")
      .from(`.${styles.mainCard}`, {
        scale: 0.8,
        opacity: 0,
        rotationX: 10,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.8")
      .from(`.${styles.float1}`, {
        opacity: 0,
        x: 20,
        duration: 0.8
      }, "-=0.5");

      // Continuous floating
      gsap.to(`.${styles.mainCard}`, { 
        y: -10, 
        duration: 2, 
        repeat: -1, 
        yoyo: true, 
        ease: "sine.inOut" 
      });

      gsap.to(`.${styles.float1}`, { 
        y: -15, 
        duration: 2.5, 
        repeat: -1, 
        yoyo: true, 
        ease: "sine.inOut", 
        delay: 0.5 
      });

      // Mouse parallax
      const heroWrapper = document.querySelector(`.${styles.heroWrapper}`);
      if (heroWrapper) {
        heroWrapper.addEventListener('mousemove', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const x = (mouseEvent.clientX / window.innerWidth - 0.5) * 20;
          const y = (mouseEvent.clientY / window.innerHeight - 0.5) * 20;
          gsap.to(`.${styles.mainCard}`, { 
            rotationY: x, 
            rotationX: -y, 
            duration: 1, 
            ease: "power2.out" 
          });
          gsap.to(`.${styles.float1}`, { 
            x: x * 1.5, 
            y: y * 1.5, 
            duration: 1 
          });
        });
      }
    };

    initAnimations();
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBgGrid}></div>
      <div className={styles.heroGlow}></div>
      
      <div className="container">
        <div className={styles.heroWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot}></span> Available for new projects
            </div>
            <h1 className={styles.heroTitle}>
              Engineering <br />
              <span className="text-gradient">Digital Success</span>
            </h1>
            <p className={styles.heroDesc}>
              We are a forward-thinking software house crafting high-performance
              applications and brand identities for the next generation of tech.
            </p>
            <div className={styles.heroBtns}>
              <button className="btn btn-primary">Our Services</button>
              <button className="btn btn-secondary">View Work</button>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              <div className={`${styles.glassCard} ${styles.mainCard}`}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.dot} ${styles.red}`}></div>
                  <div className={`${styles.dot} ${styles.yellow}`}></div>
                  <div className={`${styles.dot} ${styles.green}`}></div>
                </div>
                <div className={styles.cardBody}>
                  <div className={`${styles.skeletonLine} ${styles.w75}`}></div>
                  <div className={`${styles.skeletonLine} ${styles.w50}`}></div>
                  <div className={styles.skeletonBox}></div>
                </div>
              </div>
              
              <div className={`${styles.glassCard} ${styles.smallCard} ${styles.float1}`}>
                🚀
                <div style={{fontWeight: 600, fontSize: '12px'}}>Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}