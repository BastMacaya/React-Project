import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  CardHeader,
  Card,
  CardContent,
  Stack,
  Button,
  Grid,
  TextField
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ExpandMore } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

const colums = [
  { field: "nombre", headerName: "Nombre", width: 150 },
  { field: "descripcion", headerName: "Descripcion", width: 150 },
  { field: "marca", headerName: "Marca", width: 100 },
  { field: "cantidad", headerName: "Cantidad", width: 90 }
];

const Inventario = () => {
  const [inventarios, setInventarios] = useState([]);

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credenciales = {
      email: data.get("email"),
      contrasenia: data.get("password")
    };
    consultarLogin(credenciales);
  };

  const desplegarInventarios = async () => {
    await axios
      .get("http://localhost:3000/bodegas")
      .then(response => setInventarios(response.data))
      .catch(err => console.log(err));
    console.log(inventarios);
  };

  useEffect(() => {
    desplegarInventarios();
  }, []);

  return (
    <Container>
      <Card>
        <CardHeader title="Inventarios" subheader="" />
        <CardContent>
          {inventarios.map(inventario => {
            return (
              <Box key={inventario._id}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-label="Expand"
                    aria-controls="-content"
                    id="-header"
                  >
                    <Typography>
                      {inventario.nombre}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Card>
                      <Stack spacing={2} direction="row-reverse">
                        <Button variant="contained">Agregar</Button>
                        <Button variant="contained">Exportar</Button>
                        <Button variant="contained">Outlined</Button>
                      </Stack>
                      <CardContent>
                        <Grid container spacing={3}>
                          <Grid item sm={8}>
                            <DataGrid
                              rows={inventario.productos}
                              columns={colums}
                              pageSize={5}
                            />
                          </Grid>
                          <Grid item sm={4}>
                            <Card>
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
                                <Grid
                                  container
                                  direction="column"
                                  justifyContent="center"
                                  alignItems="center"
                                >
                                  <Grid item>
                                    <TextField
                                      margin="normal"
                                      required
                                      fullWidth
                                      id="email"
                                      label="Nombre de Usuario"
                                      name="email"
                                      autoFocus
                                      inputProps={{ maxLength: 40 }}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <TextField
                                      margin="normal"
                                      required
                                      fullWidth
                                      id="email"
                                      label="Nombre de Usuario"
                                      name="email"
                                      autoFocus
                                      inputProps={{ maxLength: 40 }}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <TextField
                                      margin="normal"
                                      required
                                      fullWidth
                                      id="email"
                                      label="Nombre de Usuario"
                                      name="email"
                                      autoFocus
                                      inputProps={{ maxLength: 40 }}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <TextField
                                      margin="normal"
                                      required
                                      fullWidth
                                      id="email"
                                      label="Nombre de Usuario"
                                      name="email"
                                      autoFocus
                                      inputProps={{ maxLength: 40 }}
                                    />
                                  </Grid>
                                </Grid>
                              </Box>
                            </Card>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </AccordionDetails>
                </Accordion>
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Inventario;
