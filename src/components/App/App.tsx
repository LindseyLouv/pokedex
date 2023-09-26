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

  // triggers when the url changes thanks to the useLocation Hook, everytime the url changes it triggers an event
  useEffect(() => {
    // gets Kanto Pokémon data
    if (url.pathname === "/pokemon/kanto") {
      dispatch(getPokemonList("kanto"));
    }
    // gets Johto Pokémon data
    else if (url.pathname === "/pokemon/johto") {
      dispatch(getPokemonList("johto"));
    }
    // gets Hoenn Pokémon data
    else if (url.pathname === "/pokemon/hoenn") {
      dispatch(getPokemonList("hoenn"));
    }
    // gets single Pokémon data for Pokémon page detail
    else if (url.pathname.slice(0, 9) === "/pokemon/") {
      dispatch(getPokemon(parseInt(url.pathname.replace("/pokemon/", ""))));
    }
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <Container component="div" className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pokemon/kanto"
          element={<PokemonList pageName="Kanto Region Pokémon" />}
        />
        <Route
          path="/pokemon/johto"
          element={<PokemonList pageName="Johto Region Pokémon" />}
        />
        <Route
          path="/pokemon/hoenn"
          element={<PokemonList pageName="Hoenn Region Pokémon" />}
        />
        <Route path="/pokemon/:number" element={<PokemonDetail />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
