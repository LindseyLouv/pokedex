import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import pokemonMiddleware from '../middlewares/pokemonMiddleware';


const store = createStore(
  rootReducer,
  applyMiddleware(pokemonMiddleware)
);

export default store;
