import { Grid, Typography } from "@mui/material";
export default function RightBody() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Grid sx={{ border: "1px solid #ff1744" }}>
          <Typography>asdjasldasdasdhaslkjh</Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid sx={{ border: "1px solid #ff1744" }}>
          <Typography>asdjasldasdasdhaslkjh</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
