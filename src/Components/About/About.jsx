import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import aboutVideo from '../../assets/about.mp4'; 
import playIcon from '../../assets/play-icon.png';

const About = () => {
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const textContent = ` At Artographica, we don't just create content—we craft experiences. 
Our expertise in video editing turns ideas into cinematic masterpieces, designed to captivate, 
engage, and leave a lasting impact. But don't just take our word for it—our past clients say we 
move faster, deliver sharper, and elevate brands beyond expectations.

Our creative services extend beyond video, offering Audio Editing, 2D/3D Animation, Graphic Design, 
Digital Marketing, UI/UX Design, Web Development, and Podcast Production—a full suite to bring your vision to life.

We believe in accountability, precision, and results. Every frame, every pixel, every project reflects 
our dedication to excellence. At Artographica, perfection isn't just a goal—it's our standard.

Let's create something extraordinary. Your vision. Our expertise. Unmatched results.`;

    const videoRef = useRef(null);
    const aboutRef = useRef(null);

    // Typewriter Effect
    useEffect(() => {
        let i = 0;
        setText(''); // Reset text before typing starts
        const interval = setInterval(() => {
            if (i < textContent.length) {
                setText((prev) => prev + textContent.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 20); // Speed of typing
        return () => clearInterval(interval);
    }, []);

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    // Close video on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (videoRef.current && !videoRef.current.contains(event.target)) {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <section ref={aboutRef} className={`about-section ${isVisible ? 'visible' : ''}`}>
            <div className="about-text">
                <p>{text}</p>
            </div>
            <div className="about-video">
                <video
                    ref={videoRef}
                    src={aboutVideo}
                    onClick={() => {
                        if (videoRef.current.paused) {
                            videoRef.current.play();
                            setIsPlaying(true);
                        } else {
                            videoRef.current.pause();
                            setIsPlaying(false);
                        }
                    }}
                />
                {!isPlaying && (
                    <img
                        src={playIcon}
                        alt="Play"
                        className="play-icon"
                        onClick={() => {
                            videoRef.current.play();
                            setIsPlaying(true);
                        }}
                    />
                )}
            </div>
        </section>
    );
};

export default About;
