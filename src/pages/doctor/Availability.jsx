import DashboardLayout from '../../components/DashboardLayout';
import { useUser } from '../../context/UserContext';
import './Availability.css';

const Availability = () => {
  const { userData } = useUser();
  // Use userData.availability if available, else fallback to empty array
  const weeklySchedule = userData?.availability || [];
  // Use userData.timeOff if available, else fallback to mock
  const upcomingTimeOff = userData?.timeOff || [
    {
      id: 1,
      startDate: '2024-04-01',
      endDate: '2024-04-05',
      reason: 'Annual Leave',
      status: 'Approved'
    },
    {
      id: 2,
      startDate: '2024-05-15',
      endDate: '2024-05-16',
      reason: 'Medical Conference',
      status: 'Pending'
    }
  ];

  return (
    <DashboardLayout role="doctor">
      <div className="availability-page">
        <div className="page-header">
          <h1>Availability</h1>
          <div className="header-actions">
            <button className="add-timeoff-btn">Request Time Off</button>
            <button className="add-slot-btn">Add Time Slot</button>
          </div>
        </div>

        <div className="availability-container">
          <div className="schedule-section">
            <div className="section-header">
              <h2>Weekly Schedule</h2>
              <div className="schedule-actions">
                <button className="action-btn">Edit Schedule</button>
                <button className="action-btn">Copy to Next Week</button>
              </div>
            </div>

            <div className="schedule-grid">
              {weeklySchedule.length > 0 && weeklySchedule.map((day, idx) => (
                <div key={day.day || idx} className="day-column">
                  <h3 className="day-header">{day.day || ''}</h3>
                  <div className="time-slots">
                    {day.slots && day.slots.map((slot, index) => (
                      <div key={index} className={`time-slot ${slot.status}`}>
                        <span className="time">{slot.time}</span>
                        <span className="status-badge">{slot.status}</span>
                      </div>
                    ))}
                    {/* If using new structure: startTime, endTime, isAvailable */}
                    {!day.slots && (
                      <div className={`time-slot ${day.isAvailable ? 'available' : 'booked'}`}>
                        <span className="time">{day.startTime} - {day.endTime}</span>
                        <span className="status-badge">{day.isAvailable ? 'available' : 'booked'}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeoff-section">
            <div className="section-header">
              <h2>Time Off Requests</h2>
              <button className="action-btn">New Request</button>
            </div>

            <div className="timeoff-list">
              {upcomingTimeOff.length > 0 && upcomingTimeOff.map(timeoff => (
                <div key={timeoff.id} className="timeoff-card">
                  <div className="timeoff-header">
                    <h3>{timeoff.reason}</h3>
                    <span className={`status-badge ${timeoff.status.toLowerCase()}`}>
                      {timeoff.status}
                    </span>
                  </div>
                  <div className="timeoff-dates">
                    <span className="date">
                      <i className="icon">📅</i>
                      {timeoff.startDate} - {timeoff.endDate}
                    </span>
                  </div>
                  <div className="timeoff-actions">
                    <button className="action-btn edit">Edit</button>
                    <button className="action-btn cancel">Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Availability; 