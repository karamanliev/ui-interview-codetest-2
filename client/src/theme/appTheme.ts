import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    success: {
      main: "#2FC089",
    },
    error: {
      main: "#DF074F",
    },
    text: {
      primary: "#FFF",
      secondary: "#F8F5DE",
    },
    background: {
      default: "#1C1833",
      paper: "rgba(0, 0, 0, 0.5)",
    },
    action: {
      active: "#F8F5DE",
    },
  },
  spacing: 4,
});

export const appTheme = createTheme(theme, {
  typography: {
    fontFamily:
      '"Mona Sans", "Instrument Sans", "Helvetica", "Arial", sans-serif',
    body1: {
      fontFamily: "Instrument Sans",
      fontSize: "12px",
      color: theme.palette.text.secondary,
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Mona Sans",
      fontWeight: 600,
      fontSize: "15px",
      letterSpacing: "0.06em",
      color: theme.palette.text.primary,
      textTransform: "uppercase",
    },
  },
});
