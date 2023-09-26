import { Theme } from "@mui/material/styles";

// Define style for card
export const cardStyle = {
  margin: "0.5rem",
  padding: "0.5rem",
  color: (theme: Theme) => theme.palette.primary.main,
};

// Define title style for card
export const cardTitleStyle = {
  color: (theme: Theme) => theme.palette.primary.contrastText,
  display: "flex",
  paddingLeft: "0.5rem",
};
