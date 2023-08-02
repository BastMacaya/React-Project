import React from "react";
import { Card, Typography, Box, Grid, TextField, Button } from "@mui/material";
import SelectForm from "./SelectForm";

const FormularioBodega = () => {
  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credenciales = {
      email: data.get("email"),
      contrasenia: data.get("password")
    };
    consultarLogin(credenciales);
  };

  return (
    <Card>
      <Grid container sx={12} justifyContent={"center"} height={40}>
        <Typography component="h3" variant="h5">
          Ingresa Producto
        </Typography>
      </Grid>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, height: 400 }}
      >
        <Grid container>
          <Grid item xs={6}>
            <SelectForm />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre de Producto"
              name="nombre"
              autoFocus
              inputProps={{ maxLength: 40 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="descripcion"
              label="Descripción"
              name="descripcion"
              autoFocus
              inputProps={{ maxLength: 40 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="marca"
              label="Marca"
              name="marca"
              autoFocus
              inputProps={{ maxLength: 40 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="fechaCaducidad"
              label="Fecha de Caducidad"
              name="fechaCaducidad"
              autoFocus
              inputProps={{ maxLength: 40 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Ingresar Producto
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default FormularioBodega;
