import React from "react";
import {RouterProvider} from 'react-router-dom'
import {router} from "./rutas/router";

const MasterPage = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default MasterPage;
