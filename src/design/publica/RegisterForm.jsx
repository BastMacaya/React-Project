import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import "../validaciones/validaciones"
import { validaTexto } from '../validaciones/validaciones';

const RegisterForm = ({setValue}) => {

    const registrarUsuario = async usuario => {
        await axios
          .post("http://localhost:3000/usuario", usuario)
          .then(response => {
            const { success } = response.data;
            console.log(success);
            if (!success) {
              console.log("no funciono manin");
            }
          })
          .catch(error => console.log(error));
      };
    
     //enviar formulario
  const handleRegister = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usuario = {
      nombre: data.get("firstName"),
      apellido: data.get("lastName"),
      email: data.get("email"),
      contrasenia: data.get("password")
    };
    registrarUsuario(usuario);
    setValue("0");
    console.log(value);
  };

    return (
        <>
           <Grid container justifyContent={"center"}>
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
                      inputProps={{ maxLength: 20,error:validaTexto() }}
                      
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
                <Button type="submit" fullWidth variant="contained">
                  Registrar
                </Button>
              </Box> 
        </>
    );
}

export default RegisterForm;
