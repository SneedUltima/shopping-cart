import React from 'react';
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="Hero-Section">
      <div className="Hero-Text">
        <p>
          Our mission is to provide the <span>best</span> supplements for you at
          the <span>cheapest</span> value
        </p>
        <p id="second-text">Explore our range today!</p>
        <button id="shop-button" onClick={() => navigate('/products')}>
          Shop Now!
        </button>
      </div>
      <div className="Hero-Image">
        <p>Image</p>
      </div>
    </div>
  );
};

export default HeroSection;
