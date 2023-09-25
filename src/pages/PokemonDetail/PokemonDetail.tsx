import { Typography, Container, Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { Pokemon } from "../../utils/types";
import { capitalizeFirstLetter } from "../../utils/functions";

function PokemonDetail() {
  const pokemon: Pokemon | null = useSelector<RootState, Pokemon | null>(
    (state) => state.pokemon.currentPokemon
  );

  console.log(pokemon);
  return (
    <Container component="main">
      <Typography>{`${capitalizeFirstLetter(pokemon?.name)} n°${String(
        pokemon?.number
      ).padStart(3, "0")}`}</Typography>
      <CardMedia
        sx={{ height: 220, width: 220 }}
        image={pokemon?.image}
        title={pokemon?.name}
      />
      <Button variant="contained">
        <Link to="/pokemonList">Back to Pokemon List</Link>
      </Button>
    </Container>
  );
}

export default PokemonDetail;
