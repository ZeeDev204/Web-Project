import React from 'react';
import '../styles/Features.css'; // Optional: Create a separate CSS file for Features styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faFileMedical, faComments, faBell } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <section className="features">
      <div className="features-grid">
        <div className="feature-item">
          <FontAwesomeIcon icon={faCalendarCheck} className="feature-icon" />
          <p className="feature-title">Book Appointments</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faFileMedical} className="feature-icon" />
          <p className="feature-title">Access Records</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faComments} className="feature-icon" />
          <p className="feature-title">Secure Messaging</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faBell} className="feature-icon" />
          <p className="feature-title">Notifications</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
