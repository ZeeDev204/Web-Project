import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('patient');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    licenseNumber: '',
    specialization: '',
    subSpecializations: '',
    yearsOfExperience: '',
    consultationFee: '',
    bio: '',
    bloodGroup: '',
    height: '',
    weight: '',
    medicalHistory: '',
    allergies: '',
    currentMedications: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phone: '',
      email: ''
    },
    insurance: {
      provider: '',
      policyNumber: '',
      groupNumber: '',
      expiryDate: ''
    },
    assignedDoctorId: ''
  });

  // Fetch available doctors when component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors/available');
        setDoctors(response.data.doctors || []);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        // Don't show error to user as this is not critical for signup
      }
    };

    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested objects (emergencyContact, insurance)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Prepare data for API
      const signupData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: role,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender
      };

      // Add role-specific data
      if (role === 'doctor') {
        signupData.licenseNumber = formData.licenseNumber;
        signupData.specialization = formData.specialization;
        signupData.subSpecializations = formData.subSpecializations ? 
          formData.subSpecializations.split(',').map(s => s.trim()) : [];
        signupData.yearsOfExperience = parseInt(formData.yearsOfExperience);
        signupData.consultationFee = parseFloat(formData.consultationFee);
        signupData.bio = formData.bio;
      } else {
        signupData.bloodGroup = formData.bloodGroup || null;
        signupData.height = formData.height ? parseFloat(formData.height) : null;
        signupData.weight = formData.weight ? parseFloat(formData.weight) : null;
        signupData.medicalHistory = formData.medicalHistory ? 
          [{ condition: 'General', diagnosis: formData.medicalHistory, treatment: '', diagnosedDate: new Date(), status: 'active' }] : [];
        signupData.allergies = formData.allergies ? 
          [{ allergen: formData.allergies, severity: 'mild', notes: '' }] : [];
        signupData.currentMedications = formData.currentMedications ? 
          [{ name: formData.currentMedications, dosage: '', frequency: '', startDate: new Date(), endDate: null }] : [];
        signupData.emergencyContact = formData.emergencyContact;
        signupData.insurance = formData.insurance;
        signupData.assignedDoctorId = formData.assignedDoctorId || null;
      }

      // Make API call
      const response = await axios.post('http://localhost:5000/api/auth/register', signupData);

      if (response.data.success) {
        // Show success message
        alert('Registration successful! You can now login.');
        // Redirect to login page
        navigate('/login');
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <Navbar />
      
      <main className="signup-main">
        <div className="signup-container">
          <div className="signup-header">
            <h1>Create Account</h1>
            <p>Join our healthcare community</p>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="role-selector">
            <button
              className={`role-btn ${role === 'patient' ? 'active' : ''}`}
              onClick={() => setRole('patient')}
            >
              Patient
            </button>
            <button
              className={`role-btn ${role === 'doctor' ? 'active' : ''}`}
              onClick={() => setRole('doctor')}
            >
              Doctor
            </button>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {role === 'doctor' ? (
              <>
                <div className="form-group">
                  <label htmlFor="licenseNumber">License Number</label>
                  <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    placeholder="Enter your medical license number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="specialization">Specialization</label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="Enter your specialization"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subSpecializations">Sub-Specializations (Optional)</label>
                  <input
                    type="text"
                    id="subSpecializations"
                    name="subSpecializations"
                    value={formData.subSpecializations}
                    onChange={handleChange}
                    placeholder="Enter sub-specializations separated by commas"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="yearsOfExperience">Years of Experience</label>
                  <input
                    type="number"
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    placeholder="Enter years of experience"
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="consultationFee">Consultation Fee</label>
                  <input
                    type="number"
                    id="consultationFee"
                    name="consultationFee"
                    value={formData.consultationFee}
                    onChange={handleChange}
                    placeholder="Enter consultation fee"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bio">Bio (Optional)</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us about yourself"
                    rows="3"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="assignedDoctorId">Select Your Doctor (Optional)</label>
                  <select
                    id="assignedDoctorId"
                    name="assignedDoctorId"
                    value={formData.assignedDoctorId}
                    onChange={handleChange}
                  >
                    <option value="">Choose a doctor...</option>
                    {doctors.map(doctor => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} - {doctor.specialization} (${doctor.consultationFee})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="bloodGroup">Blood Group (Optional)</label>
                  <select
                    id="bloodGroup"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                  >
                    <option value="">Select blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="height">Height (cm) (Optional)</label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="Enter height in cm"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="weight">Weight (kg) (Optional)</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="Enter weight in kg"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="medicalHistory">Medical History (Optional)</label>
                  <textarea
                    id="medicalHistory"
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={handleChange}
                    placeholder="Enter your medical history"
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="allergies">Allergies (Optional)</label>
                  <input
                    type="text"
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    placeholder="Enter any allergies"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="currentMedications">Current Medications (Optional)</label>
                  <input
                    type="text"
                    id="currentMedications"
                    name="currentMedications"
                    value={formData.currentMedications}
                    onChange={handleChange}
                    placeholder="Enter current medications"
                  />
                </div>

                {/* Emergency Contact */}
                <div className="form-section">
                  <h3>Emergency Contact (Optional)</h3>
                  <div className="form-group">
                    <label htmlFor="emergencyContact.name">Name</label>
                    <input
                      type="text"
                      id="emergencyContact.name"
                      name="emergencyContact.name"
                      value={formData.emergencyContact.name}
                      onChange={handleChange}
                      placeholder="Emergency contact name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyContact.relationship">Relationship</label>
                    <input
                      type="text"
                      id="emergencyContact.relationship"
                      name="emergencyContact.relationship"
                      value={formData.emergencyContact.relationship}
                      onChange={handleChange}
                      placeholder="Relationship to you"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyContact.phone">Phone</label>
                    <input
                      type="tel"
                      id="emergencyContact.phone"
                      name="emergencyContact.phone"
                      value={formData.emergencyContact.phone}
                      onChange={handleChange}
                      placeholder="Emergency contact phone"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyContact.email">Email</label>
                    <input
                      type="email"
                      id="emergencyContact.email"
                      name="emergencyContact.email"
                      value={formData.emergencyContact.email}
                      onChange={handleChange}
                      placeholder="Emergency contact email"
                    />
                  </div>
                </div>

                {/* Insurance Information */}
                <div className="form-section">
                  <h3>Insurance Information (Optional)</h3>
                  <div className="form-group">
                    <label htmlFor="insurance.provider">Provider</label>
                    <input
                      type="text"
                      id="insurance.provider"
                      name="insurance.provider"
                      value={formData.insurance.provider}
                      onChange={handleChange}
                      placeholder="Insurance provider"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="insurance.policyNumber">Policy Number</label>
                    <input
                      type="text"
                      id="insurance.policyNumber"
                      name="insurance.policyNumber"
                      value={formData.insurance.policyNumber}
                      onChange={handleChange}
                      placeholder="Policy number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="insurance.groupNumber">Group Number</label>
                    <input
                      type="text"
                      id="insurance.groupNumber"
                      name="insurance.groupNumber"
                      value={formData.insurance.groupNumber}
                      onChange={handleChange}
                      placeholder="Group number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="insurance.expiryDate">Expiry Date</label>
                    <input
                      type="date"
                      id="insurance.expiryDate"
                      name="insurance.expiryDate"
                      value={formData.insurance.expiryDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}

            <button 
              type="submit" 
              className="signup-btn"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="signup-footer">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="login-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
