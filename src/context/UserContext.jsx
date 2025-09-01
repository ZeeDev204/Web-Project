import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    // Try to get user data from localStorage on initial load
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  const refreshUserData = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/check', {
        credentials: 'include',
      });
      const data = await res.json();
      
      if (res.ok && data.authenticated) {
        setUserData(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        setUserData(null);
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error refreshing user data:', error);
      setUserData(null);
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  };

  // Update localStorage when userData changes
  useEffect(() => {
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user');
    }
  }, [userData]);

  // Check authentication status on mount
  useEffect(() => {
    refreshUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, refreshUserData, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};