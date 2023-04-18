import { Box, Grid, Icon, IconButton, Typography } from "@mui/material";
import RouteLayout from "../Common/RouteLayout";
import { egeSoundcloud } from "../../images";
import { GitIcon, LinkedInIcon, TwitterIcon } from "../../images";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export default function Body() {
  return (
    <RouteLayout>
      <Grid container sx={{ marginTop: "2rem" }}>
        <Grid
          item
          xs={6}
          width={"40vw"}
          sx={{
            ml: {
              xs: "3rem",
              sm: "5rem",
              md: "5rem",
              lg: "10rem",
              xl: "15rem",
            },
          }}
        >
          <Typography
            textAlign={"justify"}
            sx={{
              color: "whitesmoke",
              marginTop: "4rem",
            }}
          >
            I am Ege. Self-taught music producer with electronic touch.
            <Typography sx={{ marginTop: "2rem" }}>
              I like psytrance, psydub, chillgressive, dub, ambient, drum & bass
              styles mainly but like to listen many other electronic music based
              genres. Additionally jazz, funk, orchestral music and unnamed
              progressive stuff coming out are on my radar.
            </Typography>
            <Typography sx={{ marginTop: "2rem" }}>MUSIC MACHINE</Typography>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            component="img"
            src={egeSoundcloud}
            sx={{
              height: {
                xs: "20%",
                sm: "40%",
                md: "60%",
                lg: "80%",
                xl: "100%",
              },
              ml: {
                xs: 0,
                sm: 0,
                md: "1rem",
                lg: "1rem",
                xl: 0,
              },
              width: "auto",
              opacity: "0.8",
              borderRadius: "40rem",
              boxShadow: " 3px 3px 25px 15px #888888",
            }}
            alt="Profile Image"
          ></Box>
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
          <IconButton sx={{ gap: "4rem" }}>
            <GitIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
    </RouteLayout>
  );
}
