import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabPanel } from "@mui/lab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginForm from "../publica/LoginForm";
import RegisterForm from "../publica/RegisterForm";

const theme = createTheme({
  palette: {
    primary: { main: "#17c7d2" },
    secondary: { main: "#ade9e9" }
  }
});

const Login = () => {
  const [value, setValue] = useState("0");

  //variable de estado
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: t =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <TabContext value={value}>
            <Box
              sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Ingresa" value={"0"} />
                <Tab label="Registrate" value={"1"} />
              </Tabs>
            </Box>
            <TabPanel value={"0"}>
              <LoginForm />
            </TabPanel>
            <TabPanel value={"1"}>
              <RegisterForm setValue={setValue} />
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
