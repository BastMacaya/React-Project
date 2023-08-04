import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Current month' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItemButton>
  </React.Fragment>
);

const MenuLateral = (props) => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const permisos = [];

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
      {permisos.map((permiso) => {
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
        }
      })}
    </>
  );

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
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </React.Fragment>
  );
};

export default MenuLateral;
