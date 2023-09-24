import { Typography, Container } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';


function Header() {

  return (
    <Container component="header">
      <ResponsiveAppBar></ResponsiveAppBar>
    </Container>
  );
}

export default Header;

