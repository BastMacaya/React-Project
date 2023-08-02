import React, { useState, useEffect } from "react";
import axios from "axios";
import Bodega from "./Bodega";
import {
  Container,
  CardHeader,
  Card,
  CardContent,
  Stack,
  Button
} from "@mui/material";
import { useUserContext } from "../../context/UserContext";

const Inventario = () => {
  const { bodega, setBodega } = useUserContext();
  const [inventarios, setInventarios] = useState([]);

  useEffect(() => {
    desplegarInventarios();
  }, []);

  const desplegarInventarios = async () => {
    try {
      await axios
        .get("http://localhost:3000/bodegas")
        .then(response => {
          setInventarios(response.data);
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader title="Inventarios" subheader="" />
        <CardContent>
          <Stack spacing={2} direction="row" marginBottom={2}>
            {inventarios.map(inventario => {
              return (
                <Button
                  key={inventario._id}
                  variant="contained"
                  onClick={() => {
                    setBodega(inventario._id);
                  }}
                >
                  {inventario.nombre}
                </Button>
              );
            })}
          </Stack>
          {bodega ? <Bodega /> : "no hay bodega"}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Inventario;
