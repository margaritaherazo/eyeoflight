import React from 'react';
import heroImage from '../assets/imgs/hero1.jpg';

const Hero = () => {
  return (
    
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container text-center">
        <h1 className="display-4 text-white">To see your wholeness is to find your light</h1>
        <a href="/therapies" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  );
}

export default Hero;
