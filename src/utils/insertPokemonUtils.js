const axios = require('axios');
const fs = require('fs');

const getPokemonData = async () => {
  try {
    const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025'); // 1025 étant le nombre total de pokémons
    const pokemonList = await Promise.all(result.data.results.map(async (pokemon) => {
      const pokemonData = await axios.get(pokemon.url);
      const frenchName = await fetchFrenchName(pokemonData.data.id)
      return {
        id: pokemonData.data.id,
        name: pokemonData.data.name,
        frenchName: frenchName,
        base_experience: pokemonData.data.base_experience,
        height: pokemonData.data.height,
        is_default: pokemonData.data.is_default,
        order: pokemonData.data.order,
        weight: pokemonData.data.weight,
        abilities: pokemonData.data.abilities.map(ability => ability.ability.name),
        forms: pokemonData.data.forms.map(form => form.name),
        game_indices: pokemonData.data.game_indices.map(index => index.version.name),
        held_items: pokemonData.data.held_items.map(item => item.item.name),
        location_area_encounters: pokemonData.data.location_area_encounters,
        moves: pokemonData.data.moves.map(move => move.move.name),
        species: pokemonData.data.species.name,
        sprites: pokemonData.data.sprites,
        cries: pokemonData.data.cries,
        stats: pokemonData.data.stats.map(stat => ({ name: stat.stat.name, base_stat: stat.base_stat })),
        types: pokemonData.data.types.map(type => type.type.name),
        past_types: pokemonData.data.past_types.map(type => (type)),
        catch: 0
      };
    }));
    fs.writeFileSync('pokemon_data.json', JSON.stringify(pokemonList, null, 2));
    console.log('Données des Pokémon enregistrées dans le fichier pokemon_data.json');
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
};

const fetchFrenchName = async (id) => {
  const result = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const names = result.data.names;
  const frenchNameObj = names.find((name) => name.language.name === 'fr');
  return frenchNameObj.name;
};

getPokemonData();
