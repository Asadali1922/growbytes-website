'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './services.module.css';

// --- Image Placeholder Component for Design Guidance ---
const ImagePlaceholder = ({ title, guide, height = "400px" }: { title: string; guide: string; height?: string }) => (
  <div className={styles.imagePlaceholder} style={{ height }}>
    <div className={styles.placeholderContent}>
      <div className={styles.placeholderIcon}>🖼️</div>
      <h4>{title}</h4>
      <p className={styles.designGuide}><strong>Design Guide:</strong> {guide}</p>
    </div>
  </div>
);

export default function ServicesPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // 1. Hero Text Stagger
        const tl = gsap.timeline();
        tl.from(`.${styles.heroTitle} span`, { y: 100, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out" })
          .from(`.${styles.heroDesc}`, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
          .from(`.${styles.heroStats}`, { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");

        // 2. Parallax Image Reveals for Service Sections
        gsap.utils.toArray<HTMLElement>(`.${styles.serviceSection}`).forEach((section) => {
          gsap.from(section.querySelector(`.${styles.imageWrapper}`), {
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
            y: 100,
            opacity: 0.8,
            scale: 0.95
          });
        });

        // 3. Text Reveal for "Why Us"
        gsap.from(`.${styles.introText} p`, {
          scrollTrigger: {
            trigger: `.${styles.introSection}`,
            start: "top 75%",
          },
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8
        });

      }, mainRef);

      return () => ctx.revert();
    };

    initAnimations();
  }, []);

  return (
    <>
      <Header />
      <main ref={mainRef} className={styles.main}>

        {/* --- HERO SECTION --- */}
        <section className={styles.heroSection}>
          <div className={styles.heroBg}></div>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>Global Digital Transformation Partner</div>
              <h1 className={styles.heroTitle}>
                <span className="block">Architecting</span>
                <span className="block text-gradient">Digital Dominance</span>
              </h1>
              <p className={styles.heroDesc}>
                GrowBytes isn't just a dev shop. We are a full-cycle digital powerhouse. 
                We combine <strong>Fortune 500-grade engineering</strong> with <strong>performance marketing</strong> to build ecosystems that scale revenue, not just traffic.
              </p>
              
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>850+</span>
                  <span className={styles.statLabel}>Projects Delivered</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>98%</span>
                  <span className={styles.statLabel}>Client Retention</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>12+</span>
                  <span className={styles.statLabel}>Global Awards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- INTRO NARRATIVE (SEO Rich) --- */}
        <section className={styles.introSection}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.introHeading}>
                <h2>The Anti-Silo Approach</h2>
              </div>
              <div className={styles.introText}>
                <p>
                  In the modern digital landscape, fragmentation is the enemy of growth. Most enterprises struggle because their data doesn't talk to their marketing, and their marketing doesn't understand their code.
                </p>
                <p>
                  <strong>We unify the stack.</strong> By integrating high-performance custom software with AI-driven growth strategies, we create a seamless feedback loop that accelerates business outcomes. From the first line of code to the final conversion, we own the entire lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICE PILLAR 1: ENGINEERING --- */}
        <section className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceLayout}>
              <div className={styles.textContent}>
                <span className={styles.sectionNumber}>01</span>
                <h3>Enterprise Engineering & Development</h3>
                <p className={styles.serviceLead}>
                  Scalable, secure, and future-proof infrastructure built on modern tech stacks (React, Node.js, Python, AWS).
                </p>
                <div className={styles.richContent}>
                  <p>
                    We don't use templates. We engineer custom platforms designed to handle millions of concurrent users. Whether you need a high-frequency trading platform or a complex SaaS ecosystem, our code is written for <strong>security, speed, and scalability.</strong>
                  </p>
                  <ul className={styles.featureList}>
                    <li><strong>Custom Web & Mobile Apps:</strong> Native iOS/Android & PWAs.</li>
                    <li><strong>E-Commerce Architecture:</strong> Headless Shopify & Magento builds.</li>
                    <li><strong>Cloud Infrastructure:</strong> AWS/Azure migration & optimization.</li>
                    <li><strong>Legacy Modernization:</strong> Refactoring old codebases for the modern web.</li>
                  </ul>
                  <a href="/services/web-mobile-app-development" className={styles.textLink}>Explore Engineering Services →</a>
                </div>
              </div>
              <div className={styles.imageWrapper}>
                <ImagePlaceholder 
                  title="Isometric Tech Stack Visualization"
                  guide="3D Isometric illustration showing layers of code (React/Node logos) building a futuristic city structure. Use Blue/Green brand colors. Clean, glass texture."
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICE PILLAR 2: GROWTH --- */}
        <section className={`${styles.serviceSection} ${styles.reversed}`}>
          <div className="container">
            <div className={styles.serviceLayout}>
              <div className={styles.imageWrapper}>
                <ImagePlaceholder 
                  title="Growth Analytics Dashboard"
                  guide="High-fidelity UI mockup of a marketing dashboard showing rising graphs (green lines), user heatmaps, and ROI metrics. Dark mode UI with neon green accents."
                />
              </div>
              <div className={styles.textContent}>
                <span className={styles.sectionNumber}>02</span>
                <h3>Growth & Performance Marketing</h3>
                <p className={styles.serviceLead}>
                  Data-driven customer acquisition strategies that turn traffic into revenue.
                </p>
                <div className={styles.richContent}>
                  <p>
                    Beautiful code is useless without users. Our growth division acts as your revenue engine. We move beyond vanity metrics to focus on <strong>Customer Acquisition Cost (CAC)</strong> and <strong>Lifetime Value (LTV)</strong>.
                  </p>
                  <ul className={styles.featureList}>
                    <li><strong>Advanced SEO:</strong> Technical audits & content strategy for dominance.</li>
                    <li><strong>Performance PPC:</strong> Google & LinkedIn Ads optimized for ROAS.</li>
                    <li><strong>Retention Marketing:</strong> Email flows that reduce churn.</li>
                    <li><strong>Social Commerce:</strong> Turning engagement into transactions.</li>
                  </ul>
                  <a href="/services/seo-organic-growth" className={styles.textLink}>View Growth Strategies →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICE PILLAR 3: AI --- */}
        <section className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceLayout}>
              <div className={styles.textContent}>
                <span className={styles.sectionNumber}>03</span>
                <h3>AI & Business Automation</h3>
                <p className={styles.serviceLead}>
                  Operational efficiency at machine speed. Reduce overhead, increase output.
                </p>
                <div className={styles.richContent}>
                  <p>
                    The future belongs to the automated. We implement cutting-edge AI agents that handle repetitive tasks, qualify leads, and support customers 24/7—allowing your human team to focus on strategy.
                  </p>
                  <ul className={styles.featureList}>
                    <li><strong>Intelligent Chatbots:</strong> GPT-4 powered support agents.</li>
                    <li><strong>Sales Automation:</strong> Automated outreach & lead scoring.</li>
                    <li><strong>Workflow Integration:</strong> Zapier/n8n pipelines to kill busywork.</li>
                    <li><strong>Predictive Analytics:</strong> AI models to forecast market trends.</li>
                  </ul>
                  <a href="/services/ai-sales-automation" className={styles.textLink}>Discover AI Solutions →</a>
                </div>
              </div>
              <div className={styles.imageWrapper}>
                <ImagePlaceholder 
                  title="AI Neural Network Connection"
                  guide="Abstract visualization of a neural network connecting business nodes. Glowing dots and lines. A robotic hand reaching out to a human hand (digital partnership concept)."
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- PROCESS TIMELINE (Content Rich) --- */}
        <section className={styles.processSection}>
          <div className="container">
            <div className={styles.processHeader}>
              <h2>The Blueprint for Scale</h2>
              <p>Our agile methodology ensures transparency, velocity, and quality at every stage.</p>
            </div>

            <div className={styles.timelineContainer}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>01</div>
                <div className={styles.timelineContent}>
                  <h4>Discovery & Architecture</h4>
                  <p>We don't start coding until we understand the business logic. We perform technical audits, competitor analysis, and architect a roadmap aligned with your KPIs.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>02</div>
                <div className={styles.timelineContent}>
                  <h4>Agile Development</h4>
                  <p>Work happens in 2-week sprints. You get regular demos and code reviews. We prioritize the highest-value features first to get you to market faster.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>03</div>
                <div className={styles.timelineContent}>
                  <h4>Growth Injection</h4>
                  <p>Once the product is stable, we integrate analytics sensors and launch targeted campaigns. We A/B test landing pages and optimize funnels in real-time.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>04</div>
                <div className={styles.timelineContent}>
                  <h4>Scaling & Support</h4>
                  <p>Post-launch, we provide 24/7 SLA support. We monitor server load, security threats, and user behavior to continuously iterate and improve.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaWrapper}>
              <div className={styles.ctaContent}>
                <h2>Ready to engineer your success?</h2>
                <p>Stop settling for fragmented vendors. Get a unified team of 50+ engineers and marketers dedicated to your growth.</p>
                <div className={styles.ctaBtns}>
                  <button className="btn btn-primary btn-lg">Book Strategy Call</button>
                  <button className="btn btn-secondary btn-lg">View Case Studies</button>
                </div>
              </div>
              <div className={styles.ctaVisual}>
                 <ImagePlaceholder 
                  title="Team Collaboration"
                  guide="Photo of a diverse team working around a whiteboard with code and charts. High quality, professional lighting. Overlay a subtle dark gradient."
                  height="300px"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}