import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header-block">
      <div className="brand">
        <div className="brand-text-container">
          <div className="brand-text">
            Snow Path Immigration Consultancy
          </div>
        </div>
      </div>

      <button 
        className={`hamburger-menu ${isMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-container ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="nav-wrapper">
          <div onClick={() => scrollToSection('section1')} className="nav">Home</div>
          <div onClick={() => scrollToSection('section2')} className="nav">About Us</div>
          <div onClick={() => scrollToSection('section3')} className="nav">Services</div>
          <div onClick={() => scrollToSection('section5')} className="nav">Contact Us</div>
        </div>

        <div className="contact-info">
          <a href="mailto:info@snowpathimmigration.com" className="email-link" aria-label="contact email">
            <span className="phone-icon"></span>
            <span>info@snowpathimmigration.com</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
