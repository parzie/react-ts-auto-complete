import { PokemonList } from "../Interface";

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getPokemons = async (limit = 10000, offset = 0) => {
  const data = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
    .catch((error) => console.error(error)) as PokemonList | undefined;

  return data;
};
