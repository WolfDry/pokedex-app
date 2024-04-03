import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { slicePokemonsArray } from '../../utils/pokemonUtils';
import { Pokemon } from '../../interface/Pokemon';
import { insertPokemon } from '../../utils/insertPokemonUtils'
import './style.css';


const Pokedex: React.FC = () => {
  const pokemonData: Pokemon[] = require('../../data/pokemonData.json');
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [generation, setGeneration] = useState(1); // État pour suivre la génération actuellement affichée

  useEffect(() => {
    const slice = slicePokemonsArray(generation)
    const start = slice.start
    const end = slice.end
    setPokemons(pokemonData.slice(start, end))
  }, [generation])

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
