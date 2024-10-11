import { createTheme } from "@mui/material";
import { alpha } from "@mui/material";

export const theme = createTheme({
  palette: {
    cyan: {
      main: "#4dd0e1",
    },
    name: "cyan",
    light: {
      main: alpha('#E0F7FA', 0.7),
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    cyan: {
      main: "#4dd0e1",
    },
    name: "cyan",
    light: {
      main: alpha('#A9A9A9', 0.7),
      primary: "#000000",
      secondary: "#A9A9A9",
      contrastText: "#fff",
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000000",
    },
  },
});



export default darkTheme;
