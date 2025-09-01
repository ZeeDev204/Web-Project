import React from 'react';
import '../styles/Hero.css';
import doctorImage from '../assets/images/doctor.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={doctorImage} alt="Doctor consulting a patient" />
      </div>
      <div className="hero-text">
        <h1>Manage Your Health Seamlessly.</h1>
        <p>Your trusted portal connecting doctors and patients for convenient health management anytime, anywhere.</p>
        <a href="#" className="btn signup-btn">Get Started</a>
        <a href="#" className="login-btn">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
