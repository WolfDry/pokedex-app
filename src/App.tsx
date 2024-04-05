import React from 'react';
import Pokedex from './components/Pokedex/Pokedex';

const App: React.FC = () => {
  return (
    <div className="App">
      <Pokedex />
      <button className='top' onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }}>
        <div className="text">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <div className="clone">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <svg
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>

    </div>
  );
};

export default App;
