import { SAVE_POKEMON_LIST, SAVE_POKEMON } from "../actions/pokemonActions";
import { Pokemon } from "../../utils/types";

export const initialState = {
  pokemonList: [],
  currentPokemon: null,
};

const reducer = (
  state = initialState,
  action: { type: string; pokemonList: Pokemon[]; currentPokemon?: Pokemon } = {
    type: "",
    pokemonList: [],
  }
) => {
  switch (action.type) {
    case SAVE_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.pokemonList,
      };

    case SAVE_POKEMON:
      return {
        ...state,
        currentPokemon: action.currentPokemon,
      };

    default:
      return state;
  }
};

export default reducer;
