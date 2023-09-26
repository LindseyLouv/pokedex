import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { capitalizeFirstLetter } from "../../utils/functions";
import { cardStyle, cardTitleStyle } from "../../style/styles";

interface PokemonDetailCardProps {
  number?: number;
  name?: string;
  height?: number;
  weight?: number;
  type?: string[];
}

export default function PokemonDetailCard({
  number,
  name,
  height,
  weight,
  type,
}: PokemonDetailCardProps) {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        padding: "2rem",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Typography
        component="h5"
        variant="h5"
        color={(theme) => theme.palette.primary.contrastText}
        marginBottom="1rem"
      >{`${capitalizeFirstLetter(name)} n°${String(number).padStart(
        3,
        "0"
      )}`}</Typography>
      <Typography sx={cardTitleStyle}>General</Typography>
      <Card sx={cardStyle}>
        <Typography>{`Height : ${height ? height / 10 : ""} m`}</Typography>
        <Typography>{`Weight : ${weight ? weight / 10 : ""} kg`}</Typography>
      </Card>
      <Typography sx={cardTitleStyle}>
        {type?.length === 1 ? "Type" : "Types"}
      </Typography>
      <Card sx={cardStyle}>
        {type?.map((type) => (
          <Typography key={type}>{capitalizeFirstLetter(type)}</Typography>
        ))}
      </Card>
    </Card>
  );
}
