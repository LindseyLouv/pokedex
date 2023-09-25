import { combineReducers } from "redux";
import pokemonReducer, { initialState } from "./pokemonReducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export type RootState = {
  pokemon: typeof initialState;
  // Add other reducer states here if you have more reducers
};

export default rootReducer;
