import { useParams } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import './PatientDetail.css';

const PatientDetail = () => {
  const { id } = useParams();

  // Mock data - replace with actual data from your backend
  const patient = {
    id: id,
    name: 'Sarah Johnson',
    age: 32,
    gender: 'Female',
    email: 'sarah.johnson@email.com',
    phone: '+1 234 567 8900',
    address: '123 Medical Center Dr, Suite 456',
    bloodType: 'O+',
    allergies: ['Penicillin', 'Pollen'],
    conditions: ['Hypertension', 'Type 2 Diabetes'],
    lastVisit: '2024-03-15',
    nextAppointment: '2024-03-25',
    status: 'Active'
  };

  const medicalHistory = [
    {
      date: '2024-03-15',
      type: 'Regular Checkup',
      diagnosis: 'Stable condition, blood pressure normal',
      prescription: 'Continue current medication'
    },
    {
      date: '2024-02-15',
      type: 'Follow-up',
      diagnosis: 'Blood sugar levels improved',
      prescription: 'Adjusted insulin dosage'
    }
  ];

  return (
    <DashboardLayout role="doctor">
      <div className="patient-detail">
        <div className="page-header">
          <h1>Patient Details</h1>
          <div className="header-actions">
            <button className="action-btn edit">Edit Patient</button>
            <button className="action-btn message">Send Message</button>
          </div>
        </div>

        <div className="patient-info-grid">
          <div className="info-card personal-info">
            <h2>Personal Information</h2>
            <div className="info-content">
              <div className="info-item">
                <label>Name</label>
                <span>{patient.name}</span>
              </div>
              <div className="info-item">
                <label>Age</label>
                <span>{patient.age} years</span>
              </div>
              <div className="info-item">
                <label>Gender</label>
                <span>{patient.gender}</span>
              </div>
              <div className="info-item">
                <label>Email</label>
                <span>{patient.email}</span>
              </div>
              <div className="info-item">
                <label>Phone</label>
                <span>{patient.phone}</span>
              </div>
              <div className="info-item">
                <label>Address</label>
                <span>{patient.address}</span>
              </div>
            </div>
          </div>

          <div className="info-card medical-info">
            <h2>Medical Information</h2>
            <div className="info-content">
              <div className="info-item">
                <label>Blood Type</label>
                <span>{patient.bloodType}</span>
              </div>
              <div className="info-item">
                <label>Allergies</label>
                <div className="tags">
                  {patient.allergies.map((allergy, index) => (
                    <span key={index} className="tag">{allergy}</span>
                  ))}
                </div>
              </div>
              <div className="info-item">
                <label>Conditions</label>
                <div className="tags">
                  {patient.conditions.map((condition, index) => (
                    <span key={index} className="tag">{condition}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="info-card appointment-info">
            <h2>Appointment Information</h2>
            <div className="info-content">
              <div className="info-item">
                <label>Last Visit</label>
                <span>{patient.lastVisit}</span>
              </div>
              <div className="info-item">
                <label>Next Appointment</label>
                <span>{patient.nextAppointment || 'Not Scheduled'}</span>
              </div>
              <div className="info-item">
                <label>Status</label>
                <span className={`status-badge ${patient.status.toLowerCase()}`}>
                  {patient.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="medical-history">
          <h2>Medical History</h2>
          <div className="history-list">
            {medicalHistory.map((record, index) => (
              <div key={index} className="history-item">
                <div className="history-header">
                  <div className="history-date">
                    <span className="date">{record.date}</span>
                    <span className="type">{record.type}</span>
                  </div>
                </div>
                <div className="history-content">
                  <div className="history-section">
                    <label>Diagnosis</label>
                    <p>{record.diagnosis}</p>
                  </div>
                  <div className="history-section">
                    <label>Prescription</label>
                    <p>{record.prescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDetail; 