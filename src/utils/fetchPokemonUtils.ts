import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, DataSnapshot } from 'firebase/database';
import { app } from '../firebase';
import { Pokemon } from '../interface/Pokemon';

// Définir un type pour l'erreur
type FetchError = {
  message: string;
  name: string;
};

// Fonction pour récupérer les données depuis Firebase
export function useFetchPokemon(): [Pokemon[] | null, boolean, FetchError | null] {
  const [pokemonData, setPokemonData] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const pokemonRef = ref(db, 'pokedex');

      try {
        // Créer un écouteur pour récupérer les données
        onValue(pokemonRef, (snapshot: DataSnapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convertir l'objet de données en tableau de Pokémon
            const pokemonArray: Pokemon[] = Object.values(data);
            setPokemonData(pokemonArray);
            setLoading(false);
          }
        }, (error) => {
          setError({
            message: error.message,
            name: error.name
          });
          setLoading(false);
        });

        // Pour détacher l'écouteur lors du démontage du composant
        return () => {
          // Détacher l'écouteur
        };
      } catch (error) {
        setError({
          message: 'Une erreur s\'est produite lors de la récupération des données.',
          name: 'unknown'
        });
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [pokemonData, loading, error];
}
