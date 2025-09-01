import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = ({ role, user }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-btn">
          <span className="menu-icon"></span>
        </button>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      <div className="topbar-right">
        <button className="notification-btn">
          <span className="notification-icon">🔔</span>
          <span className="notification-badge">3</span>
        </button>

        <div className="profile-dropdown">
          <button
            className="profile-btn"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img
              src={user?.avatar || '/default-avatar.png'}
              alt="Profile"
              className="profile-img"
            />
            <span className="profile-name">{user?.name || 'User'}</span>
          </button>

          {isProfileOpen && (
            <div className="dropdown-menu">
              <Link to={`/${role}/profile`} className="dropdown-item">
                <span className="dropdown-icon">👤</span>
                Profile
              </Link>
              <Link to="/settings" className="dropdown-item">
                <span className="dropdown-icon">⚙️</span>
                Settings
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/" className="dropdown-item text-danger">
                <span className="dropdown-icon">🚪</span>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar; 