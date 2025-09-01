import DashboardLayout from '../../components/DashboardLayout';
import './HealthTips.css';

const HealthTips = () => {
  // Mock data - replace with actual data from your backend
  const healthTips = [
    {
      id: 1,
      title: 'Managing Stress and Anxiety',
      category: 'Mental Health',
      content: 'Learn effective techniques for managing daily stress and anxiety through mindfulness and breathing exercises.',
      doctor: {
        name: 'Dr. Sarah Johnson',
        specialization: 'Psychiatry',
        avatar: '👩‍⚕️'
      },
      date: '2024-03-15',
      likes: 45,
      saved: true
    },
    {
      id: 2,
      title: 'Healthy Eating Habits',
      category: 'Nutrition',
      content: 'Discover the importance of balanced nutrition and how to maintain healthy eating habits for better overall health.',
      doctor: {
        name: 'Dr. Michael Brown',
        specialization: 'Nutrition',
        avatar: '👨‍⚕️'
      },
      date: '2024-03-14',
      likes: 38,
      saved: false
    },
    {
      id: 3,
      title: 'Exercise for Heart Health',
      category: 'Physical Health',
      content: 'Simple exercises and activities that can help improve your heart health and overall cardiovascular fitness.',
      doctor: {
        name: 'Dr. Emily Wilson',
        specialization: 'Cardiology',
        avatar: '👩‍⚕️'
      },
      date: '2024-03-13',
      likes: 52,
      saved: false
    }
  ];

  return (
    <DashboardLayout role="patient">
      <div className="health-tips-page">
        <div className="page-header">
          <h1>Health Tips</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search health tips..." />
              <button className="search-btn">🔍</button>
            </div>
            <button className="view-saved-btn">View Saved Tips</button>
          </div>
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>Category</label>
            <select className="filter-select">
              <option value="all">All Categories</option>
              <option value="mental">Mental Health</option>
              <option value="nutrition">Nutrition</option>
              <option value="physical">Physical Health</option>
              <option value="preventive">Preventive Care</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Sort By</label>
            <select className="filter-select">
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="saved">Saved Tips</option>
            </select>
          </div>
        </div>

        <div className="tips-grid">
          {healthTips.map(tip => (
            <div key={tip.id} className="tip-card">
              <div className="tip-header">
                <div className="doctor-info">
                  <span className="doctor-avatar">{tip.doctor.avatar}</span>
                  <div>
                    <h3>{tip.doctor.name}</h3>
                    <p className="specialization">{tip.doctor.specialization}</p>
                  </div>
                </div>
                <span className="category-badge">{tip.category}</span>
              </div>

              <div className="tip-content">
                <h4>{tip.title}</h4>
                <p>{tip.content}</p>
              </div>

              <div className="tip-footer">
                <div className="tip-meta">
                  <span className="date">{tip.date}</span>
                  <span className="likes">❤️ {tip.likes}</span>
                </div>
                <div className="tip-actions">
                  <button className={`action-btn save ${tip.saved ? 'saved' : ''}`}>
                    {tip.saved ? 'Saved' : 'Save'}
                  </button>
                  <button className="action-btn share">Share</button>
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