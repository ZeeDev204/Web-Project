import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useUser } from '../context/UserContext';

const Sidebar = ({ role, onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setUserData } = useUser();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      const newState = !isCollapsed;
      setIsCollapsed(newState);
      onToggle?.(newState);
    }
  };

  const handleLogout = async () => {
    try {
      // Call logout endpoint to clear cookie
      await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      // Clear user data from context
      setUserData(null);

      // Navigate to home page
      navigate('/');

      // Close mobile menu if open
      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const doctorLinks = [
    { path: '/doctor/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/doctor/patients', label: 'Patients', icon: '👥' },
    { path: '/doctor/appointments', label: 'Appointments', icon: '📅' },
    { path: '/doctor/reports', label: 'Reports', icon: '📋' },
    { path: '/doctor/health-tips', label: 'Health Tips', icon: '💡' },
    { path: '/doctor/availability', label: 'Availability', icon: '⏰' },
  ];

  const patientLinks = [
    { path: '/patient/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/patient/profile', label: 'Profile', icon: '👤' },
    { path: '/patient/book-appointment', label: 'Book Appointment', icon: '📅' },
    { path: '/patient/appointments', label: 'My Appointments', icon: '📋' },
    { path: '/patient/reports', label: 'My Reports', icon: '📄' },
    { path: '/patient/notifications', label: 'Notifications', icon: '🔔' },
    { path: '/patient/health-tips', label: 'Health Tips', icon: '💡' }
  ];

  const links = role === 'doctor' ? doctorLinks : patientLinks;

  return (
    <>
      {isMobile && (
        <button
          className="mobile-sidebar-toggle"
          onClick={handleToggle}
          aria-label={isMobileMenuOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isMobileMenuOpen ? '×' : '☰'}
        </button>
      )}
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">MediConnect</h2>
          {!isMobile && (
            <button
              className="collapse-btn"
              onClick={handleToggle}
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? '→' : '←'}
            </button>
          )}
        </div>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              <span className="nav-icon">{link.icon}</span>
              {(!isCollapsed || isMobile) && <span className="nav-label">{link.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <span className="nav-icon">🚪</span>
            {(!isCollapsed || isMobile) && <span className="nav-label">Logout</span>}
          </button>
        </div>
      </aside>
      {isMobile && isMobileMenuOpen && (
        <div className="sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;