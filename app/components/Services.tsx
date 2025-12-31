'use client';

import { useEffect } from 'react';
import styles from './Services.module.css';

export default function Services() {
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
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <div className="reveal">
          <h2 className="text-center">Our Expertise</h2>
          <p className="text-center text-muted" style={{maxWidth: '600px', margin: '20px auto'}}>
            We provide end-to-end solutions from initial concept to deployment.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceCard} reveal`}>
            <span className={styles.serviceNumber}>01</span>
            <h3>Web Development</h3>
            <p className="text-muted mt-md">
              Building robust, SEO-optimized web platforms using React, Next.js, and Node.js.
            </p>
          </div>
          <div className={`${styles.serviceCard} reveal`}>
            <span className={styles.serviceNumber}>02</span>
            <h3>Product Design</h3>
            <p className="text-muted mt-md">
              User-centric UI/UX design that prioritizes conversion and seamless interactions.
            </p>
          </div>
          <div className={`${styles.serviceCard} reveal`}>
            <span className={styles.serviceNumber}>03</span>
            <h3>Cloud Solutions</h3>
            <p className="text-muted mt-md">
              Scaling your infrastructure with AWS and Azure for maximum uptime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}