import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { Pokemon } from '../../utils/types'

function PokemonList() {
  const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonList);

  function handlePrintData() {
    console.log(pokemonList[1]);
  }

  return (
    <Container component="main">
    <Typography>Pokemon List</Typography>
          {/* Map through the pokemonList and display Typography for each Pokemon */}
          {pokemonList.map((pokemon: Pokemon) => (
        <Typography key={pokemon.number}>{pokemon.name}</Typography>
      ))}
    <Button onClick={handlePrintData} variant="contained">
      Print Pokémon data
    </Button>
    <Button variant="contained">
      <Link to="/pokemon">
        To Pokemon
      </Link>
    </Button>
  </Container>
  );
}

export default PokemonList;