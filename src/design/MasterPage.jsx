import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./rutas/router";
import UserProvider from "./context/UserContext";


const MasterPage = () => {
  return (
    <>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    </>

  );
};

export default MasterPage;
