import React from "react";
import {
  Grid,
  Button,
  Typography,
  Card,
  TextField,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  InputAdornment,
  Avatar,
  Container,
  CardMedia,
  IconButton
} from "@mui/material";

const articulos = [
  {
    id: 1,
    Titulo: "este es el primer titulo",
    Cuerpo: "11111111111111111111111111",
    img:
      "https://directoriodentalchile.cl/wp-content/uploads/2022/03/shutterstock_1268730097-scaled.jpg"
  },
  {
    id: 2,
    Titulo: "este es el segundo titulo",
    Cuerpo: "jkasdjkajksdjkasdjkjkasdasdasdad",
    img:
      "https://directoriodentalchile.cl/wp-content/uploads/2022/03/shutterstock_1268730097-scaled.jpg"
  },
  {
    id: 3,
    Titulo: "este es el tercero titulo",
    Cuerpo: "jkasdjkajksdjkasdjkjkasdjkjkasdjasd",
    img:
      "https://directoriodentalchile.cl/wp-content/uploads/2022/03/shutterstock_1268730097-scaled.jpg"
  }
];

const Contenido = () => {
  return (
    <Container xs={12}>
      <Grid container>
        <Grid item spacing={1} xs={12} md={8}>
          {articulos.map(articulo => {
            return (
              <Grid margin={2}>
                <Card>
                  <CardActionArea>
                    <CardHeader
                      avatar={<Avatar aria-label="" />}
                      action={<IconButton aria-label="" />}
                      title={articulo.Titulo}
                      subheader={articulo.Cuerpo}
                    />
                    <CardMedia
                      component="img"
                      height="150"
                      title=""
                      image={articulo.img}
                    />
                  </CardActionArea>
                  <CardActions>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        location.href = "https://goo.gl/maps/AXpCdvZ2nm4dQHCS9";
                      }}
                    >
                      <Typography variant="body1" color="primary">
                        asdasd
                      </Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          xs={12}
          md={4}
          lg={4}
          sx={{ height: "450px", padding: 2 }}
        >
          <Grid item xs={12} md={12} alignItems={"center"}>
            <Card xs={12} sx={{ padding: 1, height: "8'vh", width: "100%" }}>
              <CardHeader title="Formulario de Contacto" />
              <CardContent>
                <Grid sx={{ margin: 1, width: "100%" }}>
                  <TextField
                    id="outlined-basic"
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid sx={{ margin: 1, width: "100%" }}>
                  <TextField
                    id="outlined-basic"
                    label="Telefono"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+56</InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid sx={{ margin: 1, width: "100%" }}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid sx={{ margin: 1, width: "100%" }}>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid
                  sx={{ margin: 1, backgroundColor: "grey", width: "100%" }}
                >
                  <Button sx={{ width: "100%" }}>
                    <Typography
                      variant="h6"
                      fontFamily={"Montserrat Ligth"}
                      fontStyle={{ color: "#fff" }}
                    >
                      Contactar
                    </Typography>
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contenido;
