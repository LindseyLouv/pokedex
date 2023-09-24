import axios from "axios";
import { SAVE_POKEMON_LIST, savePokemonList } from "../actions/pokemonActions";
import { Dispatch, Middleware } from 'redux';
import RootReducer, { RootState } from '../reducers/rootReducer'; // Import the root state type

const pokemonMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) =>  {
  switch (action.type) {
    case SAVE_POKEMON_LIST:
      axios
        .get(`http://localhost:3030/pokemon`)
        .then((response) => {
          store.dispatch(savePokemonList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }
  
  next(action);
};

export default pokemonMiddleware;