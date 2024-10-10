import { createTheme } from "@mui/material";


export const theme = createTheme({
  palette: {
    cyan: {
      main: "#4dd0e1",
    },
    name: "cyan",
    light: {
      main: "#e0f7fa",
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
      main: `rgba(224, 247, 250, 0.7)`,
      primary: "#000000",
      secondary: "#A9A9A9",
      contrastText: "#fff"
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
