import * as React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
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
          backgroundColor="primary"
          sx={{
            height: "7rem",
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginInline: "6rem" }}
          >
            <Grid item sx={{ cursor: "pointer" }}>
              <Typography
                sx={{
                  // textShadow: "1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue",
                  textShadow: "rgb(158, 124, 186) 1px 1px 10px",
                }}
              >
                RAGED APE
              </Typography>
            </Grid>
            <Grid item>
              <TopNavigation />
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                variant="outlined"
                onClick={handleMenuOpen}
              >
                <Person4Icon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 5px rgb(158, 124, 186))",
                    bgcolor: "black",
                    mt: 1.5,

                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "& .MuiMenuItem-root:hover": {
                      bgcolor: "grey",
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "black",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleSignUpClick}>
                  <Typography fontSize={"1rem"}>Sign up</Typography>
                </MenuItem>
                <MenuItem onClick={handleDeleteAccountClick}>
                  <Typography fontSize={"1rem"}>Delete account</Typography>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
