import DashboardLayout from '../../components/DashboardLayout';
import './MyReports.css';

const MyReports = () => {
  // Mock data - replace with actual data from your backend
  const reports = [
    {
      id: 1,
      title: 'Blood Test Results',
      date: '2024-03-15',
      doctor: {
        name: 'Dr. Sarah Johnson',
        specialization: 'Cardiology',
        avatar: '👩‍⚕️'
      },
      type: 'Laboratory',
      status: 'Available',
      description: 'Complete blood count and metabolic panel results'
    },
    {
      id: 2,
      title: 'MRI Scan Report',
      date: '2024-03-10',
      doctor: {
        name: 'Dr. Michael Brown',
        specialization: 'Neurology',
        avatar: '👨‍⚕️'
      },
      type: 'Imaging',
      status: 'Available',
      description: 'Brain MRI scan results and analysis'
    },
    {
      id: 3,
      title: 'X-Ray Results',
      date: '2024-03-05',
      doctor: {
        name: 'Dr. Emily Wilson',
        specialization: 'Radiology',
        avatar: '👩‍⚕️'
      },
      type: 'Imaging',
      status: 'Pending',
      description: 'Chest X-ray examination results'
    }
  ];

  return (
    <DashboardLayout role="patient">
      <div className="my-reports-page">
        <div className="page-header">
          <h1>My Reports</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search reports..." />
              <button className="search-btn">🔍</button>
            </div>
            <button className="request-report-btn">Request New Report</button>
          </div>
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>Report Type</label>
            <select className="filter-select">
              <option value="all">All Types</option>
              <option value="laboratory">Laboratory</option>
              <option value="imaging">Imaging</option>
              <option value="diagnostic">Diagnostic</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Status</label>
            <select className="filter-select">
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="pending">Pending</option>
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
        </div>

        <div className="reports-list">
          {reports.map(report => (
            <div key={report.id} className="report-card">
              <div className="report-header">
                <div className="doctor-info">
                  <span className="doctor-avatar">{report.doctor.avatar}</span>
                  <div>
                    <h3>{report.doctor.name}</h3>
                    <p className="specialization">{report.doctor.specialization}</p>
                  </div>
                </div>
                <span className={`status-badge ${report.status.toLowerCase()}`}>
                  {report.status}
                </span>
              </div>

              <div className="report-content">
                <h4>{report.title}</h4>
                <p className="description">{report.description}</p>
                <div className="report-meta">
                  <span className="type">{report.type}</span>
                  <span className="date">{report.date}</span>
                </div>
              </div>

              <div className="report-actions">
                <button className="action-btn view">View Report</button>
                <button className="action-btn download">Download</button>
                <button className="action-btn share">Share</button>
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

export default MyReports; 