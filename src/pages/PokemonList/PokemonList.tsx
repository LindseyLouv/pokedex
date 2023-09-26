import { Typography, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { Pokemon } from "../../utils/types";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

interface PokemonListProps {
  pageName: string;
}

function PokemonList({ pageName }: PokemonListProps) {
  const pokemonList = useSelector(
    (state: RootState) => state.pokemon.pokemonList
  );

  return (
    <Container component="main" sx={{ paddingBottom: "2rem" }}>
      <Typography
        component="h4"
        variant="h4"
        sx={{
          color: (theme) => theme.palette.primary.main,
          padding: "1rem",
        }}
      >
        {pageName}
      </Typography>
      <Grid container spacing={2}>
        {pokemonList.map((pokemon: Pokemon) => (
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            key={pokemon.number}
            xs={6}
            sm={6}
            md={4}
          >
            <PokemonCard
              key={pokemon.number}
              number={pokemon.number}
              name={pokemon.name}
              image={pokemon.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PokemonList;
