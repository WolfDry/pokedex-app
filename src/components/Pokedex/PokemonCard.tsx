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
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    pokemon.catch += 1
    if (pokemon.catch > 2)
      pokemon.catch = 0
    updatePokemon(pokemon.id, pokemon)
  };

  return (
    <div className={`pokemon-card ${translateType(pokemon.types[0]).slug} `} onClick={handleClick}>
      {!isLoaded && 
        <div className="loader"></div>
      }
      <div className="pokemon-img">
        <img
          src={pokemon.sprites.other['official-artwork']?.front_default}
          alt={pokemon.name}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
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
      <div className={`catch capture-level-${pokemon.catch}`}></div>
    </div>
  );
};

export default PokemonCard;
