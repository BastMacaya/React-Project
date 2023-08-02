import { createBrowserRouter } from "react-router-dom";
import Inicio from "../publica/inicio/Inicio";
import Login from "../publica/Login";
import Dashboard from "../privada/Dashboard";
import Principal from "../publica/inicio/Principal";
import Nosotros from "../publica/inicio/Nosotros";
import Inventario from "../privada/inventario/Inventario";
import Agenda from "../privada/agenda/Agenda";
import Usuario from "../privada/usuario/Usuario";
import Producto from "../privada/producto/Producto";
import Especialistas from "../publica/inicio/Especialistas";
import Tarifas from "../publica/inicio/Tarifas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    children: [
      {
        path: "/",
        element: <Principal />
      },
      {
        path: "/Nosotros",
        element: <Nosotros />
      },
      {
        path: "/Tarifas",
        element: <Tarifas />
      },
      {
        path: "/Especialistas",
        element: <Especialistas />
      }
    ]
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/Dashboard",
        element: <Agenda />
      },
      {
        path: "/Dashboard/Agenda",
        element: <Agenda />
      },
      {
        path: "/Dashboard/Inventario",
        element: <Inventario />
      },
      {
        path: "/Dashboard/Productos",
        element: <Producto />
      }
    ]
  },
  {
    path: "*",
    element: <h1>Te equivocaste Wey</h1>
  }
]);
