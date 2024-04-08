import React from 'react';
import Pokedex from './components/Pokedex/Pokedex';
import TopButton from './components/TopButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <Pokedex />
      <TopButton />
    </div>
  );
};

export default App;