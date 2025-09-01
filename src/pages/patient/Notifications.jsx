import { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data - replace with actual data from your backend
  useEffect(() => {
    const mockNotifications = [
    {
      id: 1,
        type: 'email',
        subject: 'Appointment Confirmation',
        message: 'Your appointment with Dr. Sarah Johnson has been confirmed for tomorrow at 09:00 AM. Please arrive 15 minutes before your scheduled time. Don\'t forget to bring your insurance card and any relevant medical records.',
        timestamp: '2024-03-19T10:30:00',
      read: false,
        sender: 'system@mediconnect.com',
        recipient: 'patient@example.com',
        attachments: ['appointment_details.pdf']
    },
    {
      id: 2,
        type: 'email',
        subject: 'Test Results Available',
        message: 'Your blood test results from March 15th are now available. The results show normal ranges for most parameters. Please log in to view your complete report and discuss any concerns with your doctor during your next visit.',
        timestamp: '2024-03-18T15:45:00',
      read: false,
        sender: 'lab@mediconnect.com',
        recipient: 'patient@example.com',
        attachments: ['blood_test_results.pdf']
    },
    {
      id: 3,
        type: 'email',
        subject: 'Prescription Update',
        message: 'Your prescription for Lisinopril has been renewed by Dr. Michael Brown. The new prescription is valid for 90 days. Please collect it from your preferred pharmacy within the next 7 days.',
        timestamp: '2024-03-17T11:20:00',
      read: true,
        sender: 'pharmacy@mediconnect.com',
        recipient: 'patient@example.com',
        attachments: ['prescription.pdf']
      }
    ];

    setNotifications(mockNotifications);
  }, []);

  const handleMarkAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleViewDetails = (notification) => {
    setSelectedEmail(notification);
    setShowModal(true);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <DashboardLayout role="patient">
      <div className="notifications-page">
        <div className="page-header">
          <h1>Email Notifications</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search emails..." />
              <button className="search-btn">🔍</button>
            </div>
          </div>
        </div>

        <div className="notifications-list">
          {notifications.map(notification => (
            <div
              key={notification.id}
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            >
              <div className="notification-subject">{notification.subject}</div>
                <div className="notification-actions">
                <button 
                  className="action-btn view"
                  onClick={() => handleViewDetails(notification)}
                >
                  View Details
                </button>
                  {!notification.read && (
                  <button 
                    className="action-btn mark-read"
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    Mark as Read
                  </button>
                  )}
              </div>
            </div>
          ))}
        </div>

        {showModal && selectedEmail && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedEmail.subject}</h2>
                <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
              </div>
              <div className="modal-body">
                <div className="email-details">
                  <div className="email-meta">
                    <div className="meta-item">
                      <span className="label">From:</span>
                      <span className="value">{selectedEmail.sender}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">To:</span>
                      <span className="value">{selectedEmail.recipient}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Date:</span>
                      <span className="value">{formatTimestamp(selectedEmail.timestamp)}</span>
                    </div>
                  </div>
                  <div className="email-message">
                    {selectedEmail.message}
                  </div>
                  {selectedEmail.attachments && selectedEmail.attachments.length > 0 && (
                    <div className="email-attachments">
                      <h4>Attachments:</h4>
                      <ul>
                        {selectedEmail.attachments.map((attachment, index) => (
                          <li key={index}>
                            <span className="attachment-icon">📎</span>
                            {attachment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Notifications; 