import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 510); // Simplified condition
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false): setMobileMenu(true);

  }
  return (
    <nav className={`container${sticky ? ' dark-nav' : ''}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="Company Logo" className="logo" />
      </Link>
      
      <ul className={ mobileMenu? '':'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="simple-gallery" smooth={true} offset={-300} duration={500}>Projects</Link></li>
        <li><Link to="projects" smooth={true} offset={-390} duration={500}>What We Provide</Link></li>
        <li><Link to="about" smooth={true} offset={-260} duration={500}>Who We Are</Link></li>
        <li>
          <Link to="contact" smooth={true} offset={0} duration={500} className="btn">Contact Us</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
