import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Rocket, 
  MessageSquare, 
  ChevronRight, 
  Share2, 
  Mail,
  Zap,
  TrendingUp,
  Store,
  Camera,
  Triangle,
  Terminal,
  Briefcase,
  Award,
  ExternalLink
} from 'lucide-react';

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="gradient-text">
      {texts[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </span>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="app">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* Navigation */}
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-content">
          <a href="#" className="logo">
            KEVIN<span className="gradient-text">SAMUEL</span>.T
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#certificates">Certificates</a>
            <a href="#services">Expertise</a>
            <a href="#about">Vision</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="mailto:kevinsamuelyt04@gmail.com" className="btn btn-primary">Let's Talk</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="grid grid-2 hero-grid" style={{ alignItems: 'center' }}>
            <div className="hero-header">
              <motion.div 
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="glass-card image-container">
                  <img 
                    src="/images/profile.png" 
                    alt="Profile" 
                  />
                </div>
              </motion.div>

              <motion.div 
                className="hero-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="hero-badge">Informatics Student | AI Engineer | Software Developer & Android Developer</span>
                <h1>
                  Hi, I'm <span className="gradient-text">Kevin Samuel Tampubolon</span> <br />
                  <Typewriter texts={["Digitalizing the Future", "Building Scalable Apps", "Innovating with AI"]} />
                </h1>
              </motion.div>
            </div>
            
            <div className="hero-body">
              <p>
                Saya membantu bisnis bertransformasi secara digital melalui solusi AI yang cerdas 
                dan platform modern yang scalable.
              </p>
              
              <div className="hero-socials">
                <a href="https://github.com/Kevinsamt" target="_blank" rel="noopener noreferrer" title="Github"><Terminal size={20} /></a>
                <a href="https://linkedin.com/in/kevin-samuel-tampubolon-44599a292" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Briefcase size={20} /></a>
                <a href="https://www.instagram.com/vinsam04/" target="_blank" rel="noopener noreferrer" title="Instagram"><Camera size={20} /></a>
                <a href="https://vercel.com/Kevinsamt" target="_blank" rel="noopener noreferrer" title="Vercel"><Triangle size={20} /></a>
              </div>

              <div className="hero-btns">
                <a href="#projects" className="btn btn-primary">
                  View Projects <ChevronRight size={20} />
                </a>
                <a href="#about" className="btn btn-outline">My Vision</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services">
        <div className="container">
          <motion.div {...fadeIn} style={{ marginBottom: '4rem' }}>
            <div className="section-eyebrow">What I Do</div>
            <h2>Expertise & <span className="gradient-text">Impact</span></h2>
            <p style={{ marginTop: '1rem', maxWidth: '520px' }}>
              Fokus pada pengembangan teknologi yang tidak hanya canggih, tapi juga memberikan dampak nyata bagi masyarakat.
            </p>
          </motion.div>

          <div className="grid grid-3">
            {[
              { icon: <Cpu size={28} />, color: 'var(--primary)', bg: 'rgba(56,189,248,0.1)', title: 'AI Development', desc: 'Membangun sistem AI untuk analisis bisnis dan otomasi proses yang membantu pengambilan keputusan lebih cepat.' },
              { icon: <Store size={28} />, color: 'var(--secondary)', bg: 'rgba(167,139,250,0.1)', title: 'Modern Enterprise', desc: 'Menciptakan solusi digital yang terjangkau dan efektif untuk membantu bisnis bersaing di era industri 4.0.' },
              { icon: <Globe size={28} />, color: 'var(--accent)', bg: 'rgba(251,113,133,0.1)', title: 'Full-Stack Web', desc: 'Berpengalaman dengan React dan ekosistem modern untuk membangun platform web yang interaktif dan responsif.' },
            ].map((item, i) => (
              <motion.div key={item.title} className="glass-card" {...fadeIn} transition={{ delay: i * 0.1 }}>
                <div className="expertise-icon" style={{ background: item.bg, color: item.color }}>
                  {item.icon}
                </div>
                <h3 style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <motion.div {...fadeIn} style={{ marginBottom: '4rem' }}>
            <div className="section-eyebrow">Career</div>
            <h2>Work <span className="gradient-text">Experience</span></h2>
            <p style={{ marginTop: '1rem', maxWidth: '480px' }}>Perjalanan profesional saya dalam menerapkan teknologi untuk solusi nyata.</p>
          </motion.div>

          <div className="glass-card" style={{ padding: '3rem' }}>
            <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#fff', padding: '0.5rem', borderRadius: '12px', border: '2px solid #ef4444' }}>
                    {/* Custom PMI Style Logo */}
                    <svg width="40" height="40" viewBox="0 0 100 100">
                      <rect x="40" y="10" width="20" height="80" fill="#ef4444" />
                      <rect x="10" y="40" width="80" height="20" fill="#ef4444" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.8rem' }}>Magang Teknologi Informasi</h3>
                    <p style={{ color: '#ef4444', fontWeight: '600' }}>Palang Merah Indonesia (PMI)</p>
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Selama masa magang, saya berkontribusi dalam digitalisasi proses operasional, 
                  termasuk pengelolaan data donor darah dan pengembangan solusi digital untuk meningkatkan efisiensi 
                  layanan kemanusiaan. Saya juga terlibat langsung dalam berbagai kegiatan lapangan.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                  <div className="glass-card" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Fokus Utama</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Digitalisasi Layanan & Manajemen Data</p>
                  </div>
                  <div className="glass-card" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Hasil</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Laporan Magang & Efisiensi Sistem</p>
                  </div>
                </div>

                <a 
                  href="/pengalaman/PALANG MERAH INDONESIA/IF B SR_KEVIN SAMUEL TAMPUBOLON_LAPORAN MAGANG.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Lihat Laporan Magang (PDF) <ExternalLink size={18} />
                </a>
              </div>

              <div className="slideshow-container" style={{ position: 'relative', height: '400px', overflow: 'hidden', borderRadius: '20px' }}>
                <motion.div 
                  className="slides"
                  animate={{ x: [0, -1100] }}
                  transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{ display: 'flex', width: '1200%', height: '100%' }}
                >
                  {[
                    "Digital solutions.png",
                    "KEGIATAN DONOR DARAH (1).png",
                    "KEGIATAN DONOR DARAH (2).png",
                    "Salinan dari KEGIATAN DONOR DARAH (1).png",
                    "Salinan dari KEGIATAN DONOR DARAH (12).png",
                    "Salinan dari KEGIATAN DONOR DARAH (15).png",
                    "Salinan dari KEGIATAN DONOR DARAH (3).jpg",
                    "WhatsApp Image 2025-12-18 at 13.19.45.jpeg",
                    "WhatsApp Image 2025-12-19 at 09.48.53.jpeg",
                    "WhatsApp Image 2025-12-19 at 10.01.18.jpeg",
                    "WhatsApp Image 2025-12-19 at 10.05.54.jpeg",
                    "jid (1).png"
                  ].map((name, i) => (
                    <div key={i} style={{ width: '8.33%', height: '100%', padding: '0 5px' }}>
                      <img 
                        src={`/pengalaman/PALANG MERAH INDONESIA/${name}`} 
                        alt="PMI Experience" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} 
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <motion.div {...fadeIn} style={{ marginBottom: '4rem' }}>
            <div className="section-eyebrow">Portfolio</div>
            <h2>Featured <span className="gradient-text">Projects</span></h2>
          </motion.div>

          <div className="grid grid-3">
            {[
              { 
                title: "SIMPAKAB", 
                type: "MOBILE APP",
                desc: "Aplikasi digital untuk mempermudah peminjaman dan pengelolaan alat kebidanan secara terintegrasi.", 
                image: "/images/simpakab.png",
                link: "https://simpakab-download.vercel.app",
                tech: ["Flutter", "Supabase"],
                color: "var(--primary)"
              },
              { 
                title: "Bettatumedan", 
                type: "WEB PLATFORM",
                desc: "Platform digital untuk komunitas dan bisnis lokal dengan fitur manajemen yang lengkap.", 
                image: "/images/Bettatumedan.jpg",
                link: "https://www.snadigital.shop/",
                tech: ["Next.js", "Tailwind"],
                color: "var(--secondary)"
              },
              { 
                title: "Eduvation App", 
                type: "EDUTECH",
                desc: "Solusi digital inovatif untuk meningkatkan efektivitas belajar dan manajemen pendidikan.", 
                image: "/images/ai-analysis.png",
                link: "https://eduv-app.vercel.app/",
                tech: ["AI", "React", "Node.js"],
                color: "var(--accent)"
              }
            ].map((project, i) => (
              <motion.div key={project.title} className="glass-card" {...fadeIn} transition={{ delay: i * 0.1 }} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="card-image" style={{ height: 'auto', overflow: 'hidden' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.7rem', color: project.color, fontWeight: 600 }}>{project.type}</span>
                    <ExternalLink size={16} color="var(--text-secondary)" />
                  </div>
                  <h3 style={{ fontSize: '1.2rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: '1rem 0', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {project.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {project.tech.map(t => (
                      <span key={t} style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Visit Project <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates">
        <div className="container">
          <motion.div {...fadeIn} style={{ marginBottom: '4rem' }}>
            <div className="section-eyebrow">Credentials</div>
            <h2>My <span className="gradient-text">Certifications</span></h2>
            <p style={{ marginTop: '1rem', maxWidth: '480px' }}>Pengakuan atas dedikasi dan keahlian yang telah saya capai di berbagai bidang teknologi.</p>
          </motion.div>

          <div className="grid grid-3">
            {[
              { title: "ASEAN DSE 2025", issuer: "ASEAN Foundation", date: "2025", pdf: "/certificates/Certificate_ASEAN_DSE_2025.pdf" },
              { title: "AI Ethics", issuer: "IBM / SkillsBuild", date: "2025", pdf: "/certificates/AI_Ethics.pdf" },
              { title: "Belajar Dasar AI", issuer: "Dicoding Indonesia", date: "2024", pdf: "/certificates/sertifikat_course_653_5793401_300426105743.pdf" },
              { title: "Pengantar AI Generatif", issuer: "Google Cloud", date: "2025", pdf: "/certificates/Pengantar_AI_Generatif.pdf" },
              { title: "Pengantar Kecerdasan Buatan", issuer: "Microsoft / LinkedIn", date: "2025", pdf: "/certificates/Pengantar_Kecerdasan_Buatan.pdf" },
              { title: "Mentoring RumahDev", issuer: "RumahDev", date: "2023", pdf: "/certificates/Kevin.pdf" }
            ].map((cert, i) => (
              <motion.div 
                key={cert.title} 
                className="glass-card" 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                style={{ padding: '1.5rem' }}
              >
                <div className="card-image" style={{ height: '180px', marginBottom: '1.2rem', overflow: 'hidden', borderRadius: '10px' }}>
                  {/* Menggunakan iframe untuk memuat konten PDF asli sebagai pratinjau */}
                  <iframe 
                    src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 'none', pointerEvents: 'none' }}
                    title={cert.title}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Award size={18} color="var(--primary)" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{cert.issuer}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{cert.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{cert.date}</span>
                  <a 
                    href={cert.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    View PDF <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="about">
        <div className="container">
          <motion.div {...fadeIn} style={{ marginBottom: '3rem' }}>
            <div className="section-eyebrow">About Me</div>
            <h2>The <span className="gradient-text">Vision</span></h2>
          </motion.div>
          <div className="grid grid-2" style={{ gap: '2rem', alignItems: 'center' }}>
            <motion.div {...fadeIn} className="glass-card" style={{ padding: '3rem' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.8' }}>
                Menyatukan kecerdasan buatan dengan solusi perangkat lunak yang berdampak nyata.
              </p>
              <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
                Visi saya adalah menjadi seorang <strong style={{ color: 'var(--text-primary)' }}>AI Innovator & Software Architect</strong> yang membangun ekosistem solusi digital cerdas dan inklusif.
                Saya berfokus pada pemanfaatan AI untuk mengotomasi proses kompleks dan menciptakan pengalaman pengguna yang mulus di berbagai platform,
                guna mempercepat transformasi digital yang berkelanjutan.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '280px',
                height: '280px',
                background: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(167,139,250,0.15))',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 80px rgba(56,189,248,0.12), 0 0 0 1px var(--border)'
              }}>
                <TrendingUp size={100} color="var(--primary)" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <motion.div {...fadeIn} style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Let's Connect</div>
            <h2 style={{ marginBottom: '1.25rem' }}>Mari <span className="gradient-text">Berkolaborasi</span></h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '3rem', lineHeight: '1.8' }}>
              Punya ide inovatif atau butuh solusi digital untuk bisnis Anda? Saya siap membantu.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
              <a href="mailto:kevinsamuelyt04@gmail.com" className="btn btn-primary">
                <Mail size={18} /> Kirim Email
              </a>
              <a href="https://www.instagram.com/vinsam04/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <MessageSquare size={18} /> Konsultasi Gratis
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
              {[
                { href: 'https://github.com/Kevinsamt', icon: <Terminal size={20} />, label: 'Github' },
                { href: 'https://linkedin.com/in/kevin-samuel-tampubolon-44599a292', icon: <Briefcase size={20} />, label: 'LinkedIn' },
                { href: 'https://www.instagram.com/vinsam04/', icon: <Camera size={20} />, label: 'Instagram' },
                { href: 'https://vercel.com/Kevinsamt', icon: <Triangle size={20} />, label: 'Vercel' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  style={{ display:'flex', alignItems:'center', justifyContent:'center', width:44, height:44, borderRadius:8, border:'1px solid var(--border)', color:'var(--text-secondary)', transition:'var(--transition)', textDecoration:'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--border-hover)'; (e.currentTarget as HTMLElement).style.color='var(--primary)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--border)'; (e.currentTarget as HTMLElement).style.color='var(--text-secondary)'; }}
                >{s.icon}</a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © 2026 Kevin Samuel Tampubolon. Built with React & Passion.
        </p>
      </footer>
    </div>
  );
};

export default App;
