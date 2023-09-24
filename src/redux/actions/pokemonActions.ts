import { Pokemon } from "../../utils/types";

export const GET_POKEMON_LIST = "GET_POKEMON_LIST";
export const SAVE_POKEMON_LIST = "SAVE_POKEMON_LIST";

export const getPokemonList = () => ({
    type: GET_POKEMON_LIST,
  });

export const savePokemonList = (pokemonList: Pokemon[]) => ({
  type: SAVE_POKEMON_LIST,
  pokemonList: pokemonList,
});