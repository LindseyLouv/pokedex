import { Card, Typography, Grid } from "@mui/material";
import { capitalizeFirstLetter } from "../../utils/functions";
import StatBar from "../StatBar/StatBar";

interface PokemonStatsCardProps {
  stats?: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
}

export default function PokemonStatsCard({ stats }: PokemonStatsCardProps) {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        padding: "2rem",
        margin: "2rem",
        marginTop: "0",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Typography
        component="h5"
        variant="h5"
        color={(theme) => theme.palette.primary.contrastText}
        marginBottom="1rem"
      >
        Stats
      </Typography>
      {stats?.map((stat) => (
        <Grid
          key={stat.stat.name}
          container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              align="left"
              marginLeft="1rem"
              sx={{ color: (theme) => theme.palette.primary.contrastText }}
            >{`${capitalizeFirstLetter(stat.stat.name)} :`}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <StatBar value={stat.base_stat}></StatBar>
          </Grid>
        </Grid>
      ))}
    </Card>
  );
}
