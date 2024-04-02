// PokemonCard.tsx
import React, { useState } from 'react';
import { translateType } from '../../utils/pokemonUtils'; // Importer la fonction de traduction
import { Pokemon } from '../../interface/Pokemon';
import { updatePokemon } from '../../utils/updatePokemonUtils';
import './pokemonCard.css'; // Importer les styles CSS

interface Props {
  pokemon: Pokemon
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {

  const handleClick = () => {
    pokemon.catch += 1
    if (pokemon.catch > 2)
      pokemon.catch = 0
    updatePokemon(pokemon.id, pokemon)
  };

  return (
    <div className={`pokemon-card capture-level-${pokemon.catch} `} onClick={handleClick}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
      <div className="details">
        <h2>{pokemon.frenchName}</h2> {/* Affiche le nom français du Pokémon */}
        <div className="types">
          {pokemon.types.map((type, index) => {
            const { name, color } = translateType(type);
            return (
              <div key={index} className="type" style={{ backgroundColor: color }}>
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
