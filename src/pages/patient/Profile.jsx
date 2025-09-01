import DashboardLayout from '../../components/DashboardLayout';
import './Profile.css';

const Profile = () => {
  // Mock data - replace with actual data from your backend
  const patientData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1985-06-15',
    gender: 'Male',
    bloodGroup: 'O+',
    address: '123 Medical Center Dr, Suite 456, New York, NY 10001',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543'
    },
    medicalHistory: [
      'Hypertension',
      'Type 2 Diabetes',
      'Asthma'
    ],
    allergies: [
      'Penicillin',
      'Peanuts'
    ],
    medications: [
      {
        name: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once daily'
      },
      {
        name: 'Metformin',
        dosage: '500mg',
        frequency: 'Twice daily'
      }
    ]
  };

  return (
    <DashboardLayout role="patient">
      <div className="profile-page">
        <div className="page-header">
          <h1>My Profile</h1>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        <div className="profile-container">
          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                <p>{patientData.name}</p>
              </div>
              <div className="info-item">
                <label>Email</label>
                <p>{patientData.email}</p>
              </div>
              <div className="info-item">
                <label>Phone</label>
                <p>{patientData.phone}</p>
              </div>
              <div className="info-item">
                <label>Date of Birth</label>
                <p>{patientData.dateOfBirth}</p>
              </div>
              <div className="info-item">
                <label>Gender</label>
                <p>{patientData.gender}</p>
              </div>
              <div className="info-item">
                <label>Blood Group</label>
                <p>{patientData.bloodGroup}</p>
              </div>
              <div className="info-item full-width">
                <label>Address</label>
                <p>{patientData.address}</p>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Emergency Contact</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Name</label>
                <p>{patientData.emergencyContact.name}</p>
              </div>
              <div className="info-item">
                <label>Relationship</label>
                <p>{patientData.emergencyContact.relationship}</p>
              </div>
              <div className="info-item">
                <label>Phone</label>
                <p>{patientData.emergencyContact.phone}</p>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Medical Information</h2>
            <div className="info-grid">
              <div className="info-item full-width">
                <label>Medical History</label>
                <div className="tags">
                  {patientData.medicalHistory.map((condition, index) => (
                    <span key={index} className="tag">{condition}</span>
                  ))}
                </div>
              </div>
              <div className="info-item full-width">
                <label>Allergies</label>
                <div className="tags">
                  {patientData.allergies.map((allergy, index) => (
                    <span key={index} className="tag">{allergy}</span>
                  ))}
                </div>
              </div>
              <div className="info-item full-width">
                <label>Current Medications</label>
                <div className="medications-list">
                  {patientData.medications.map((medication, index) => (
                    <div key={index} className="medication-item">
                      <div className="medication-info">
                        <h4>{medication.name}</h4>
                        <p>{medication.dosage} - {medication.frequency}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Account Settings</h2>
            <div className="settings-grid">
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Change Password</h3>
                  <p>Update your account password</p>
                </div>
                <button className="setting-btn">Change</button>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Two-Factor Authentication</h3>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <button className="setting-btn">Enable</button>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Notification Preferences</h3>
                  <p>Manage how you receive notifications</p>
                </div>
                <button className="setting-btn">Configure</button>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Privacy Settings</h3>
                  <p>Control your data sharing preferences</p>
                </div>
                <button className="setting-btn">Manage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile; 