import { Typography, Container, useTheme } from "@mui/material";

interface StarBarProps {
  value: number;
}

function StatBar({ value }: StarBarProps) {
  const theme = useTheme();
  let percentValue = `${(value / 255) * 100}%`;

  const parentContainerStyle = {
    height: "20px",
    border: 1,
    borderColor: theme.palette.primary.contrastText,
    borderRadius: 2,
    position: "relative",
  };
  const childContainerStyle = {
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: 1,
    width: percentValue,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  };
  return (
    <Container component="div" sx={parentContainerStyle}>
      <Container component="div" sx={childContainerStyle}>
        <Typography sx={{ color: theme.palette.primary.main }}>
          {value}
        </Typography>
      </Container>
    </Container>
  );
}

export default StatBar;
