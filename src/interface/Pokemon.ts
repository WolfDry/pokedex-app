// Interface pour les données des Pokémon
export interface Pokemon {
    id: number,
    name: string,
    frenchName: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: string[],
    forms: string[],
    game_indices: string[],
    held_items: string[],
    location_area_encounters: string,
    moves: string[],
    species: string,
    sprites: object,
    cries: object,
    stats: object[],
    types: string[],
    past_types: object[],
    catch: number
  }
  