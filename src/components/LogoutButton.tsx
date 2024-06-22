import React from 'react';
import { useAuth } from '../context/AuthContext';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout} className='button logoutButton'>
      Déconnexion
    </button>
  );
};

export default LogoutButton;
