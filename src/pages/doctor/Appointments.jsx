import DashboardLayout from '../../components/DashboardLayout';
import { useUser } from '../../context/UserContext';
import './Appointments.css';

const Appointments = () => {
  const { userData } = useUser();
  const appointments = userData?.appointments || [];

  return (
    <DashboardLayout role="doctor">
      <div className="appointments-page">
        <div className="page-header">
          <h1>Appointments</h1>
          <div className="header-actions">
            <div className="date-filter">
              <input type="date" className="date-input" />
            </div>
            <button className="add-appointment-btn">Schedule New</button>
          </div>
        </div>

        <div className="appointments-grid">
          <div className="appointments-filters">
            <div className="filter-group">
              <label>Status</label>
              <select className="filter-select">
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Type</label>
              <select className="filter-select">
                <option value="all">All Types</option>
                <option value="checkup">Regular Checkup</option>
                <option value="followup">Follow-up</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
          </div>

          <div className="appointments-list">
            {appointments.length > 0 && appointments.map(appointment => (
              <div key={appointment.id || appointment.appointmentId} className="appointment-card">
                <div className="appointment-header">
                  <div className="appointment-time">
                    <span className="time">{appointment.time || appointment.appointmentTime}</span>
                    <span className="date">{appointment.date || (appointment.appointmentDate ? new Date(appointment.appointmentDate).toLocaleDateString() : '')}</span>
                  </div>
                  <span className={`status-badge ${appointment.status ? appointment.status.toLowerCase() : ''}`}>
                    {appointment.status}
                  </span>
                </div>
                <div className="appointment-body">
                  <h3>{appointment.patient || appointment.patientName}</h3>
                  <p className="appointment-type">{appointment.type}</p>
                </div>
                <div className="appointment-actions">
                  <button className="action-btn view">View Details</button>
                  <button className="action-btn edit">Reschedule</button>
                  <button className="action-btn cancel">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="calendar-view">
          <h2>Calendar View</h2>
          <div className="calendar-grid">
            {/* Calendar implementation will go here */}
            <div className="calendar-placeholder">
              Calendar View Coming Soon
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Appointments; 