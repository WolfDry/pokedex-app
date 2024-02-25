import React, { useState, useEffect } from 'react';
import './App.css';

interface Pokemon {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      const results = data.results.map((pokemon: any, index: number) => ({
        id: index + 1,
        name: pokemon.name,
      }));
      setPokemonList(results);
    } catch (error) {
      console.log('Error fetching Pokemon list: ', error);
    }
  };

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
