import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  Container
} from "@mui/material";

const articulos = [
  { id: 1, Titulo: "este es el primer titulo" },
  { id: 2, Titulo: "este es el segundo titulo" },
  { id: 3, Titulo: "este es el tercero titulo" },
  { id: 4, Titulo: "este es el cuarto titulo" }
];

const Nosotros = () => {
  return (
    <Container container xs={12}>
      <Grid container spacing={1} xs={12}>
        {articulos.map(articulo => {
          return (
            <Grid item xs={12} sx={{ margin: 2 }}>
              <Card>
                <CardHeader
                  avatar={<Avatar aria-label="" />}
                  action={<IconButton aria-label="" />}
                  title={articulo.Titulo}
                  subheader=""
                />
                <CardContent>
                  <p>
                    {articulo.id}
                  </p>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={1} xs={12} sx={{ padding: 2, height: "450px" }}>
        <Grid item xs={12}>
          <Card>
            <ul>
              <li>
                <a>Especialidades</a>
              </li>
              <li>
                <a>Especialidades</a>
              </li>
              <li>
                <a>Especialidades</a>
              </li>
              <li>
                <a>Especialidades</a>
              </li>
              <li>
                <a>Especialidades</a>
              </li>
              <li>
                <a>Especialidades</a>
              </li>
              <li>
                <a>Especialidades</a>
              </li>
            </ul>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Nosotros;
