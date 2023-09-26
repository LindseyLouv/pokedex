import { Container, Button, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { PokemonInfos } from "../../utils/types";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import PokemonDetailCard from "../../components/PokemonDetailCard/PokemonDetailCard";
import PokemonStatsCard from "../../components/PokemonStatsCard/PokemonStatsCard";

function PokemonDetail() {
  const pokemon: PokemonInfos | null = useSelector<
    RootState,
    PokemonInfos | null
  >((state) => state.pokemon.currentPokemon);
  const navigate = useNavigate();

  return (
    <Container component="main">
      <Grid container padding="2rem" spacing={2}>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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
          <PokemonDetailCard
            number={pokemon?.number}
            name={pokemon?.name}
            height={pokemon?.height}
            weight={pokemon?.weight}
            type={pokemon?.type}
          ></PokemonDetailCard>
        </Grid>
      </Grid>
      <PokemonStatsCard stats={pokemon?.stats}></PokemonStatsCard>
      <Button
        onClick={() => navigate(-1)}
        sx={{ marginBottom: "2rem" }}
        variant="contained"
      >
        <CatchingPokemonIcon sx={{ mr: 1 }} />
        Pokémon List
      </Button>
    </Container>
  );
}

export default PokemonDetail;
