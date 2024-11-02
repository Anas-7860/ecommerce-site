import React, { useState, useEffect } from 'react';
import jersey from '../Assets/soccer.png';
import hero1 from '../Assets/hero.png'; // Add more images
import hero2 from '../Assets/hero1.png';
import hero3 from '../Assets/hero2.png';
import hero4 from '../Assets/hero3.png';
import hero5 from '../Assets/hero4.png';
import hero6 from '../Assets/hero5.png';
import arrow from '../Assets/right-arrow.png';
import './Hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [hero1, hero3,hero4,hero5,hero6]; // Array of images

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [heroImages.length]);

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-jersey-icon">
            <p>New</p>
            <img src={jersey} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="latest-collection">
          <p>Latest Collection</p>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        {/* Use the current image from the array */}
        <img src={heroImages[currentImageIndex]} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
