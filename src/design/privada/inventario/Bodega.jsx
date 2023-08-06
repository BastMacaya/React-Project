import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Typography,
  Box,
  Stack,
  Button,
  Grid,
  Card,
  CardContent,
  Modal,
} from "@mui/material";
import Formulario from "./FormularioBodega";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";

const colums = [
  { field: "nombre", headerName: "Nombre", width: 200 },
  { field: "descripcion", headerName: "Descripcion", width: 200 },
  { field: "marca", headerName: "Marca", width: 200 },
  { field: "cantidad", headerName: "Cantidad", width: 140 },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Bodega = () => {
  const { bodega } = useUserContext();
  const [open, setOpen] = useState(false);
  const [inventario, setInventario] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (bodega != "") {
      mostrar();
    }
  }, [bodega]);

  const mostrar = async () => {
    const id = { _id: bodega };
    await axios
      .post("http://localhost:3000/consultarBodega", id)
      .then((response) => {
        setInventario(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container spacing={2}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} height={500}>
          <Formulario />
        </Box>
      </Modal>
      <Grid item xs={12}>
        <Card>
          <CardContent sx={{ marginTop: 3 }}>
            <Typography variant='h4' color='initial'>
              {inventario ? inventario.nombre : "Seleccione una bodedga"}
            </Typography>
            <Stack spacing={2} direction='row-reverse'>
              <Button variant='contained' onClick={handleOpen}>
                Agregar
              </Button>
              <Button variant='contained'>Exportar</Button>
              <Button variant='contained'>Outlined</Button>
            </Stack>
            <Grid container spacing={3} marginTop={2}>
              <Grid item xs={12}>
                {inventario ? (
                  <DataGrid
                    rows={inventario.productos}
                    columns={colums}
                    pageSize={5}
                  />
                ) : (
                  "sin informacion"
                )}
              </Grid>
              <Grid item sm={4} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Bodega;
