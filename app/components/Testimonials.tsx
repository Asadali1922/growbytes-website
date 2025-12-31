'use client';

import { useEffect } from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "GrowBytes didn't just write code; they transformed our entire product strategy.",
      name: "Alex Rivera",
      role: "CTO, FinFlow"
    },
    {
      quote: "The best software house we've worked with. The attention to detail is unmatched.",
      name: "Sarah Chen",
      role: "Product Manager, Nexus"
    },
    {
      quote: "Their engineering team is top-tier. They handled our cloud migration perfectly.",
      name: "James Blake",
      role: "Founder, StratoScale"
    }
  ];

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className="reveal mb-lg">
          <h2 className="text-center">Client Stories</h2>
          <p className="text-center text-muted">
            What world-class teams say about GrowBytes.
          </p>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className={`${styles.testiCard} reveal`}>
              <div className={styles.quoteIcon}>"</div>
              <p style={{color: '#fff'}}>
                {testimonial.quote}
              </p>
              <div className={styles.userInfo}>
                <div className={styles.userAvatar}></div>
                <div>
                  <div style={{fontWeight: 'bold', color: '#fff'}}>{testimonial.name}</div>
                  <div style={{fontSize: '12px'}} className="text-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}