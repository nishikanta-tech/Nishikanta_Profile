
import { useState, useEffect } from 'react';

import { Github,Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Palette, Menu, X } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check user's preference or stored theme
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
           (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
    // Handle scroll for navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  const projects = [
    {
      id: 1,
      title: "Online Marketplace",
      description: "Full-featured online store with shopping cart and payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
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
    { name: "Contact", href: "#contact" },
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
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          
          {/* Desktop Menu */}
          <div className="nav-desktop">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
            <button 
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="mobile-nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Nishikanta</span>
            </h1>
            <h2 className="hero-subtitle">
              MERN Stack Developer
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
            </div>
            <div className="social-links">
              <a 
                href="https://github.com/nishikanta" 
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
                src="/src/assets/Profile.png"
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
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map(skill => (
            <div key={skill} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section dark-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>nishikanta394@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 9668477412</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Bhubaneswar, Odisha</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your name" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Your email" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Nishikanta. All rights reserved.</p>
        <p className="footer-sub">Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
