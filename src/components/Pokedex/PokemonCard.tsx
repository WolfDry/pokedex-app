import React, { useEffect, useState } from 'react';
import { translateType } from '../../utils/pokemonUtils';
import { Pokemon } from '../../interface/Pokemon';
import './pokemonCard.css';
import { Loader } from '../Loader/Loader';
import { PokemonCatch } from '../../interface/PokemonCatch';
import { updateUserCatch } from '../../utils/updateUserCatchUtils';
import { useAuth } from '../../context/AuthContext';

interface Props {
  pokemon: Pokemon;
  pokemonCatchList: PokemonCatch[];
}

const PokemonCard: React.FC<Props> = ({ pokemon, pokemonCatchList }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { userInfo, refreshUserInfo } = useAuth();
  const [isCatch, setIsCatch] = useState<number | undefined>(0);

  useEffect(() => {
    const isCatch = pokemonCatchList.find((pokemonCatch) => pokemonCatch.pokemonId === pokemon.id);
    setIsCatch(isCatch?.catch);
    if (!isCatch) setIsCatch(0);
  }, [userInfo, pokemon, pokemonCatchList]);

  const handleClick = async () => {
    if (!userInfo) return;

    const updatedCatchList = pokemonCatchList ? pokemonCatchList : [];
    const existingPokemonCatch = updatedCatchList.find(
      (pokemonCatch) => pokemonCatch.pokemonId === pokemon.id
    );

    if (existingPokemonCatch) {
      existingPokemonCatch.catch += 1;
      if (existingPokemonCatch.catch > 2) {
        existingPokemonCatch.catch = 0;
      }
    } else {
      updatedCatchList.push({ pokemonId: pokemon.id, catch: 1 });
    }

    const updatedUser = {
      ...userInfo,
      catch: updatedCatchList,
    };

    await updateUserCatch(updatedUser, userInfo.uid);
    await refreshUserInfo();  // Forcer la mise à jour des informations utilisateur
  };

  return (
    <div className={`pokemon-card ${translateType(pokemon.types[0]).slug}`} onClick={handleClick}>
      {!isLoaded && <Loader />}
      <div className="pokemon-img">
        <img
          src={pokemon.sprites.other['official-artwork']?.front_default}
          alt={pokemon.name}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="details">
        <h2>{pokemon.frenchName}</h2>
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
      <div className={`catch capture-level-${isCatch}`}></div>
    </div>
  );
};

export default PokemonCard;
