import DashboardLayout from '../../components/DashboardLayout';
import './MyAppointments.css';

const MyAppointments = () => {
  // Mock data - replace with actual data from your backend
  const appointments = [
    {
      id: 1,
      doctor: {
        name: 'Dr. Sarah Johnson',
        specialization: 'Cardiology',
        avatar: '👩‍⚕️'
      },
      date: '2024-03-20',
      time: '09:00 AM',
      type: 'Regular Checkup',
      status: 'Upcoming',
      notes: 'Please bring your recent test results'
    },
    {
      id: 2,
      doctor: {
        name: 'Dr. Michael Brown',
        specialization: 'Neurology',
        avatar: '👨‍⚕️'
      },
      date: '2024-03-15',
      time: '02:00 PM',
      type: 'Follow-up',
      status: 'Completed',
      notes: 'Prescription renewed'
    },
    {
      id: 3,
      doctor: {
        name: 'Dr. Emily Wilson',
        specialization: 'Pediatrics',
        avatar: '👩‍⚕️'
      },
      date: '2024-03-25',
      time: '11:00 AM',
      type: 'Consultation',
      status: 'Cancelled',
      notes: 'Patient requested cancellation'
    }
  ];

  return (
    <DashboardLayout role="patient">
      <div className="my-appointments-page">
        <div className="page-header">
          <h1>My Appointments</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search appointments..." />
              <button className="search-btn">🔍</button>
            </div>
            <button className="new-appointment-btn">Book New Appointment</button>
          </div>
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>Status</label>
            <select className="filter-select">
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Date Range</label>
            <div className="date-range">
              <input type="date" className="date-input" />
              <span>to</span>
              <input type="date" className="date-input" />
            </div>
          </div>
          <div className="filter-group">
            <label>Sort By</label>
            <select className="filter-select">
              <option value="date">Date</option>
              <option value="doctor">Doctor</option>
              <option value="type">Type</option>
            </select>
          </div>
        </div>

        <div className="appointments-list">
          {appointments.map(appointment => (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-header">
                <div className="doctor-info">
                  <span className="doctor-avatar">{appointment.doctor.avatar}</span>
                  <div>
                    <h3>{appointment.doctor.name}</h3>
                    <p className="specialization">{appointment.doctor.specialization}</p>
                  </div>
                </div>
                <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                  {appointment.status}
                </span>
              </div>

              <div className="appointment-details">
                <div className="detail-item">
                  <span className="label">Date</span>
                  <span className="value">{appointment.date}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Time</span>
                  <span className="value">{appointment.time}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Type</span>
                  <span className="value">{appointment.type}</span>
                </div>
              </div>

              {appointment.notes && (
                <div className="appointment-notes">
                  <span className="label">Notes</span>
                  <p>{appointment.notes}</p>
                </div>
              )}

              <div className="appointment-actions">
                {appointment.status === 'Upcoming' && (
                  <>
                    <button className="action-btn reschedule">Reschedule</button>
                    <button className="action-btn cancel">Cancel</button>
                  </>
                )}
                <button className="action-btn view-details">View Details</button>
              </div>
            </div>
          ))}
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

export default MyAppointments; 