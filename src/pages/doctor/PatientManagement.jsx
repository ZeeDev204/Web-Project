import DashboardLayout from '../../components/DashboardLayout';
import { useUser } from '../../context/UserContext';
import './PatientManagement.css';

const PatientManagement = () => {
  const { userData } = useUser();
  const patients = userData?.patients || [];

  return (
    <DashboardLayout role="doctor">
      <div className="patient-management">
        <div className="page-header">
          <h1>Patient Management</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search patients..." />
              <button className="search-btn">🔍</button>
            </div>
            <button className="add-patient-btn">Add New Patient</button>
          </div>
        </div>

        <div className="filters">
          <select className="filter-select">
            <option value="all">All Patients</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <select className="filter-select">
            <option value="name">Sort by Name</option>
            <option value="lastVisit">Last Visit</option>
            <option value="nextAppointment">Next Appointment</option>
          </select>
        </div>

        <div className="patients-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Last Visit</th>
                <th>Next Appointment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.length > 0 && patients.map(patient => (
                <tr key={patient.id || patient.patientId}>
                  <td>{patient.name || `${patient.firstName || ''} ${patient.lastName || ''}`}</td>
                  <td>{patient.age || (patient.dateOfBirth ? (new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()) : '')}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.lastVisit || ''}</td>
                  <td>{patient.nextAppointment || 'Not Scheduled'}</td>
                  <td>
                    <span className={`status-badge ${patient.status ? patient.status.toLowerCase() : ''}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view">👁️</button>
                      <button className="action-btn edit">✏️</button>
                      <button className="action-btn message">💬</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="pagination-btn">Previous</button>
          <div className="page-numbers">
            <button className="page-number active">1</button>
            <button className="page-number">2</button>
            <button className="page-number">3</button>
          </div>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientManagement; 