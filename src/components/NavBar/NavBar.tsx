import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './style.css'

interface SearchBarProps {
    setSearch: (value: string) => void;
}

const NavBar: React.FC<SearchBarProps> = ({ setSearch }) => {
    return (
        <div className='header'>
            <div id="title">
                <h1>Pokédex Pokémon</h1>
            </div>
            <div id="searchBar">
                <SearchBar setValue={setSearch} />
            </div>
        </div>
    )
}

export default NavBar