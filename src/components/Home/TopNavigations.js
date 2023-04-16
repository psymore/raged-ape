import * as React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import StyledButton from "../Common/StyledButton";
import { Typography } from "@mui/material";
export default function TopNavigation() {
  const handleSignUpClick = () => {
    // handle sign up button click here
    console.log("Sign up button clicked");
  };

  const handleDeleteAccountClick = () => {
    // handle delete account button click here
    console.log("Delete account button clicked");
  };

  return (
    <Grid2
      container
      spacing={{ xs: 0, sm: 0.1, md: 1, lg: 5, xl: 10 }}
      sx={{
        mr: { xs: 0, sm: 0.1, md: 1, lg: 5, xl: 0 },
      }}
    >
      <Grid2 variant="contained" xs={3}>
        <StyledButton>Home</StyledButton>
      </Grid2>
      <Grid2 variant="contained" xs={3}>
        <StyledButton> Music</StyledButton>
      </Grid2>
      <Grid2 variant="contained" xs={3}>
        <StyledButton> Project Files</StyledButton>
      </Grid2>
      <Grid2 variant="contained" xs={3}>
        <StyledButton> Contact</StyledButton>
      </Grid2>
    </Grid2>
  );
}
