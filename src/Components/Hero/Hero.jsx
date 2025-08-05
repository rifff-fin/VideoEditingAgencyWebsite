import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500); // Delay for smooth fade-in

    // Track Mouse Movement for Background Effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMouseX(x);
      setMouseY(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="hero"
      style={{ background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(50, 255, 50, 0.4), rgba(0, 10, 0, 1))` }}
    >
      <h1 className={`tagline ${fadeIn ? "fade-in" : ""}`}>
        Your all-in-one video editing solution.
      </h1>

      {/* Button (Positioned Below the Text) */}
      <div className="button-container">
        <button className="btn">Explore more</button>
      </div>
    </div>
  );
};

export default Hero;
