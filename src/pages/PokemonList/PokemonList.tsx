import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { getPokemonList } from "../../redux/actions/pokemonActions";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

function PokemonList() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonList);

  function handleGetData() {
    dispatch(getPokemonList());
    console.log("get data");
  }

  function handlePrintData() {
    console.log(pokemonList);
  }

  return (
    <Container component="main">
    <Typography>Pokemon List</Typography>
    <Button onClick={handleGetData} variant="contained">
      Get Pokémon data
    </Button>
    <Button onClick={handlePrintData} variant="contained">
      Print Pokémon data
    </Button>
    <Button variant="contained">
      <Link to="/pokemon">
        To Pokemon
      </Link>
    </Button>
    <Button variant="contained">
      <Link to="/">
        Back to Home
      </Link>
    </Button>
  </Container>
  );
}

export default PokemonList;