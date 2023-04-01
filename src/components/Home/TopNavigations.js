import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import { deepPurple, green, purple, red } from "@mui/material/colors";
export default function TopNavigation() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[200]),
    backgroundColor: green[50],
    "&:hover": {
      backgroundColor: red[200],
    },
  }));

  const handleSignUpClick = () => {
    // handle sign up button click here
    console.log("Sign up button clicked");
  };

  const handleDeleteAccountClick = () => {
    // handle delete account button click here
    console.log("Delete account button clicked");
  };

  return (
    <Grid2 container spacing={10} sx={{ border: "1px solid red" }}>
      <Grid2 variant="contained" sx={{ border: "1px solid red" }} xs={3}>
        <ColorButton sx={{ width: "10rem" }}> Home</ColorButton>
      </Grid2>
      <Grid2 variant="contained" xs={3}>
        <ColorButton sx={{ width: "10rem" }}> Music</ColorButton>
      </Grid2>
      <Grid2 variant="contained" xs={3}>
        <ColorButton sx={{ width: "10rem" }}> Project Files</ColorButton>
      </Grid2>
      <Grid2 variant="contained" xs={3}>
        <ColorButton sx={{ width: "10rem" }}> Contact</ColorButton>
      </Grid2>
    </Grid2>
  );
}
