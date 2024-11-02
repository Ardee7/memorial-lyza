import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { AppRoutes } from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createTheme, CssBaseline } from "@mui/material";

// Optional: Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#00796b", // Change to your preferred primary color
    },
    secondary: {
      main: "#ff5722", // Change to your preferred secondary color
    },
    background: {
      default: "#f5f5f5", // Custom background color
    },
  },
  typography: {
    fontFamily: "Lato, Arial, sans-serif",
    h1: { fontFamily: "Merriweather, serif" },
    h2: { fontFamily: "Merriweather, serif" },
    h3: { fontFamily: "Merriweather, serif" },
    h4: { fontFamily: "Merriweather, serif" },
    h5: { fontFamily: "Merriweather, serif" },
    h6: { fontFamily: "Merriweather, serif" },
    body2: {
      fontFamily: "Lato, sans-serif",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "#333333",
      letterSpacing: "0.5px",
      textAlign: "left",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <CssBaseline />
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
