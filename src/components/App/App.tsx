import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

import './App.css';
import Home from '../../pages/Home/Home';
import PokemonList from '../../pages/PokemonList/PokemonList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pokemon from '../../pages/Pokemon/Pokemon';

function App() {
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
