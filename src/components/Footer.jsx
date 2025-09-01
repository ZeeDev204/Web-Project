import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">MediConnect</h3>
          <p className="footer-description">
            Your trusted platform for seamless healthcare management.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/features" className="footer-link">Features</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <p className="footer-contact">
            Email: support@mediconnect.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Healthcare St, Medical City
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MediConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
