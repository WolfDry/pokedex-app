import React from 'react';
import Pokedex from './components/Pokedex/Pokedex';
import TopButton from './components/TopButton';
import Auth from './components/Auth/Auth';
import { AuthProvider, useAuth } from './context/AuthContext';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return user ? <><Pokedex /> <TopButton/></> : <Auth />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <AppContent />
      </div>
    </AuthProvider>
  );
};

export default App;