import DashboardLayout from '../../components/DashboardLayout';
import { useUser } from '../../context/UserContext';
import './HealthTips.css';

const HealthTips = () => {
  const { userData } = useUser();
  const healthTips = userData?.healthTips || [];

  return (
    <DashboardLayout role="doctor">
      <div className="health-tips-page">
        <div className="page-header">
          <h1>Health Tips</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search health tips..." />
              <button className="search-btn">🔍</button>
            </div>
            <button className="add-tip-btn">Create New Tip</button>
          </div>
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>Category</label>
            <select className="filter-select">
              <option value="all">All Categories</option>
              <option value="nutrition">Nutrition</option>
              <option value="fitness">Fitness</option>
              <option value="mental">Mental Health</option>
              <option value="prevention">Disease Prevention</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Status</label>
            <select className="filter-select">
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Sort By</label>
            <select className="filter-select">
              <option value="date">Date</option>
              <option value="views">Views</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>

        <div className="tips-grid">
          {healthTips.length > 0 && healthTips.map(tip => (
            <div key={tip.id || tip.tipId} className="tip-card">
              <div className="tip-header">
                <div className="tip-category">{tip.category}</div>
                <span className={`status-badge ${tip.status ? tip.status.toLowerCase() : ''}`}>
                  {tip.status}
                </span>
              </div>
              <h3 className="tip-title">{tip.title}</h3>
              <p className="tip-content">{tip.content}</p>
              <div className="tip-footer">
                <div className="tip-stats">
                  <span className="stat">
                    <i className="icon">📅</i>
                    {tip.date || (tip.createdAt ? new Date(tip.createdAt).toLocaleDateString() : '')}
                  </span>
                  <span className="stat">
                    <i className="icon">👁️</i>
                    {tip.views} views
                  </span>
                </div>
                <div className="tip-actions">
                  <button className="action-btn edit">Edit</button>
                  <button className="action-btn share">Share</button>
                  <button className="action-btn delete">Delete</button>
                </div>
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

export default HealthTips; 