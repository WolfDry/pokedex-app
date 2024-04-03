import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { slicePokemonsArray } from '../../utils/pokemonUtils';
import { Pokemon } from '../../interface/Pokemon';
import './style.css';
import { useFetchPokemon } from '../../utils/fetchPokemonUtils';


const Pokedex: React.FC = () => {
  const [generation, setGeneration] = useState<number>(1); // Explicitement déclaré comme un nombre
  const [pokemonData, loading, error] = useFetchPokemon();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [start, setStart] = useState<number>(0); // Explicitement déclaré comme un nombre
  const [end, setEnd] = useState<number>(151); // Explicitement déclaré comme un nombre

  useEffect(() => {
    const slice = slicePokemonsArray(generation);
    setStart(slice.start);
    setEnd(slice.end);
    if (pokemonData) {
      setPokemons(pokemonData.slice(start, end));
    }
    if (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  }, [error, generation, start, end, pokemonData]); // Inclure start et end dans les dépendances

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="pokedex">
      <h1>Pokedex Pokémon</h1>
      <div className="pagination">
        {[...Array(9)].map((_, index) => (
          <button
            key={index + 1}
            className={`${index + 1 === generation ? 'active' : ''}`}
            onClick={() => setGeneration(index + 1)}
          >
            Génération {index + 1}
          </button>
        ))}
      </div>
      <div className="pokemon-list">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
