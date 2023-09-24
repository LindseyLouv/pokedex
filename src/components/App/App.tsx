import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Home from '../../pages/Home/Home';
import PokemonList from '../../pages/PokemonList/PokemonList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pokemon from '../../pages/Pokemon/Pokemon';

import { getPokemonList } from "../../redux/actions/pokemonActions";

function App() {
  const dispatch = useDispatch();

  // triggers when the website first load to get categories for modal
  useEffect(() => {
    dispatch(getPokemonList());
    console.log("get data");
  }, []);
  
  return (
    <Container component="div" className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/pokemonlist" element={<PokemonList />} />         
        <Route path="/pokemon" element={<Pokemon />} />   
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
