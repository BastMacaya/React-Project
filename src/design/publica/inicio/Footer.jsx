import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#17c7d2",
        width: "100%",
        height: "100%"
      }}
    >
      <Box xs={12}>
        <Typography fontFamily={"Montserrat Ligth"}>Copy</Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
