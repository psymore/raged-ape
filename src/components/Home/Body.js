import { Grid, Typography } from "@mui/material";
import RouteLayout from "../Common/RouteLayout";
import { egeSoundcloud } from "../../images";
import { GitIcon, LinkedInIcon, TwitterIcon } from "../../images";

export default function Body() {
  return (
    <RouteLayout>
      <Grid container sx={{ marginTop: "2rem" }}>
        <Grid item xl={6} md={5} lg={4} xs={3}>
          <Grid width={"40vw"} sx={{ marginLeft: "15rem" }}>
            <Typography
              textAlign={"justify"}
              sx={{
                color: "whitesmoke",
                marginTop: "4rem",
              }}
            >
              I am Ege. Self-taught music producer with electronic touch.
              <Typography sx={{ marginTop: "2rem" }}>
                I like psytrance, psydub, chillgressive, dub, ambient, drum &
                bass styles mainly but like to listen many other electronic
                music based genres. Additionally jazz, funk, orchestral music
                and unnamed progressive stuff coming out are on my radar.
              </Typography>
              <Typography sx={{ marginTop: "2rem" }}>MUSIC MACHINE</Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img
            src={egeSoundcloud}
            style={{
              opacity: "0.8",
              borderRadius: "40rem",
              boxShadow: " 3px 3px 25px 15px #888888",
            }}
            alt="Profile Image"
          ></img>
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            height: "5vh",
            justifyContent: "center",
            gap: 20,
            position: "fixed",
            bottom: 0,
          }}
        >
          <GitIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Grid>
      </Grid>
    </RouteLayout>
  );
}
