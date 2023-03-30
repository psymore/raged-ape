import * as React from "react";
import { AppBar, Grid, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import Person4Icon from "@mui/icons-material/Person4";
import TopNavigation from "./TopNavigations";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("Menu opened");
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    console.log("Menu closed");
  };

  const handleSignUpClick = () => {
    // handle sign up button click here
    console.log("Sign up button clicked");
  };

  const handleDeleteAccountClick = () => {
    // handle delete account button click here
    console.log("Delete account button clicked");
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar
          sx={{
            height: "7rem",
            backgroundColor: "#333333",
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sx={{ cursor: "pointer" }}>
              Raged Ape
            </Grid>
            <Grid item>
              <TopNavigation />
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="outlined"
                onClick={handleMenuOpen}
              >
                <Person4Icon />
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                <MenuItem onClick={handleSignUpClick}>Sign up</MenuItem>
                <MenuItem onClick={handleDeleteAccountClick}>
                  Delete account
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
