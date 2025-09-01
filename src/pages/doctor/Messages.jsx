import DashboardLayout from '../../components/DashboardLayout';
import { useUser } from '../../context/UserContext';
import './Messages.css';

const Messages = () => {
  const { userData } = useUser();
  const conversations = userData?.conversations || [];
  // Fallback: use the first conversation as selected, or an empty object
  const selectedConversation = conversations.length > 0 ? conversations[0] : { messages: [] };

  return (
    <DashboardLayout role="doctor">
      <div className="messages-page">
        <div className="page-header">
          <h1>Messages</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search conversations..." />
              <button className="search-btn">🔍</button>
            </div>
            <button className="new-message-btn">New Message</button>
          </div>
        </div>

        <div className="messages-container">
          <div className="conversations-list">
            <div className="conversations-header">
              <h2>Conversations</h2>
              <div className="conversation-filters">
                <select className="filter-select">
                  <option value="all">All Messages</option>
                  <option value="unread">Unread</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
            <div className="conversations">
              {conversations.length > 0 && conversations.map(conversation => (
                <div key={conversation.id || conversation.conversationId} className={`conversation-item ${conversation.unread ? 'unread' : ''}`}>
                  <div className="avatar">{conversation.avatar}</div>
                  <div className="conversation-info">
                    <div className="conversation-header">
                      <h3>{conversation.patientName}</h3>
                      <span className="timestamp">{conversation.timestamp}</span>
                    </div>
                    <p className="last-message">{conversation.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-container">
            <div className="chat-header">
              <div className="chat-info">
                <h2>{selectedConversation.patientName || ''}</h2>
                <span className="status">Online</span>
              </div>
              <div className="chat-actions">
                <button className="action-btn">📞</button>
                <button className="action-btn">📹</button>
                <button className="action-btn">⋮</button>
              </div>
            </div>

            <div className="messages-list">
              {selectedConversation.messages && selectedConversation.messages.map(message => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <div className="message-content">
                    <p>{message.content}</p>
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="message-input">
              <input type="text" placeholder="Type your message..." />
              <button className="send-btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages; 