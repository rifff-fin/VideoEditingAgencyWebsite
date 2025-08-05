import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css";

const statsFont = "Poppins, sans-serif"; // Global font setting

const cards = [
  { title: "VIRAL EDITS", value: "200%", description: "VIEWS INCREASE" },
  { title: "THUMBNAILS", value: "15%", description: "CTR INCREASE" },
  { title: "ENGAGING TITLE", value: "10%", description: "MORE CLICKS" },
  { title: "SEO", value: "30%", description: "MORE REACH" },
  { title: "FIRE HOOKS", value: "5x", description: "MORE ENGAGEMENT" },
];

const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const scrollSpeed = 1.5; // Adjust for smoothness

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current && !isHovered) {
        carouselRef.current.scrollLeft += scrollSpeed;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 15);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        ref={carouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...cards, ...cards, ...cards].map((card, index) => (
          <div key={index} className="card">
            <h2>{card.title}</h2>
            <p className="value">{card.value}</p>
            <p className="description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
