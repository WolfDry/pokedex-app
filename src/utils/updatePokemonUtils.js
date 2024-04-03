import pokemonData from '../data/pokemonData.json';

// Fonction pour mettre à jour un Pokémon dans le stockage local
export const updatePokemon = (id, newData) => {
  try {
    const updatedPokemonIndex = pokemonData.findIndex(pokemon => pokemon.id === id);
    if (updatedPokemonIndex !== -1) {
      // Mettre à jour les données du Pokémon
      pokemonData[updatedPokemonIndex] = { ...pokemonData[updatedPokemonIndex], ...newData };
      console.log(`Pokémon with ID ${id} updated successfully.`);
      return true;
    } else {
      console.log(`Pokémon with ID ${id} not found.`);
      return false;
    }
  } catch (error) {
    console.error('Error updating Pokémon:', error);
    return false;
  }
};
