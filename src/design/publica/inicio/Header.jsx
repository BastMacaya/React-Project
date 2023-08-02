import React from "react";
import { Button, Typography, Stack, Container, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const LoginClick = () => {
    navigate("/login", { replace: true });
  };
  const NosotrosClick = () => {
    navigate("/Nosotros", { replace: true });
  };
  const EspecialistasClick = () => {
    navigate("/Especialistas", { replace: true });
  };
  const TarifasClick = () => {
    navigate("/Tarifas", { replace: true });
  };

  return (
    <Stack
      direction="row-reverse"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
      height="4rem"
      margin={1}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Button onClick={() => LoginClick()}>
        <Typography
          component={"span"}
          fontFamily={"Montserrat Ligth"}
          fontStyle={{
            color: "#000"
          }}
        >
          Ingresa
        </Typography>
      </Button>
      <Button onClick={() => NosotrosClick()}>
        <Typography
          component={"span"}
          variant="p"
          fontFamily={"Montserrat Ligth"}
          fontStyle={{ color: "#fff" }}
        >
          Nosotros
        </Typography>
      </Button>
      <Button onClick={() => TarifasClick()}>
        <Typography
          component={"span"}
          variant="p"
          fontFamily={"Montserrat Ligth"}
          fontStyle={{ color: "#fff" }}
        >
          Tarifas
        </Typography>
      </Button>
      <Button onClick={() => EspecialistasClick()}>
        <Typography
          component={"span"}
          variant="p"
          fontFamily={"Montserrat Ligth"}
          fontStyle={{ color: "#fff" }}
        >
          Especialistas
        </Typography>
      </Button>
    </Stack>
  );
};

export default Header;
