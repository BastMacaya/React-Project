import React, { useState, useEffect } from "react";
import { Container, Card, CardHeader, CardContent } from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const colums = [
  { field: "nombre", headerName: "Nombre", width: 200 },
  { field: "descripcion", headerName: "Descripcion", width: 200 },
  { field: "cantidad", headerName: "Cantidad", width: 140 },
  { field: "precio_compra", headerName: "Precio Compra", width: 125 },
  { field: "precio_venta", headerName: "Precio Venta", width: 125 },
  { field: "marca", headerName: "Marca", width: 150 },
  { field: "proveedor", headerName: "Proveedor", width: 200 },
  { field: "fecha_vencimiento", headerName: "Fecha Vencimiento", width: 200 },
  { field: "tipo", headerName: "Tipo", width: 200 }
];

const Producto = () => {
  const [productos, setProductos] = useState([]);

  const MostrarProductos = async () => {
    try {
      await axios
        .get("http://localhost:3000/Productos")
        .then(response => {
          setProductos(response.data);
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    MostrarProductos();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Card>
          <CardHeader title="Productos" subheader="" />
          <CardContent sx={{ height: 430, width: "100%" }}>
            {productos
              ? <DataGrid
                  rows={productos}
                  columns={colums}
                  autoPageSize
                  getRowId={row => row._id}
                />
              : "sin informacion"}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Producto;
