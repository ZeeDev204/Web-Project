import DashboardLayout from '../../components/DashboardLayout';
import { useUser } from '../../context/UserContext';
import './Reports.css';

const Reports = () => {
  const { userData } = useUser();
  const reports = userData?.reports || [];

  return (
    <DashboardLayout role="doctor">
      <div className="reports-page">
        <div className="page-header">
          <h1>Patient Reports</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search reports..." />
              <button className="search-btn">🔍</button>
            </div>
            <button className="add-report-btn">Add New Report</button>
          </div>
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>Status</label>
            <select className="filter-select">
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Type</label>
            <select className="filter-select">
              <option value="all">All Types</option>
              <option value="blood">Blood Test</option>
              <option value="xray">X-Ray</option>
              <option value="mri">MRI Scan</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Date Range</label>
            <input type="date" className="date-input" />
          </div>
        </div>

        <div className="reports-list">
          {reports.length > 0 && reports.map(report => (
            <div key={report.id || report.reportId} className="report-card">
              <div className="report-header">
                <div className="report-info">
                  <h3>{report.patientName}</h3>
                  <span className="report-type">{report.type}</span>
                </div>
                <span className={`status-badge ${report.status ? report.status.toLowerCase() : ''}`}>
                  {report.status}
                </span>
              </div>
              <div className="report-details">
                <div className="detail-item">
                  <label>Date</label>
                  <span>{report.date || (report.reportDate ? new Date(report.reportDate).toLocaleDateString() : '')}</span>
                </div>
                <div className="detail-item">
                  <label>Result</label>
                  <span className={`result ${report.result ? report.result.toLowerCase() : ''}`}>
                    {report.result}
                  </span>
                </div>
                <div className="detail-item">
                  <label>Notes</label>
                  <p>{report.notes}</p>
                </div>
              </div>
              <div className="report-actions">
                <button className="action-btn view">View Full Report</button>
                <button className="action-btn download">Download PDF</button>
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

export default Reports; 