import React from "react";

import { Grid, Typography } from "@mui/material";

export default function RouteLayout({ header, children, headerComp }) {
  return (
    <Grid container sx={{ mt: 10, ml: 2 }}>
      <Grid item xs={12}>
        {header && (
          <Typography
            sx={{
              fontSize: "24px",
              mt: 2,
              mb: 2,
              mr: "4vw",
              fontWeight: 700,
              color: "azure",
            }}
          >
            {header}
          </Typography>
        )}

        <Grid
          sx={{
            mr: { xs: "0.5vw", sm: "1vw", md: "2vw", lg: "3vw", xl: "4vw" },
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
