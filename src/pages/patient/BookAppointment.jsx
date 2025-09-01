import DashboardLayout from '../../components/DashboardLayout';
import './BookAppointment.css';

const BookAppointment = () => {
  // Mock data - replace with actual data from your backend
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiology',
      experience: '15 years',
      rating: 4.8,
      availableSlots: [
        { date: '2024-03-20', time: '09:00 AM' },
        { date: '2024-03-20', time: '10:00 AM' },
        { date: '2024-03-21', time: '02:00 PM' }
      ]
    },
    {
      id: 2,
      name: 'Dr. Michael Brown',
      specialization: 'Neurology',
      experience: '12 years',
      rating: 4.9,
      availableSlots: [
        { date: '2024-03-20', time: '11:00 AM' },
        { date: '2024-03-21', time: '09:00 AM' },
        { date: '2024-03-21', time: '03:00 PM' }
      ]
    }
  ];

  return (
    <DashboardLayout role="patient">
      <div className="book-appointment-page">
        <div className="page-header">
          <h1>Book Appointment</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search doctors..." />
              <button className="search-btn">🔍</button>
            </div>
            <div className="filter-group">
              <select className="filter-select">
                <option value="all">All Specializations</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
              </select>
            </div>
          </div>
        </div>

        <div className="doctors-grid">
          {doctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-header">
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="specialization">{doctor.specialization}</p>
                </div>
                <div className="doctor-rating">
                  <span className="rating">⭐ {doctor.rating}</span>
                  <span className="experience">{doctor.experience} experience</span>
                </div>
              </div>

              <div className="available-slots">
                <h4>Available Slots</h4>
                <div className="slots-grid">
                  {doctor.availableSlots.map((slot, index) => (
                    <button key={index} className="slot-btn">
                      <span className="date">{slot.date}</span>
                      <span className="time">{slot.time}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="doctor-actions">
                <button className="action-btn view-profile">View Profile</button>
                <button className="action-btn book-now">Book Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="appointment-form">
          <h2>Appointment Details</h2>
          <form>
            <div className="form-group">
              <label>Select Doctor</label>
              <select className="form-select">
                <option value="">Choose a doctor...</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialization}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Select Date</label>
              <input type="date" className="form-input" />
            </div>

            <div className="form-group">
              <label>Select Time</label>
              <select className="form-select">
                <option value="">Choose a time slot...</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label>Reason for Visit</label>
              <textarea
                className="form-textarea"
                placeholder="Please describe your symptoms or reason for visit..."
                rows="4"
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn">Cancel</button>
              <button type="submit" className="submit-btn">Confirm Booking</button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookAppointment; 