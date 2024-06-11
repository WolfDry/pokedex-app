import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './style.css';

interface SearchBarProps {
  setValue: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setValue }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input onChange={handleInputChange} />
      <FontAwesomeIcon icon={faMagnifyingGlass} color='black' className='fa'/>
    </div>
  );
};

export default SearchBar;
