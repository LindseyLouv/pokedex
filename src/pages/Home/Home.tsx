import { Typography, Container, CardMedia } from "@mui/material";
import pokedex from "./images/pokedex.png";

function Home() {
  console.log("Image Path:", "/assets/images/pokedex.png");

  return (
    <Container component="main" sx={{ padding: "2rem" }}>
      <Typography
        component="h4"
        variant="h4"
        sx={{
          color: (theme) => theme.palette.primary.main,
          padding: "1rem",
        }}
      >
        Welcome to my Pokédex project
      </Typography>
      <CardMedia
        component="img"
        alt="Pokedex"
        width="60vw"
        image={pokedex}
        style={{
          objectFit: "contain",
        }}
      />
    </Container>
  );
}

export default Home;
