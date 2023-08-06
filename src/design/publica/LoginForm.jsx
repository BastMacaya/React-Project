import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.estado) {
      navigate("/Dashboard");
    }
  }, [user]);

  const consultarLogin = async (credenciales) => {
    try {
      await axios
        .post("http://localhost:3000/login", credenciales)
        .then((response) => {
          const { success, user } = response.data;
          if (success) {
            setUser({ user, estado: true });
          } else {
            console.log("no funciono manin");
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  //enviar formulario
  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const credenciales = {
        email: data.get("emailLogin"),
        contrasenia: data.get("passwordLogin"),
      };
      consultarLogin(credenciales);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Typography component='h1' variant='h5'>
          Ingresa
        </Typography>
      </Grid>
      <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Nombre de Usuario'
          name='emailLogin'
          autoComplete='email'
          autoFocus
          inputProps={{ maxLength: 40 }}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='passwordLogin'
          label='Contraseña'
          type='password'
          id='password'
          autoComplete='current-password'
          inputProps={{ maxLength: 20 }}
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 1 }}
        >
          Ingresar
        </Button>
      </Box>
    </>
  );
};
export default LoginForm;
