import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <Container component="main">
      <Typography>Home</Typography>
      <Button variant="contained">
        <Link to="/pokemonlist">
          See all Pokémon
        </Link>
      </Button>
    </Container>
  );
}

export default Home;