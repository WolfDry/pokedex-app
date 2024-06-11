import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { slicePokemonsArray } from '../../utils/pokemonUtils';
import { Pokemon } from '../../interface/Pokemon';
import { useFetchPokemon } from '../../utils/fetchPokemonUtils';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';
import './style.css';


const Pokedex: React.FC = () => {
  const [generation, setGeneration] = useState<number>(1);
  const [pokemonData, loading, error] = useFetchPokemon();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(151);
  const [count, setCount] = useState({
    "catch": 0,
    "toEvolve": 0,
    "toCatch": 0
  })
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const slice = slicePokemonsArray(generation);
    setStart(slice.start);
    setEnd(slice.end);

    if (pokemonData) {
      const slicedPokemons = pokemonData.slice(slice.start, slice.end);
      const filteredPokemons = slicedPokemons.filter(pokemon =>
        pokemon.frenchName.toLowerCase().includes(search.toLowerCase())
      );
      setPokemons(filteredPokemons);
    }

    if (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  }, [error, generation, pokemonData, search]);

  useEffect(() => {
    let catchCount = {
      catch: 0,
      toEvolve: 0,
      toCatch: 0
    }
    catchCount.catch = pokemons.filter(pokemon => pokemon.catch === 2).length
    catchCount.toEvolve = pokemons.filter(pokemon => pokemon.catch === 1).length
    catchCount.toCatch = pokemons.filter(pokemon => pokemon.catch === 0).length

    setCount(catchCount)
  }, [pokemons])

  if (loading) {
    return (
      <Loader />
    )
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="pokedex">
      <div className='header'>
        <h1>Pokédex Pokémon</h1>
        <SearchBar setValue={setSearch} />
      </div>
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
      <div className="catchCount">
        <span>
          Pokemon capturé : {count.catch}
        </span>
        <span>
          Pokemon à évoluer : {count.toEvolve}
        </span>
        <span>
          Pokemon à catpurer : {count.toCatch}
        </span>
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
