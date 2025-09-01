// src/components/Landing.jsx
import React from 'react';
import '../styles/Landing.css';

function Landing() {
  return (
    <section className="landing">
      <div className="hero-content">
        <h1>Your Health, Our Priority</h1>
        <p>Book appointments, manage your records, and stay healthy with our all-in-one platform.</p>
        <a href="/signup" className="cta-btn">Get Started</a>
      </div>
    </section>
  );
}

export default Landing;
