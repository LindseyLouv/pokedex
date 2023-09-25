import { Typography, Container, Button, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { PokemonInfos } from "../../utils/types";
import { capitalizeFirstLetter } from "../../utils/functions";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

function PokemonDetail() {
  const pokemon: PokemonInfos | null = useSelector<
    RootState,
    PokemonInfos | null
  >((state) => state.pokemon.currentPokemon);

  return (
    <Container component="main">
      <Grid container padding="2rem" spacing={2}>
        <Grid
          item
          style={{ display: "flex", justifyContent: "center" }}
          xs={12}
          sm={6}
        >
          <CardMedia
            sx={{ height: 220, width: 220 }}
            image={pokemon?.image}
            title={pokemon?.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography component="h5" variant="h5">{`${capitalizeFirstLetter(
            pokemon?.name
          )} n°${String(pokemon?.number).padStart(3, "0")}`}</Typography>
          <Typography>{`Height : ${
            pokemon ? pokemon?.height / 10 : ""
          } m`}</Typography>
          <Typography>{`Weight : ${
            pokemon ? pokemon?.weight / 10 : ""
          } kg`}</Typography>
          {pokemon?.type.length === 1 && (
            <Typography>{`Type : ${capitalizeFirstLetter(
              pokemon?.type[0]
            )}`}</Typography>
          )}{" "}
          {pokemon?.type.length === 2 && (
            <Typography>{`Type : ${capitalizeFirstLetter(
              pokemon?.type[0]
            )} & ${capitalizeFirstLetter(pokemon?.type[1])}`}</Typography>
          )}
          {pokemon?.stats.map((stat) => (
            <Typography key={stat.stat.name}>{`${capitalizeFirstLetter(
              stat.stat.name
            )} : ${stat.base_stat}`}</Typography>
          ))}
        </Grid>
      </Grid>
      <Button sx={{ marginBottom: "2rem" }} variant="contained">
        <Link
          style={{ textDecoration: "none", color: "inherit", display: "flex" }}
          to="/pokemonList"
        >
          <CatchingPokemonIcon sx={{ mr: 1 }} />
          Pokemon List
        </Link>
      </Button>
    </Container>
  );
}

export default PokemonDetail;
