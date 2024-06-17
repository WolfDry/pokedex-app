import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

interface SearchBarProps {
    setSearch: (value: string) => void;
}

const NavBar: React.FC<SearchBarProps> = ({ setSearch }) => {
    return (
        <div className='header'>
            <h1>Pokédex Pokémon</h1>
            <SearchBar setValue={setSearch} />
        </div>
    )
}

export default NavBar