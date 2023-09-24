import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Pokemon() {

  return (
    <Container component="main">
    <Typography>Pokemon</Typography>
    <Button variant="contained">
      <Link to="/">
        Back to Pokemon List
      </Link>
    </Button>
  </Container>
  );
}

export default Pokemon;