import React, { useEffect, useRef } from "react";
import "./Reviews.css";
import user_1 from "../../assets/user-1.jpg";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.jpg";
import user_4 from "../../assets/user-4.jpg";
import user_5 from "../../assets/user-5.jpg";
import user_6 from "../../assets/user-6.jpg";
import user_7 from "../../assets/user-7.jpg";

const reviews = [
  { user: user_1, name: "Anthony Cassarino", location: "Content creator, Founder of Chronometer Check", review: "Working with Artographica is a pleasure. They are talented, responsive, open to feedback, deliver quickly, and are always respectful and courteous. Highly recommend." },
  { user: user_2, name: "Bryan Villarosa", location: "Licensed Realtor and Digital Marketer", review: "Great work. Fast, efficient, creative, and communicative. Will hire again." },
  { user: user_3, name: "Rocco Leo Gaglioti", location: "Actor and Television Director, Founder and CEO of FNL Network", review: "I give Artographica a 5-star review purely because this team puts a lot of time and energy into their work and they are also open to changes." },
  { user: user_4, name: "Praline Patisserie", location: "Pastry Shop", review: "Artographica was fantastic to work with. They delivered high-quality content that matched our brand vision perfectly." },
  { user: user_5, name: "Dan Korsby", location: "Content Creator and Online Coach", review: "Excellent work! Always professional, creative, and delivers on time. Would definitely collaborate again." },
  { user: user_6, name: "Gavi Wolf", location: "CEO and Founder at Indiewalls", review: "Artographica brought our ideas to life with exceptional creativity and skill. Highly satisfied with the results." },
  { user: user_7, name: "Ayus Paudel", location: "Founder and Entrepreneur", review: "Very reliable and skilled professional. The outcomes exceeded our expectations. Strongly recommend." },
];

const Reviews = () => {
  const reviewRef = useRef(null);

  useEffect(() => {
    const wrapper = reviewRef.current;
    if (wrapper) {
      const clonedNodes = [...wrapper.children];
      clonedNodes.forEach((node) => {
        const clone = node.cloneNode(true);
        wrapper.appendChild(clone);
      });
    }
  }, []);

  return (
    <div className="reviews-container">
      <div className="reviews-wrapper" ref={reviewRef}>
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <img src={review.user} alt={review.name} className="user-img" />
              <div className="review-info">
                <h3>{review.name}</h3>
                <p className="location">{review.location}</p>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
