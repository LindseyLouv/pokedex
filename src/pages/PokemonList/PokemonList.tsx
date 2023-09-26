import { Typography, Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";
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
  const [visiblePokemon, setVisiblePokemon] = useState<Pokemon[]>([]);
  const [totalPokemon, setTotalPokemon] = useState<Pokemon[]>([]);

  // Load initial data for 9 Pokémon
  useEffect(() => {
    const initialVisiblePokemon = pokemonList.slice(0, 9);
    setVisiblePokemon(initialVisiblePokemon);
    setTotalPokemon(pokemonList);
  }, [pokemonList]);

  // Handle scroll behavior to load more Pokémon when bottom of the page is reached
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 5
      ) {
        // Reached near the bottom of the page
        const currentLength = visiblePokemon.length;
        const nextVisiblePokemon = totalPokemon.slice(
          currentLength,
          currentLength + 9
        );
        setVisiblePokemon((prevVisiblePokemon) => [
          ...prevVisiblePokemon,
          ...nextVisiblePokemon,
        ]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visiblePokemon, totalPokemon]);

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
        {visiblePokemon.map((pokemon: Pokemon) => (
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
