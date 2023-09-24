import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function PokemonList() {

  return (
    <Container component="main">
    <Typography>Pokemon List</Typography>
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