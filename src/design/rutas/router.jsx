import { createBrowserRouter } from "react-router-dom";
import Inicio from "../publica/inicio/Inicio";
import Login from "../publica/Login";
import Dashboard from "../privada/Dashboard";
import Principal from "../publica/inicio/Principal";
import Nosotros from "../publica/inicio/Nosotros";
import Inventario from "../privada/inventario/Inventario";
import Agenda from "../privada/agenda/Agenda";
import Usuario from "../privada/usuario/Usuario";

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
        element: <Principal />
      },
      {
        path: "/Especialistas",
        element: <Principal />
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
        element: <Inventario />
      },
      {
        path: "/Usuario",
        element: <Usuario />
      },
      {
        path: "/Agenda",
        element: <Agenda />
      }
    ]
  },
  {
    path: "*",
    element: <h1>Te equivocaste Wey</h1>
  }
]);
