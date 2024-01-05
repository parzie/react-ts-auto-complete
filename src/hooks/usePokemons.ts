import { useEffect, useState } from 'react'
import { PokemonList } from '../Interface';
import { getPokemons } from '../api/fetch';

export default function usePokemons(searchValue = '') {
  const [pokemonResults, setPokemonResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (): Promise<string[]> => {
    const { results } = await getPokemons() as PokemonList;

    const filteredPokemons = searchValue ?
      results.filter(({ name }) => name.startsWith(searchValue.toLowerCase()))
        .map(({ name }) => name) : [];

    return filteredPokemons as string[];
  }

  useEffect(() => {
    if (!searchValue) return;
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData();
        setPokemonResults(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }

    getData()
  }, [searchValue]);

  return {
    isLoading,
    pokemonResults,
  };
}
