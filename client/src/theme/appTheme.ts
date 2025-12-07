import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
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
  typography: {
    fontFamily:
      '"Mona Sans", "Instrument Sans", "Helvetica", "Arial", sans-serif',
  },
  spacing: 4,
});
