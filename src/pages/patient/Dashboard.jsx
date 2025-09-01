import DashboardLayout from '../../components/DashboardLayout';
import './Dashboard.css';

const PatientDashboard = () => {
  // Mock data - replace with actual data from your backend
  const stats = {
    upcomingAppointments: 2,
    prescriptions: 3,
    messages: 5,
    testResults: 1
  };

  const healthMetrics = {
    bloodPressure: '120/80',
    heartRate: '72',
    temperature: '98.6°F',
    weight: '70 kg'
  };

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiology',
      date: '2024-03-20',
      time: '10:00 AM',
      type: 'Regular Checkup'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Brown',
      specialty: 'Dermatology',
      date: '2024-03-25',
      time: '02:30 PM',
      type: 'Follow-up'
    }
  ];

  return (
    <DashboardLayout role="patient">
      <div className="dashboard-header">
        <h1>Welcome back, John</h1>
        <p>Here's your health overview</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-info">
            <h3>Upcoming Appointments</h3>
            <p className="stat-value">{stats.upcomingAppointments}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💊</div>
          <div className="stat-info">
            <h3>Active Prescriptions</h3>
            <p className="stat-value">{stats.prescriptions}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💬</div>
          <div className="stat-info">
            <h3>New Messages</h3>
            <p className="stat-value">{stats.messages}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-info">
            <h3>Test Results</h3>
            <p className="stat-value">{stats.testResults}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Health Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-item">
              <h4>Blood Pressure</h4>
              <p className="metric-value">{healthMetrics.bloodPressure}</p>
            </div>
            <div className="metric-item">
              <h4>Heart Rate</h4>
              <p className="metric-value">{healthMetrics.heartRate} bpm</p>
            </div>
            <div className="metric-item">
              <h4>Temperature</h4>
              <p className="metric-value">{healthMetrics.temperature}</p>
            </div>
            <div className="metric-item">
              <h4>Weight</h4>
              <p className="metric-value">{healthMetrics.weight}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Upcoming Appointments</h2>
          <div className="appointments-list">
            {upcomingAppointments.map(appointment => (
              <div key={appointment.id} className="appointment-item">
                <div className="appointment-date">
                  <span className="date">{appointment.date}</span>
                  <span className="time">{appointment.time}</span>
                </div>
                <div className="appointment-info">
                  <h4>{appointment.doctor}</h4>
                  <p className="specialty">{appointment.specialty}</p>
                  <p className="type">{appointment.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard; 