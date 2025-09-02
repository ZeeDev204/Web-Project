import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const navigate = useNavigate();
  const { userData, loading, refreshUserData } = useUser();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const res = await fetch('http://localhost:5000/api/auth/check', {
  //         credentials: 'include',
  //       });
  //       const data = await res.json();

  //       if (res.ok && data.authenticated) {
  //         console.log('User is authenticated:', data.user);
          
  //         // Check if user's role is allowed
  //         if (allowedRoles.length > 0 && !allowedRoles.includes(data.user.role)) {
  //           console.log('User role not allowed:', data.user.role);
  //           navigate('/unauthorized');
  //           return;
  //         }
  //       } else {
  //         console.log('Not authenticated, redirecting to login...');
  //         navigate('/login');
  //       }
  //     } catch (err) {
  //       console.error('Error checking auth:', err);
  //       navigate('/login');
  //     }
  //   };

  //   checkAuth();
  // }, [navigate, allowedRoles]);

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (!userData) {
    return null; // Don't render anything while redirecting
  }

  return children;
};

export default ProtectedRoute; 