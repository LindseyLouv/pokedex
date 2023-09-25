import { Pokemon } from "../../utils/types";

export const GET_POKEMON_LIST = "GET_POKEMON_LIST";
export const SAVE_POKEMON_LIST = "SAVE_POKEMON_LIST";
export const GET_POKEMON = "GET_POKEMON";
export const SAVE_POKEMON = "SAVE_POKEMON";

export const getPokemonList = (region: string) => ({
  type: GET_POKEMON_LIST,
  region: region,
});

export const savePokemonList = (pokemonList: Pokemon[]) => ({
  type: SAVE_POKEMON_LIST,
  pokemonList: pokemonList,
});

export const getPokemon = (pokemonNumber: number) => ({
  type: GET_POKEMON,
  pokemonNumber: pokemonNumber,
});

export const savePokemon = (currentPokemon: Pokemon) => ({
  type: SAVE_POKEMON,
  currentPokemon: currentPokemon,
});
