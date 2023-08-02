import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabPanel } from "@mui/lab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: { main: "#17c7d2" },
    secondary: { main: "#ade9e9" }
  }
});

const Login = () => {
  const consultarLogin = async credenciales => {
    await axios
      .post("http://localhost:3000/login", credenciales)
      .then(response => {
        const { success } = response.data;
        console.log(success);
        if (success) {
          navigate("/Dashboard", { replace: true });
        } else {
          console.log("no funciono manin");
        }
      })
      .catch(error => console.log(error));
  };

  const registrarUsuario = async usuario => {
    await axios
      .post("http://localhost:3000/usuario", usuario)
      .then(response => {
        const { success } = response.data;
        console.log(success);
        if (success) {
          navigate("/Login", { replace: true });
        } else {
          console.log("no funciono manin");
        }
      })
      .catch(error => console.log(error));
  };

  //enviar formulario
  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credenciales = {
      email: data.get("email"),
      contrasenia: data.get("password")
    };
    consultarLogin(credenciales);
  };

  //enviar formulario
  const handleRegister = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usuario = {
      nombre: data.get("firstName"),
      apellido: data.get("lastName"),
      email: data.get("email"),
      contrasenia: data.get("password")
    };
    registrarUsuario(usuario);
    handleChange(0);
  };

  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);

  //variable de estado
  const handleChange = newValue => {
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
              <Tabs value={value} onChange={handleChange} fullWidth>
                <Tab label="Ingresa" value={0} />
                <Tab label="Registrate" value={1} />
              </Tabs>
            </Box>
            <TabPanel value={0}>
              <Grid container sx={12} justifyContent={"center"}>
                <Typography component="h1" variant="h5">
                  Ingresa
                </Typography>
              </Grid>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Nombre de Usuario"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  inputProps={{ maxLength: 40 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={{ maxLength: 20 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 1 }}
                >
                  Ingresar
                </Button>
              </Box>
            </TabPanel>
            <TabPanel value={1}>
              <Grid container sx={12} justifyContent={"center"}>
                <Typography component="h1" variant="h5">
                  Registrate
                </Typography>
              </Grid>
              <Box
                component="form"
                noValidate
                onSubmit={handleRegister}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Nombre"
                      autoFocus
                      inputProps={{ maxLength: 20 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Apellido"
                      name="lastName"
                      autoComplete="family-name"
                      inputProps={{ maxLength: 20 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      inputProps={{ maxLength: 60 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      inputProps={{ maxLength: 20 }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrar
                </Button>
              </Box>
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
