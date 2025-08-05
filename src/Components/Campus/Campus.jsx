import React, { useEffect, useState, useRef } from "react";
import "./Campus.css";

const bigVideos = [
  "h4kBWO37-g0",
  "6IKz8daYvkw",
  "BJMo9j_Yjuc",
  "fTpxLqv7h84",
  "Us3jBiHTf9Q"
];

const shortVideos = [
  "8E8WTyvF0jE",
  "Lmff5UgXlhY",
  "M9dXzWCAWgM"
];

const Campus = () => {
  return (
    <div className="campus-section">
      {/* Big Format Videos */}
      <div className="video-row big-videos">
        <div className="scroll-wrapper">
          {[...bigVideos, ...bigVideos].map((id, index) => (
            <a key={index} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
              <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="Video Thumbnail" className="video-thumbnail big" />
            </a>
          ))}
        </div>
      </div>
      
      {/* Short Format Videos */}
      <div className="video-row short-videos">
        <div className="scroll-wrapper">
          {[...shortVideos, ...shortVideos].map((id, index) => (
            <a key={index} href={`https://www.youtube.com/shorts/${id}`} target="_blank" rel="noopener noreferrer">
              <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="Short Video Thumbnail" className="video-thumbnail short" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campus;