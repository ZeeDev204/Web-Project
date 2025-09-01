import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import doctorImage from '../assets/images/doctor.png';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Manage Your Health Seamlessly</h1>
            <p>Connect with healthcare professionals, book appointments, and manage your medical records all in one place.</p>
            <div className="hero-buttons">
              <Link to="/signup" className="cta-button primary">Get Started</Link>
              <Link to="/#features" className="cta-button secondary">Learn More</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={doctorImage} alt="Healthcare Illustration" className="floating-3d"/>
          </div>
        </section>

        <section id="features" className="features">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Book Appointments</h3>
              <p>Schedule and manage your medical appointments with ease.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Access Records</h3>
              <p>View and download your medical history and reports.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Secure Messaging</h3>
              <p>Communicate with your healthcare provider securely.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Notifications</h3>
              <p>Stay updated with appointment reminders and health tips.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of patients and healthcare providers using MediConnect.</p>
          <Link to="/signup" className="cta-button primary">Sign Up Now</Link>
        </section>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
