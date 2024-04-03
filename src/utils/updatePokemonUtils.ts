import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../firebase';
import { Pokemon } from '../interface/Pokemon';

// Fonction pour mettre à jour un Pokémon dans la base de données Firebase
export function updatePokemon(pokemonId: number, updatedPokemon: Pokemon): Promise<void> {
  const db = getDatabase(app);
  const pokemonRef = ref(db, `pokedex/${pokemonId}`);
  
  // Utilisation de set() pour mettre à jour le Pokémon avec les nouvelles données
  return set(pokemonRef, updatedPokemon);
}
