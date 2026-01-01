import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [fadeIn, setFadeIn] = useState(false);
  const fullText = 'Your all-in-one video editing solution.';

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 300);
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="hero">
      <div className="hero-gradient"></div>
      
      <h1 className={`hero-title ${fadeIn ? 'fade-in' : ''}`}>
        {text}
        <span className="cursor-blink">|</span>
      </h1>

      <button className="hero-btn" onClick={scrollToContact}>
        Explore More
        <span className="btn-glow"></span>
      </button>
    </div>
  );
};

export default Hero;
