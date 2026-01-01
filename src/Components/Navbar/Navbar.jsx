import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenu(false);
    }
  };

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="nav-logo" onClick={() => scrollToSection('hero')}>
        <img src={logo} alt="Artographica Logo" />
      </div>
      
      <ul className={mobileMenu ? 'nav-menu active' : 'nav-menu'}>
        <li onClick={() => scrollToSection('hero')}>Home</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('services')}>What We Provide</li>
        <li onClick={() => scrollToSection('about')}>Who We Are</li>
        <li>
          <button className="nav-btn" onClick={() => scrollToSection('contact')}>
            Contact Us
          </button>
        </li>
      </ul>
      
      <img 
        src={menu_icon} 
        alt="Menu" 
        className="menu-icon" 
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
