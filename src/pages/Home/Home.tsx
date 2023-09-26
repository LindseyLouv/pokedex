import { Typography, Container, CardMedia } from "@mui/material";
import pokedex from "./images/pokedex.png";
import Link from "@mui/material/Link";

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
      <Container
        component="div"
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-evenly",
          paddingTop: "1rem",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        <Link
          href="https://github.com/LindseyLouv/pokedex-frontend"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          GitHub Front-End Repository
        </Link>
        <Link
          href="https://github.com/LindseyLouv/pokedex-backend"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          GitHub Back-End Repository
        </Link>
      </Container>
    </Container>
  );
}

export default Home;
