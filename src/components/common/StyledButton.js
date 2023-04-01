import { grey, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";

export default function StyledButton({ children }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[200]),
    width: "10rem",
    backgroundColor: grey[50],
    "&:hover": {
      backgroundColor: grey[400],
    },
    fontWeight: "bold",
  }));
  return (
    <Grid sx={{ border: "1px solid red" }}>
      <ColorButton>{children}</ColorButton>
    </Grid>
  );
}
