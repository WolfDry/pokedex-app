import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../firebase';
import data from '../data/pokemonData.json';
import { Pokemon } from '../interface/Pokemon';

export function insertPokemon() {
  // const db = getDatabase(app);
  // const pokeData: Pokemon[] = data as Pokemon[];
  // pokeData.forEach((pokemon: Pokemon) => {
  //   set(ref(db, 'pokedex/' + pokemon.id), {
  //     id: pokemon.id,
  //     name: pokemon.name,
  //     frenchName: pokemon.frenchName,
  //     base_experience: pokemon.base_experience,
  //     height: pokemon.height,
  //     is_default: pokemon.is_default,
  //     order: pokemon.order,
  //     weight: pokemon.weight,
  //     abilities: pokemon.abilities,
  //     forms: pokemon.forms,
  //     game_indices: pokemon.game_indices,
  //     held_items: pokemon.held_items,
  //     location_area_encounters: pokemon.location_area_encounters,
  //     moves: pokemon.moves,
  //     species: pokemon.species,
  //     sprites: pokemon.sprites,
  //     cries: pokemon.cries,
  //     stats: pokemon.stats,
  //     types: pokemon.types,
  //     past_types: pokemon.past_types,
  //     catch: pokemon.catch
  //   });
  // });
}
