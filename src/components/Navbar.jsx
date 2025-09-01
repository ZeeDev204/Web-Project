import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${section}`);
    } else {
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">MediConnect</span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`menu-icon ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <button onClick={() => handleNavigation('home')} className="nav-link">Home</button>
            <button onClick={() => handleNavigation('features')} className="nav-link">Features</button>
            <button onClick={() => handleNavigation('contact')} className="nav-link">Contact</button>
          </div>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-auth">
            <Link to="/login" className="auth-btn login-btn">Login</Link>
            <Link to="/signup" className="auth-btn signup-btn">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
