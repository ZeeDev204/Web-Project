import { useState } from 'react';
import Sidebar from './Sidebar';
import './DashboardLayout.css';

const DashboardLayout = ({ children, role }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar 
        role={role} 
        onToggle={(collapsed) => setIsSidebarCollapsed(collapsed)} 
      />
      <main className={`main-content ${isSidebarCollapsed ? 'expanded' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout; 