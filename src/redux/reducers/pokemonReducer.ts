import { SAVE_POKEMON_LIST } from "../actions/pokemonActions";

export const initialState = {
  pokemonList: [],
};

const reducer = (state = initialState, action: { type: string, pokemonList: any } = { type: '', pokemonList: [] }) => {
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
