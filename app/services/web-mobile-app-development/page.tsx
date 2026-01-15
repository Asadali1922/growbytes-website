'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle, Code2, Cpu, Globe, Layers, Smartphone, Terminal } from 'lucide-react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './service.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- CONTENT DATA (FROM UPLOADED DOC) ---

const servicesData = [
  // Mobile
  { id: 2, title: 'React Native App', category: 'Mobile', desc: 'Build native iOS and Android apps from one codebase. True native performance. 40% faster development.', link: 'Explore React Native' },
  { id: 3, title: 'Flutter App', category: 'Mobile', desc: 'Beautiful mobile apps with Flutter. Single codebase. Stunning UI. 35% faster than native.', link: 'View Flutter Development' },
  { id: 4, title: 'iOS Development', category: 'Mobile', desc: 'Native iOS apps built with Swift. Optimized for iPhone, iPad, Apple Watch. Full platform capabilities.', link: 'Build Your iOS App' },
  { id: 5, title: 'Android Development', category: 'Mobile', desc: 'Native Android apps built with Kotlin. Access 4B+ potential users. Material Design 3.', link: 'Start Android Development' },
  { id: 11, title: 'Cross-Platform App', category: 'Mobile', desc: 'Build once. Deploy everywhere. Web, iOS, Android, Desktop. One codebase. 50% faster.', link: 'Go Cross-Platform' },
  { id: 15, title: 'On-Demand App', category: 'Mobile', desc: 'Uber-like, DoorDash-like platforms. Real-time matching, payments, ratings. Scale to millions.', link: 'Build On-Demand App' },
  
  // Web & Frontend
  { id: 1, title: 'React Development', category: 'Web', desc: 'Scalable web apps. Component-based architecture handling 1000+ concurrent users.', link: 'Learn More' },
  { id: 6, title: 'Progressive Web Apps', category: 'Web', desc: 'Apps that work like native apps in browsers. Offline capability. 75% cheaper than native.', link: 'Explore PWAs' },
  { id: 7, title: 'SaaS Development', category: 'Web', desc: 'Multi-tenant platforms. Subscription billing. Recurring revenue. Scalable architecture.', link: 'Build Your SaaS' },
  { id: 19, title: 'Laravel Development', category: 'Web', desc: 'Full-featured PHP framework. Rapid development. E-commerce sites, CMS, APIs.', link: 'Develop with Laravel' },
  
  // Backend & Tech Stack
  { id: 8, title: 'Node.js Development', category: 'Backend', desc: 'Fast, scalable backend. Real-time features. High concurrency. Express & NestJS.', link: 'Develop Node.js' },
  { id: 18, title: 'Python Development', category: 'Backend', desc: 'Django, FastAPI, Flask. Perfect for data-heavy apps, AI integration, ML.', link: 'Build with Python' },
  { id: 10, title: 'API Development', category: 'Backend', desc: 'REST or GraphQL. Third-party integrations. Real-time data flow. 1000+ req/sec.', link: 'Develop APIs' },
  { id: 20, title: 'MEAN Stack', category: 'Backend', desc: 'MongoDB, Express, Angular, Node.js. Full-stack JavaScript. Real-time data.', link: 'Build MEAN App' },
  { id: 21, title: 'MERN Stack', category: 'Backend', desc: 'MongoDB, Express, React, Node.js. The most popular modern stack. Fast & scalable.', link: 'Build MERN App' },

  // Enterprise & Specialized
  { id: 9, title: 'Enterprise App', category: 'Enterprise', desc: 'Mission-critical apps. Scalability, security, compliance. 99.9% uptime SLA.', link: 'Explore Enterprise' },
  { id: 13, title: 'FinTech App', category: 'Specialized', desc: 'Secure financial apps. PCI-DSS compliant. Payment processing. Handle millions.', link: 'Build FinTech' },
  { id: 14, title: 'Healthcare App', category: 'Specialized', desc: 'HIPAA-compliant. Patient data security, telemedicine, EHR. End-to-end encryption.', link: 'Develop Healthcare' },
  { id: 88, title: 'MVP Development', category: 'Specialized', desc: 'Build fast. Get to market in weeks. Validate with real users. Launch 60% faster.', link: 'Start MVP' },
  { id: 12, title: 'Custom Software', category: 'Specialized', desc: 'Unique solutions for unique needs. Competitive advantage through custom features.', link: 'Build Custom' },
  { id: 16, title: 'App Maintenance', category: 'Specialized', desc: 'Bug fixes, performance optimization, 24/7 support. Keep your app running smoothly.', link: 'Get Support' },
];

const caseStudies = [
  { 
    title: "SaaS Platform", 
    stat: "$50K MRR", 
    desc: "From idea to $50K MRR in 12 months. React frontend, Node.js backend. 100+ paying customers.", 
    tags: ["SaaS", "React", "Node.js"] 
  },
  { 
    title: "FinTech App", 
    stat: "$2M+ GMV", 
    desc: "Marketplace connecting 5,000+ sellers. Secure banking dashboard with 0 downtime.", 
    tags: ["FinTech", "Next.js", "Security"] 
  },
  { 
    title: "Healthcare Portal", 
    stat: "10k+ Patients", 
    desc: "HIPAA compliant telemedicine solution. Reduced wait times by 60%. End-to-end encryption.", 
    tags: ["Health", "React Native", "HIPAA"] 
  },
  { 
    title: "Delivery Network", 
    stat: "1M+ Orders", 
    desc: "Real-time tracking for 50k users. Flutter mobile app with high-performance backend.", 
    tags: ["Mobile", "Flutter", "Maps"] 
  },
];

const processSteps = [
  { title: "Discovery & Architecture", time: "1-2 Weeks", desc: "Understand needs. Design architecture. Plan development." },
  { title: "Design & Prototyping", time: "1-2 Weeks", desc: "Create UI/UX designs. Interactive prototypes. Approval before coding." },
  { title: "Agile Development", time: "4-12 Weeks", desc: "Build the app. Regular demos (Sprints). Feedback drives iteration." },
  { title: "Testing & QA", time: "2 Weeks", desc: "QA testing, performance optimization, security audit, app store prep." },
  { title: "Launch & Growth", time: "Ongoing", desc: "Launch. Monitor performance. Ongoing support and feature updates." },
];

const faqs = [
  { q: "How long does app development take?", a: "Simple apps: 2-3 months. Medium: 4-6 months. Complex: 6-12 months. We provide an exact timeline after the Discovery phase." },
  { q: "What is the cost?", a: "Simple apps range $20K-$50K. Medium $50K-$150K. Complex enterprise solutions $150K+. We offer detailed estimates after requirements discussion." },
  { q: "Can you develop web AND mobile?", a: "Yes. We specialize in cross-platform technologies like React Native and Flutter to deploy Web, iOS, and Android from a single codebase." },
  { q: "Do you offer maintenance?", a: "Yes, we handle bug fixes, performance monitoring, and security updates post-launch with 24/7 SLA support packages." },
  { q: "How do you ensure security?", a: "Security by design. We implement encryption, secure auth (OAuth/JWT), regular audits, and ensure compliance (HIPAA, PCI-DSS) where applicable." },
  { q: "Do you work with existing code?", a: "Yes. We can audit your existing codebase, fix legacy debt, and implement new features or refactor for scale." },
];

const industries = [
  { name: 'E-Commerce', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80' },
  { name: 'SaaS', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80' },
  { name: 'FinTech', img: 'https://images.unsplash.com/photo-1565514020176-dbf2277f072e?auto=format&fit=crop&q=80' },
  { name: 'Healthcare', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80' },
  { name: 'Real Estate', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80' },
  { name: 'EdTech', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80' },
  { name: 'Travel', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80' },
  { name: 'Automotive', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80' },
];

const techStack = {
  Frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  Mobile: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'],
  Backend: ['Node.js', 'Python', 'Java', 'Go', 'Rust'],
  Database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  Cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes']
};

export default function WebMobileServicePage() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeTechTab, setActiveTechTab] = useState('Frontend');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Filter Services logic
  const categories = ['All', 'Mobile', 'Web', 'Backend', 'Enterprise', 'Specialized'];
  const filteredServices = activeTab === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  useEffect(() => {
    // Reveal Animations
    const animElements = document.querySelectorAll('.animate-up');
    animElements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" }
        }
      );
    });
  }, []);

  return (
    <>
      <Header />
      
      <main className={styles.servicePage}>
        
        {/* --- HERO SECTION --- */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.gridTwo}>
              <div className="animate-up">
                <div className={styles.badge}>Web & Mobile App Development</div>
                <h1 className={styles.headingXl}>
                  Engineering <br />
                  <span className={styles.textGradient}>Digital Excellence</span>
                </h1>
                <p className={styles.subText}>
                  We build scalable, high-performance applications designed to dominate markets. 
                  From SaaS platforms to native mobile apps. Zero fluff. Just clean code and real results.
                </p>
                <div style={{marginTop: '40px', display: 'flex', gap: '20px'}}>
                  <button className={styles.btnPrimary} onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                    Start Your Project
                  </button>
                  <button className={styles.btnSecondary} onClick={() => document.getElementById('work')?.scrollIntoView()}>
                    View Case Studies
                  </button>
                </div>
              </div>
              
              <div className={`${styles.heroVisual} animate-up`}>
                <div className={styles.codeBlock}>
                  <div><span className={styles.tag}>import</span> <span className={styles.highlight}>{`{ Growth }`}</span> <span className={styles.tag}>from</span> <span className={styles.attr}>'@growbytes/core'</span>;</div>
                  <br/>
                  <div><span className={styles.tag}>const</span> <span className={styles.highlight}>App</span> = <span className={styles.highlight}>()</span> <span className={styles.tag}>{`=>`}</span> {`{`}</div>
                  <div style={{paddingLeft: '20px'}}>
                    <span className={styles.tag}>return</span> (
                  </div>
                  <div style={{paddingLeft: '40px'}}>
                    {`<ScalablePlatform>`}<br/>
                    &nbsp;&nbsp;{`<Security level="enterprise" />`}<br/>
                    &nbsp;&nbsp;{`<Performance score={100} />`}<br/>
                    &nbsp;&nbsp;{`<UserExp type="premium" />`}<br/>
                    {`</ScalablePlatform>`}
                  </div>
                  <div style={{paddingLeft: '20px'}}>)</div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- LOGO SLIDER --- */}
        <section className={styles.logoSliderSection}>
          <div className={styles.container}>
            <div className={styles.logoSliderContainer}>
              <div className={styles.logoSliderTrack}>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '20px', fontWeight: 'bold', color: '#000'}}>Michaels</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '20px', fontWeight: 'bold', color: '#0071ce'}}>Walmart</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '20px', fontWeight: 'bold', color: '#000'}}>POLITICO</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000'}}>DreamWorks</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '20px', fontWeight: 'bold', color: '#000'}}>SONY</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000'}}>TISSOT</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000'}}>CONVERSE</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000'}}>Ray-Ban</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '16px', fontWeight: 'bold', color: '#fff', background: '#000', padding: '4px 8px', borderRadius: '4px'}}>WEB</span>
                </div>
                
                {/* Duplicate for seamless loop */}
                <div className={styles.logoItem}>
                  <span style={{fontSize: '20px', fontWeight: 'bold', color: '#000'}}>Michaels</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '20px', fontWeight: 'bold', color: '#0071ce'}}>Walmart</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '20px', fontWeight: 'bold', color: '#000'}}>POLITICO</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000'}}>DreamWorks</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '20px', fontWeight: 'bold', color: '#000'}}>SONY</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000'}}>TISSOT</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000'}}>CONVERSE</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '18px', fontWeight: 'bold', color: '#000'}}>Ray-Ban</span>
                </div>
                <div className={styles.logoItem}>
                  <span style={{fontSize: '16px', fontWeight: 'bold', color: '#fff', background: '#000', padding: '4px 8px', borderRadius: '4px'}}>WEB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.problemSection}`}>
          <div className={styles.container}>
            <div className={styles.gridTwo}>
              <div className="animate-up">
                <h2 className={styles.headingLg}>Why Custom Development Matters</h2>
                <p className={styles.subText}>
                  Off-the-shelf solutions fail at scale. No-code platforms hit performance walls. Cheap developers deliver technical debt.
                  <br /><br />
                  <span style={{color: 'white', fontWeight: 'bold'}}>You need software that evolves with your ambition.</span>
                </p>
                <div className={styles.problemCard}>
                  <h3 style={{color: '#fff', fontSize: '20px', marginBottom: '10px'}}>The GrowBytes Standard</h3>
                  <ul style={{listStyle: 'none', padding: 0, color: '#888'}}>
                    <li style={{marginBottom: '10px', display: 'flex', gap: '10px'}}><CheckCircle size={20} color="#39FF14"/> Scalable Microservices Architecture</li>
                    <li style={{marginBottom: '10px', display: 'flex', gap: '10px'}}><CheckCircle size={20} color="#39FF14"/> API-First Design</li>
                    <li style={{display: 'flex', gap: '10px'}}><CheckCircle size={20} color="#39FF14"/> Enterprise-Grade Security</li>
                  </ul>
                </div>
              </div>
              <div className="animate-up" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div style={{background: '#111', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)'}}>
                   <Layers size={40} color="#39FF14" style={{marginBottom: '20px'}} />
                   <h4 style={{color: 'white', fontSize: '18px'}}>Scalability</h4>
                   <p style={{color: '#666', fontSize: '14px', marginTop: '10px'}}>Built to handle millions of users without breaking.</p>
                </div>
                <div style={{background: '#111', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)'}}>
                   <Code2 size={40} color="#39FF14" style={{marginBottom: '20px'}} />
                   <h4 style={{color: 'white', fontSize: '18px'}}>Clean Code</h4>
                   <p style={{color: '#666', fontSize: '14px', marginTop: '10px'}}>Maintainable, documented, and tested.</p>
                </div>
                <div style={{background: '#111', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)'}}>
                   <Smartphone size={40} color="#39FF14" style={{marginBottom: '20px'}} />
                   <h4 style={{color: 'white', fontSize: '18px'}}>Cross-Platform</h4>
                   <p style={{color: '#666', fontSize: '14px', marginTop: '10px'}}>Web, iOS, and Android from unified logic.</p>
                </div>
                <div style={{background: '#111', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)'}}>
                   <Cpu size={40} color="#39FF14" style={{marginBottom: '20px'}} />
                   <h4 style={{color: 'white', fontSize: '18px'}}>Performance</h4>
                   <p style={{color: '#666', fontSize: '14px', marginTop: '10px'}}>Optimized for speed and SEO.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICES GRID (BENTO STYLE) --- */}
        <section className={styles.section} id="services">
          <div className={styles.container}>
            <div className="text-center animate-up" style={{marginBottom: '60px'}}>
              <h2 className={styles.headingLg}>Our Development Services</h2>
              <p className={styles.subText} style={{margin: '0 auto'}}>Comprehensive solutions for every stage of your digital growth.</p>
            </div>

            <div className={`${styles.filterContainer} animate-up`}>
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`${styles.filterBtn} ${activeTab === cat ? styles.active : ''}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.servicesGrid}>
              {filteredServices.map((service, idx) => (
                <div key={idx} className={`${styles.serviceCard} animate-up`}>
                  <div style={{marginBottom: '20px', color: '#39FF14', opacity: 0.8}}>
                    {service.category === 'Mobile' ? <Smartphone /> : 
                     service.category === 'Web' ? <Globe /> : 
                     service.category === 'Backend' ? <Terminal /> : <Layers />}
                  </div>
                  <h3 className={styles.headingMd} style={{fontSize: '22px'}}>{service.title}</h3>
                  <p style={{color: '#888', marginBottom: '30px', flex: 1}}>{service.desc}</p>
                  <a href="#" className={styles.btnLink}>
                    {service.link} <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TECH STACK --- */}
        <section className={styles.section} style={{background: '#080808'}}>
          <div className={styles.container}>
            <h2 className={`${styles.headingLg} animate-up`}>Technology Stack</h2>
            
            <div className={`${styles.techTabsHeader} animate-up`}>
              {Object.keys(techStack).map((key) => (
                <button
                  key={key}
                  className={`${styles.techTabBtn} ${activeTechTab === key ? styles.active : ''}`}
                  onClick={() => setActiveTechTab(key)}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className={`${styles.techGrid} animate-up`}>
              {techStack[activeTechTab as keyof typeof techStack].map((tech, i) => (
                <div key={i} className={styles.techItem}>{tech}</div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CASE STUDIES --- */}
        <section className={styles.section} id="work">
          <div className={styles.container}>
             <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', marginBottom: '40px'}}>
                <h2 className={`${styles.headingLg} animate-up`}>Featured Work</h2>
                <button className={styles.btnLink} style={{fontSize: '18px'}}>View Portfolio →</button>
            </div>

            <div className={`${styles.caseScrollWrapper} animate-up`}>
              {caseStudies.map((study, idx) => (
                <div key={idx} className={styles.caseCard}>
                  <div className={styles.caseImage}>
                    {/* Placeholder for Case Study Image */}
                    <div style={{position:'absolute', bottom:'20px', left:'20px'}}>
                        {study.tags.map(t => (
                            <span key={t} style={{padding:'4px 12px', background:'black', color:'white', fontSize:'12px', borderRadius:'20px', marginRight:'8px', border:'1px solid #333'}}>{t}</span>
                        ))}
                    </div>
                  </div>
                  <div className={styles.caseContent}>
                    <div className={styles.caseStat}>{study.stat}</div>
                    <h3 className={styles.headingMd}>{study.title}</h3>
                    <p style={{color: '#888'}}>{study.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS --- */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.gridTwo}>
              <div className="animate-up">
                <h2 className={styles.headingLg}>From Concept <br/> to Production</h2>
                <p className={styles.subText}>Our agile process ensures transparency, speed, and quality at every step.</p>
              </div>
              <div className="animate-up">
                {processSteps.map((step, i) => (
                  <div key={i} className={styles.processStep}>
                    <div className={styles.processNum}>0{i+1}</div>
                    <div className={styles.processContent}>
                      <h4>{step.title}</h4>
                      <span style={{fontSize: '12px', color: '#39FF14', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px'}}>{step.time}</span>
                      <p style={{color: '#888', fontSize: '15px'}}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- INDUSTRIES --- */}
        <section className={styles.section} style={{background: '#0a0a0a'}}>
          <div className={styles.container}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '60px', gap: '40px'}}>
              <div style={{flex: 1}}>
                <h2 className="animate-up" style={{fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px', color: 'white', textAlign: 'left'}}>
                  Building <span style={{color: 'var(--color-primary)'}}>apps </span>  for every platform
                </h2>
                <p className="animate-up" style={{color: 'var(--text-muted)', fontSize: '18px', textAlign: 'left'}}>
                  From iOS to Android, we engineer applications that dominate their category
                </p>
              </div>
              <button className={styles.btnPrimary} style={{marginTop: '10px', whiteSpace: 'nowrap', flexShrink: 0}}>See All Industries</button>
            </div>
            
            <div className={styles.industryCardsGrid}>
              {industries.slice(0, 6).map((ind, i) => {
                const bgImages = [
                  'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%23039d25%22 width=%22200%22 height=%22200%22/><path fill=%22%23ffffff%22 d=%22M100 30c-20 0-35 15-35 35v20h-25v80h100V85h-25v-20c0-20-15-35-35-35m0 15c12 0 20 8 20 20v20H80V65c0-12 8-20 20-20z%22/></svg>")',
                  'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%233ddc84%22 width=%22200%22 height=%22200%22/><path fill=%22%23ffffff%22 d=%22M100 50c-30 0-55 25-55 55 0 25 15 45 35 55v25h40v-25c20-10 35-30 35-55 0-30-25-55-55-55z%22/></svg>")',
                  'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%23ff6b35%22 width=%22200%22 height=%22200%22/><path fill=%22%23ffffff%22 d=%22M60 70h80v80H60z%22/><path fill=%22%23ff6b35%22 d=%22M90 100h20v20H90z%22/></svg>")',
                  'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%2310b981%22 width=%22200%22 height=%22200%22/><path fill=%22%23ffffff%22 d=%22M100 40c-15 0-30 15-30 30v55c0 15 15 30 30 30s30-15 30-30V70c0-15-15-30-30-30m0 15c8 0 15 7 15 15v55c0 8-7 15-15 15s-15-7-15-15V70c0-8 7-15 15-15z%22/></svg>")',
                  'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%234f46e5%22 width=%22200%22 height=%22200%22/><path fill=%22%23ffffff%22 d=%22M50 60h100v90H50z%22/><path fill=%22%234f46e5%22 d=%22M60 70v70h80V70z%22/></svg>")',
                  'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%235b21b6%22 width=%22200%22 height=%22200%22/><path fill=%22%23ffffff%22 d=%22M60 50h80v100H60z%22/><path fill=%22%235b21b6%22 d=%22M70 60v80h60V60z%22/><circle fill=%22%23ffffff%22 cx=%22100%22 cy=%22100%22 r=%2215%22/></svg>")'
                ];
                
                return (
                  <div key={i} className={`${styles.industryCardNew} animate-up`} style={{backgroundImage: bgImages[i]}}>
                    <h3 style={{color: 'white', fontSize: '24px', fontWeight: 700, marginBottom: '12px', textAlign: 'left'}}>{ind.name} App</h3>
                    <p style={{color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.6', textAlign: 'left'}}>
                      {i === 0 && 'Native iOS app development with SwiftUI and performance optimization for Apple ecosystem.'}
                      {i === 1 && 'Powerful Android applications with Kotlin and Java, designed for speed and responsiveness.'}
                      {i === 2 && 'E-commerce platforms with seamless payment integration and inventory management.'}
                      {i === 3 && 'HIPAA-compliant healthcare solutions with secure patient data and telemedicine features.'}
                      {i === 4 && 'Property management and real estate platforms with virtual tours and booking systems.'}
                      {i === 5 && 'Educational technology and learning management systems for modern classrooms.'}
                    </p>
                  </div>
                );
              })}\n            </div>
          </div>
        </section>

        {/* --- FAQs --- */}
        <section className={styles.section}>
          <div className={styles.container} style={{maxWidth: '1000px'}}>
            <h2 className={`${styles.headingLg} text-center animate-up`} style={{marginBottom: '50px'}}>Frequently Asked Questions</h2>
            {faqs.map((item, i) => (
              <div key={i} className={`${styles.accordionItem} animate-up`}>
                <button 
                  className={styles.accordionTrigger} 
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  {item.q}
                  <span style={{color: '#000000', fontSize: '28px'}}>{faqOpen === i ? '−' : '+'}</span>
                </button>
                {faqOpen === i && (
                    <div className={styles.accordionContent}>
                        {item.a}
                    </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA --- */}
        <div className={styles.container}>
          <div className={`${styles.finalCta} animate-up`}>
            <div className={styles.glowBlob}></div>
            <div style={{position: 'relative', zIndex: 2}}>
              <h2 style={{fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: 'white', marginBottom: '20px'}}>Ready to Build Your Next Great App?</h2>
              <p style={{fontSize: '18px', color: 'rgba(255,255,255,0.8)', margin: '0 auto 40px', maxWidth: '600px', lineHeight: '1.6'}}>
                Lets talk about your project. Timeline? Budget? Well figure out if were a good fit.
              </p>
              <button className={styles.btnPrimary} onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
        
        <div style={{height: '100px'}}></div>

      </main>

      <Footer />
    </>
  );
}