import { Grid, Typography } from "@mui/material";
import RouteLayout from "../Common/RouteLayout";
export default function RightBody() {
  return (
    <RouteLayout header={"Raged"}>
      <Grid container>
        <Grid item xs={6}>
          <Grid sx={{ border: "1px solid #ff1744" }}>
            <Typography>ASDHLASDLHLK</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid sx={{ border: "1px solid #ff1744" }}>
            <Typography>asdjasldasdasdhaslkjh</Typography>
          </Grid>
        </Grid>
      </Grid>
    </RouteLayout>
  );
}
