import DashboardLayout from '../../components/DashboardLayout';
import { useUser } from '../../context/UserContext';
import './Dashboard.css';

const DoctorDashboard = () => {
  const { userData } = useUser();

  // Dynamic stats from userData, fallback to nothing if not present
  const totalPatients = userData?.totalPatients;
  const totalAppointments = userData?.totalAppointments;
  const messages = userData?.messages;
  const reports = userData?.reports;

  // Example: Use userData.patients or fallback to empty array
  const recentActivity = (userData?.recentActivity) || [
    { id: 1, type: 'appointment', patient: 'Sarah Johnson', time: '2 hours ago' },
    { id: 2, type: 'message', patient: 'Mike Brown', time: '3 hours ago' },
    { id: 3, type: 'report', patient: 'Emma Wilson', time: '5 hours ago' },
    { id: 4, type: 'appointment', patient: 'John Smith', time: '1 day ago' }
  ];

  return (
    <DashboardLayout role="doctor">
      <div className="dashboard-header">
        <h1>Welcome back, {userData?.fullName || userData?.username || 'Doctor'}</h1>
        <p>Here's what's happening today</p>
      </div>

      <div className="stats-grid">
        {typeof totalPatients !== 'undefined' && (
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h3>Total Patients</h3>
              <p className="stat-value">{totalPatients}</p>
            </div>
          </div>
        )}
        {typeof totalAppointments !== 'undefined' && (
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <h3>Today's Appointments</h3>
              <p className="stat-value">{totalAppointments}</p>
            </div>
          </div>
        )}
        {typeof messages !== 'undefined' && (
          <div className="stat-card">
            <div className="stat-icon">💬</div>
            <div className="stat-info">
              <h3>New Messages</h3>
              <p className="stat-value">{messages}</p>
            </div>
          </div>
        )}
        {typeof reports !== 'undefined' && (
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div className="stat-info">
              <h3>Pending Reports</h3>
              <p className="stat-value">{reports}</p>
            </div>
          </div>
        )}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  {activity.type === 'appointment' && '📅'}
                  {activity.type === 'message' && '💬'}
                  {activity.type === 'report' && '📋'}
                </div>
                <div className="activity-info">
                  <p className="activity-text">
                    {activity.type === 'appointment' && 'New appointment with'}
                    {activity.type === 'message' && 'New message from'}
                    {activity.type === 'report' && 'New report for'}{' '}
                    <strong>{activity.patient}</strong>
                  </p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Today's Schedule</h2>
          <div className="schedule-list">
            <div className="schedule-item">
              <div className="schedule-time">09:00 AM</div>
              <div className="schedule-info">
                <h4>Sarah Johnson</h4>
                <p>Regular Checkup</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-time">11:30 AM</div>
              <div className="schedule-info">
                <h4>Mike Brown</h4>
                <p>Follow-up Consultation</p>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-time">02:00 PM</div>
              <div className="schedule-info">
                <h4>Emma Wilson</h4>
                <p>Lab Results Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard; 