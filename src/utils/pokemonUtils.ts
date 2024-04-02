// pokemonUtils.ts

export const translateType = (englishType: string): { name: string; color: string } => {
    switch (englishType) {
      case 'normal':
        return { name: 'Normal', color: '#A8A77A' };
      case 'fire':
        return { name: 'Feu', color: '#EE8130' };
      case 'water':
        return { name: 'Eau', color: '#6390F0' };
      case 'electric':
        return { name: 'Électrik', color: '#F7D02C' };
      case 'grass':
        return { name: 'Plante', color: '#7AC74C' };
      case 'ice':
        return { name: 'Glace', color: '#96D9D6' };
      case 'fighting':
        return { name: 'Combat', color: '#C22E28' };
      case 'poison':
        return { name: 'Poison', color: '#A33EA1' };
      case 'ground':
        return { name: 'Sol', color: '#E2BF65' };
      case 'flying':
        return { name: 'Vol', color: '#A98FF3' };
      case 'psychic':
        return { name: 'Psy', color: '#F95587' };
      case 'bug':
        return { name: 'Insecte', color: '#A6B91A' };
      case 'rock':
        return { name: 'Roche', color: '#B6A136' };
      case 'ghost':
        return { name: 'Spectre', color: '#735797' };
      case 'dragon':
        return { name: 'Dragon', color: '#6F35FC' };
      case 'dark':
        return { name: 'Ténèbres', color: '#705746' };
      case 'steel':
        return { name: 'Acier', color: '#B7B7CE' };
      case 'fairy':
        return { name: 'Fée', color: '#D685AD' };
      default:
        return { name: englishType, color: '#000000' }; // Couleur par défaut en noir si le type n'est pas trouvé
    }
  };

export const slicePokemonsArray = (gen: number) => {
  switch (gen) {
    case 1:
      return { start: 0, end: 151 }; // Pour la première génération
    case 2:
      return { start: 151, end: 251 }; // Pour la deuxième génération
    case 3:
      return { start: 251, end: 386 }; // Pour la troisième génération
    case 4:
      return { start: 386, end: 493 }; // Pour la quatrième génération
    case 5:
      return { start: 493, end: 649 }; // Pour la cinquième génération
    case 6:
      return { start: 649, end: 721 }; // Pour la sixième génération
    case 7:
      return { start: 721, end: 807 }; // Pour la septième génération
    case 8:
      return { start: 807, end: 905 }; // Pour la huitième génération
    case 9:
      return { start: 905, end: 1025 }; // Pour la neuvième génération
    default:
      return { start: 0, end: 151 }; // Valeur par défaut
  }
}