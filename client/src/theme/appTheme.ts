import { createTheme } from "@mui/material/styles";

const bodyFont = "Instrument Sans";
const headingFont = "Mona Sans";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5629C6",
      light: "#7A59A2",
      dark: "#0A0A22",
    },
    secondary: {
      main: "#E21BE0",
    },
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
    fontFamily: `${headingFont}, ${bodyFont}, "Helvetica", "Arial", sans-serif`,
    body1: {
      fontFamily: bodyFont,
      fontSize: "12px",
      color: theme.palette.text.secondary,
      fontWeight: 400,
    },
    body2: {
      fontFamily: headingFont,
      fontWeight: 600,
      fontSize: "15px",
      letterSpacing: "0.06em",
      color: theme.palette.text.primary,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        TouchRippleProps: {
          style: {
            color: theme.palette.primary.main,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          fontFamily: bodyFont,
          fontWeight: 400,
          textTransform: "none",
          color: theme.palette.text.primary,
        },
      },
    },
  },
});
