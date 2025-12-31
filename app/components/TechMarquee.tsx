'use client';

import { useEffect } from 'react';
import styles from './TechMarquee.module.css';

export default function TechMarquee() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAnimation = async () => {
      const { gsap } = await import('gsap');
      
      const marquee = document.querySelector('.marquee-wrapper');
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          ease: "none",
          duration: 25,
          repeat: -1
        });
      }
    };

    initAnimation();
  }, []);

  const techs = ['REACT.JS', 'NEXT.JS', 'NODE.JS', 'TYPESCRIPT', 'AWS', 'GSAP'];
  const doubledTechs = [...techs, ...techs];

  return (
    <div className={styles.marqueeContainer}>
      <div className="marquee-wrapper" style={{display: 'flex', whiteSpace: 'nowrap'}}>
        {doubledTechs.map((tech, i) => (
          <div key={i} className={styles.marqueeItem}>
            <div className={styles.marqueeDot}></div>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}