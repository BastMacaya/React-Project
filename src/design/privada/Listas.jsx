import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const MenuLateral = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const permisos = user.user.permisos || [];

  //Modulos

  const Agenda = () => {
    return (
      <ListItemButton
        key={1}
        onClick={() => {
          navigate("/Dashboard/Agenda", { replace: true });
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Agenda' />
      </ListItemButton>
    );
  };

  const Inventario = () => {
    return (
      <ListItemButton
        key={2}
        onClick={() => {
          navigate("/Dashboard/Inventario", { replace: true });
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary='Inventario' />
      </ListItemButton>
    );
  };

  const Producto = () => {
    return (
      <ListItemButton
        key={3}
        onClick={() => {
          navigate("/Dashboard/Productos", { replace: true });
        }}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary='Productos' />
      </ListItemButton>
    );
  };

  const mainListItems = (
    <>
      {permisos.sort().map((permiso) => {
        switch (permiso.modulo) {
          case "Agenda":
            return Agenda();
            break;
          case "Inventario":
            return Inventario();
            break;
          case "Producto":
            return Producto();
            break;
          default:
            return "no hay permisos";
            break;
        }
      })}
    </>
  );

  //Botones de Acceso a Descargas

  //Insertar los botones Mencionados XD

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={() => props.toggleDrawer()}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component='nav'>
        {user !== {} ? mainListItems : "no hay permisos"}
        <Divider sx={{ my: 1 }} />
      </List>
    </React.Fragment>
  );
};

export default MenuLateral;
