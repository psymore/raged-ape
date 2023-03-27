import * as React from "react";
import { AppBar, Grid, Toolbar, Button, Menu, MenuItem } from "@mui/material";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
              <Button
                color="inherit"
                variant="outlined"
                onMouseOver={handleMenuOpen}
                // onMouseLeave={handleMenuClose}
              >
                Login
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
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
