import "@fontsource-variable/josefin-sans";
import "@fontsource-variable/manrope";
import { StyledEngineProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ThemeLayout from "./layout/ThemeLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeLayout>
          <App />
        </ThemeLayout>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
