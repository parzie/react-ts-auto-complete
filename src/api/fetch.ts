import { PokemonList } from "../Interface";

const BASE_URL = 'https://pokeapi.co/api/v2/';
const POKEMONS = 'pokemons';
const dataCacheMap: Map<string, PokemonList | undefined> = new Map();

export const getPokemons = async (limit = 10000, offset = 0) => {
  if (!dataCacheMap.has(POKEMONS)) {
    const data = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .catch((error) => console.error(error)) as PokemonList | undefined;

    dataCacheMap.set(POKEMONS, data);
  }

  return dataCacheMap.get(POKEMONS);
};

