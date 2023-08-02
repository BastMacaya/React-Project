import React from "react";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";
import Header from "./Header";

import Footer from "./Footer";

const theme = createTheme({
  palette: {
    primary: { main: "#17c7d2" },
    secondary: { main: "#ade9e9" }
  }
});

const Inicio = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={6} sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#17c7d2"
          }}
        >
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
        <Grid item sx={{ width: "100%", height: "20vh" }}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Inicio;
