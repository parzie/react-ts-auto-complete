import { useEffect, useState } from 'react'
import { PokemonList, Result } from '../Interface';
import { getPokemons } from '../api/fetch';

export default function usePokemons(searchValue = '') {
  const [pokemonResults, setPokemonResults] = useState<Result[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { results } = await getPokemons() as PokemonList;
        setPokemonResults(results);
      } catch (error) {
        console.error(error);
      }
    }

    getData()
  }, [searchValue]);
  return {
    pokemonResults,
  };
}
