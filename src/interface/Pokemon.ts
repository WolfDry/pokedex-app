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
  sprites: {
    back_default?: string,
    back_shiny?: string,
    front_default?: string,
    front_shiny?: string,
    other: {
      dream_world?: {
        front_default: string,
      },
      home?: {
        front_default: string,
        front_shiny: string,
      },
      'official-artwork'?: {
        front_default: string,
        front_shiny: string,
      },
      showdown?: {
        back_default: string,
        back_shiny: string,
        front_default: string,
        front_shiny: string,
      }
    },
    versions?: {
      'generation-i'?: {
        'red-blue': {
          back_default: string,
          back_grey: string,
          back_transparent: string,
          front_default: string,
          front_grey: string,
          front_transparent: string,
        },
        yellow: {
          back_default: string,
          back_grey: string,
          back_transparent: string,
          front_default: string,
          front_grey: string,
          front_transparent: string,
        }
      },
      'generation-ii'?: {
        crystal: {
          back_default: string,
          back_shiny: string,
          back_shiny_transparent: string,
          back_transparent: string,
          front_default: string,
          front_shiny: string,
          front_shiny_transparent: string,
          front_transparent: string,
        },
        gold: {
          back_default: string,
          back_shiny: string,
          back_transparent: string,
          front_default: string,
          front_shiny: string,
          front_transparent: string,
        },
        silver: {
          back_default: string,
          back_shiny: string,
          back_transparent: string,
          front_default: string,
          front_shiny: string,
          front_transparent: string,
        },
      },
      'generation-iii'?: {
        emerald: {
          front_default: string,
          front_shiny: string,
        },
        'firered-leafgreen': {
          front_default: string,
          front_shiny: string,
        },
        'reb-sapphire': {
          front_default: string,
          front_shiny: string,
        },
      },
      'generation-iv'?: {
        'diamond-pearl': {
          back_default: string,
          back_shiny: string,
          front_default: string,
          front_shiny: string,
        },
        'heartgold-soulsilver': {
          back_default: string,
          back_shiny: string,
          front_default: string,
          front_shiny: string,
        },
        platinum: {
          back_default: string,
          back_shiny: string,
          front_default: string,
          front_shiny: string,
        },
      },
      'generation-v'?: {
        'black-white': {
          animated: {
            back_default: string,
            back_shiny: string,
            front_default: string,
            front_shiny: string,
          }
          back_default: string,
          back_shiny: string,
          front_default: string,
          front_shiny: string,
        },
      },
      'generation-vi'?: {
        'omegaruby-alphasapphire': {
          front_default: string,
          front_shiny: string,
        },
        'x-y': {
          front_default: string,
          front_shiny: string,
        },
      },
      'generation-vii'?: {
        icons: {
          front_default: string,
        },
        'ultra-sun-ultra-moon': {
          front_default: string,
          front_shiny: string,
        },
      },
      'generation-viii'?: {
        icons: {
          front_default: string,
        },
      },
    }
  },
  cries: object,
  stats: object[],
  types: string[],
  past_types: object[],
  catch: number
}
