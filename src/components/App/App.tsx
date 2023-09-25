import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import Home from "../../pages/Home/Home";
import PokemonList from "../../pages/PokemonList/PokemonList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { getPokemonList, getPokemon } from "../../redux/actions/pokemonActions";
import PokemonDetail from "../../pages/PokemonDetail/PokemonDetail";

function App() {
  const dispatch = useDispatch();
  const url = useLocation();

  // triggers when the website first load to get Pokémon list
  useEffect(() => {
    dispatch(getPokemonList());
  }, []);

  // triggers when the url changes thanks to the useLocation Hook, everytime the url changes it triggers an event
  useEffect(() => {
    // gets single Pokémon data for Pokémon page detail
    if (url.pathname.slice(0, 9) === "/pokemon/") {
      dispatch(getPokemon(parseInt(url.pathname.replace("/pokemon/", ""))));
    }
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <Container component="div" className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonlist" element={<PokemonList />} />
        <Route path="/pokemon/:number" element={<PokemonDetail />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
