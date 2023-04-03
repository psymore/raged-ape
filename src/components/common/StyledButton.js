import { grey, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";

export default function StyledButton({ children }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    width: "10rem",
    fontWeight: "inherit",
    // backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: grey[50],
      color: theme.palette.primary.main,
      fontWeight: "bolder",
    },
    fontSize: "1rem",
  }));
  return (
    <Grid>
      <ColorButton>{children}</ColorButton>
    </Grid>
  );
}
