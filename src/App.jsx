// App.jsx
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Palette, Menu, X, Download, FileText, Briefcase, Award, Calendar } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
           (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Auto-typing effect state
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  
  const roles = ['MERN Stack Developer', 'React Devloper', 'Full Stack Devloper', 'Node Js Devloper'];

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  // Auto-typing effect
  useEffect(() => {
    const currentRole = roles[typingIndex % roles.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause then start deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTypingIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typingIndex, roles]);

  const projects = [
    {
      id: 1,
      title: "Online Marketplace",
      description: "Full-featured online store with shopping cart and payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      liveLink: "https://online-marketplace-project.netlify.app",
      githubLink: "https://github.com/nishikanta-tech/Online-MarketPlace"
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Firebase", "CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Weather application with forecasts and location search",
      tech: ["JavaScript", "API", "CSS"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const skills = [
    "React", "JavaScript", "CSS", "HTML", "Node.js", "Git", "REST APIs", "Responsive Design"
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const experiences = [
    {
      id: 1,
      title: "Mern Stack Trainee",
      company: "Seere Private Limited",
      period: "feb 2025 - Sep 2025",
      description: "Developed and maintained web applications using React and Node.js.",
      achievements: [
        "Increased application performance by 40%",
        "Implemented responsive designs for mobile users",
        "Reduced API response time by 30%"
      ]
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Application",
      institution: "Utkal University",
      period: "2023 - 2026",
      grade: "7.0 CGPA"
    },
    {
      id: 2,
      degree: "Intermediate (Science)",
      institution: "Charmpa College",
      period: "2021 - 2023",
      grade: "56%"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023"
    },
    {
      id: 2,
      name: "React Developer",
      issuer: "Meta",
      date: "2023"
    },
    {
      id: 3,
      name: "Node.js Backend Development",
      issuer: "Udemy",
      date: "2022"
    }
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  const handleResumeDownload = () => {
    const resumeUrl = 'https://nishikanta-resume-3-1.tiiny.site/';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Nishikanta_Jena_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Minimal Navbar - Only Menu Icon */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          
          {/* Mobile Menu Button (visible on all screens) */}
          <div className="nav-mobile">
            <button 
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
            <button 
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Full Screen Mobile Menu Overlay */}
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item, index) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="mobile-nav-link"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section with Auto-typing */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Nishikanta</span>
            </h1>
            <h2 className="hero-subtitle">
              {displayText}
              <span className="typed-cursor">|</span>
            </h2>
            <p className="hero-description">
              I create beautiful, functional web applications with modern technologies. 
              Passionate about clean code and user experience.
            </p>
            <div className="hero-buttons">
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#projects');
                }}
                className="btn-primary"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="btn-secondary"
              >
                Contact Me
              </a>
              <button 
                onClick={handleResumeDownload}
                className="btn-secondary"
              >
                <Download size={20} />
                View Resume
              </button>
            </div>
            <div className="social-links">
              <a 
                href="https://github.com/nishikanta-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nishikanta-jena-68a0052a3?originalSubdomain=in"
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:nishikanta394@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar">
              <img 
                src="https://i.pinimg.com/736x/29/40/3d/29403d457261a7f5d7a0c6f12b857189.jpg"
                alt="Nishikanta Jena - Full Stack Developer" 
                className="avatar-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="services">
          <div className="service-card">
            <div className="service-icon">
              <Code size={32} />
            </div>
            <h3 className="service-title">Frontend Development</h3>
            <p className="service-description">
              Creating responsive, accessible user interfaces with React and modern CSS.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <Database size={32} />
            </div>
            <h3 className="service-title">Backend Development</h3>
            <p className="service-description">
              Building robust APIs and server-side logic with Node.js and databases.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <Palette size={32} />
            </div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              Designing intuitive user experiences and beautiful interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section dark-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills</
