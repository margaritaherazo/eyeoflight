import React from 'react';
import heroImage from '../assets/imgs/hero1.jpg';
import reikiIcon from '../assets/imgs/flower1.jpg';
import auraIcon from '../assets/imgs/flower2.jpg';
import regressionIcon from '../assets/imgs/flower3.jpg';
import mentorshipIcon from '../assets/imgs/flower4.jpg';
import workshopIcon from '../assets/imgs/flower5.jpg';

const Hero = () => {
  return (
    <>
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="container text-center text-white">
          <h1 className="display-4">To see your wholeness is to find your light</h1>
          <a href="/therapies" className="btn btn-primary mt-3">Learn More</a>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section py-5 text-center">
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <div>
            <a href="/therapies#reiki">
              <img src={reikiIcon} alt="Reiki" className="service-icon" />
              <p>Reiki</p>
            </a>
          </div>
          <div>
            <a href="/therapies#aurareading">
              <img src={auraIcon} alt="Aura Reading" className="service-icon" />
              <p>Aura Reading</p>
            </a>
          </div>
          <div>
            <a href="/therapies#regression">
              <img src={regressionIcon} alt="Regression" className="service-icon" />
              <p>Regression</p>
            </a>
          </div>
          <div>
            <a href="/learn#mentorships">
              <img src={mentorshipIcon} alt="Mentorships" className="service-icon" />
              <p>Mentorships</p>
            </a>
          </div>
          <div>
            <a href="/learn#workshops">
              <img src={workshopIcon} alt="Workshops" className="service-icon" />
              <p>Workshops</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
