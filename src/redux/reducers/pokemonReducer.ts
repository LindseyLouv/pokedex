import { SAVE_POKEMON_LIST } from "../actions/pokemonActions";
import { Pokemon } from '../../utils/types';

export const initialState = {
  pokemonList: [],
};

const reducer = (state = initialState, action: { type: string, pokemonList: Pokemon[] } = { type: '', pokemonList: [] }) => {
  switch (action.type) {
    case SAVE_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.pokemonList,
      };

    default:
      return state;
  }
};

export default reducer;
