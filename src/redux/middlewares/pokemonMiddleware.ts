import axios from "axios";
import {
  GET_POKEMON_LIST,
  savePokemonList,
  GET_POKEMON,
  savePokemon,
} from "../actions/pokemonActions";
import { Middleware } from "redux";
import { RootState } from "../reducers/rootReducer";

const pokemonMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    switch (action.type) {
      case GET_POKEMON_LIST:
        axios
          .get(`http://localhost:3030/pokemon/all`)
          .then((response) => {
            store.dispatch(savePokemonList(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
        break;

      case GET_POKEMON:
        axios
          .get(`http://localhost:3030/pokemon/${action.pokemonNumber}`)
          .then((response) => {
            store.dispatch(savePokemon(response.data));
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
