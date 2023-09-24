import { Typography, Container, Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { Pokemon } from '../../utils/types'
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function PokemonList() {
  const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonList);

  function handlePrintData() {
    console.log(pokemonList[1]);
  }

  return (
    <Container component="main">
      <Typography 
        component="h2" 
        variant="h2" 
        sx={{ 
          color: (theme) => theme.palette.primary.main, 
          padding: "1rem" 
        }}
      >
        Pokemon List
      </Typography>
      <Grid 
        container 
        spacing={2} 
      >
        {pokemonList.map((pokemon: Pokemon) => (
          <Grid 
            style={{ display: "flex", justifyContent: "center" }}
            item
            key={pokemon.number}
            xs={6}
            sm={6}
            md={4}
            >
            <PokemonCard key={pokemon.number} number={pokemon.number} name={pokemon.name} image={pokemon.image} />
          </Grid>
        ))}
      </Grid>
      <Button onClick={handlePrintData} variant="contained">
        Print Pokémon data
      </Button>
  </Container>
  );
}

export default PokemonList;