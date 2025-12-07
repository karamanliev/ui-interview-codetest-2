import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import { BrowserRouter } from "react-router";
import { client } from "@/apollo/client";
import { ThemeProvider } from "@mui/material/styles";
import { SpaceProvider } from "./context/SpaceContext.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { appTheme } from "@/theme/appTheme.ts";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <BrowserRouter>
          <SpaceProvider>
            <App />
          </SpaceProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
