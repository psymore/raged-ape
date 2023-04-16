import "./App.css";
import Body from "./components/Home/Body";
import TopBar from "./components/Home/TopBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const COLOR_PRIMARY = "#333333";
const COLOR_WHITE = "#ffffff";
const COLOR_SECONDARY = "rgb(158, 124, 186)";
const COLOR_DARK = "#3A3A3A";

const theme = createTheme({
  typography: {
    fontFamily: "Segoe UI Emoji",
    fontSize: 20,
    allVariants: {
      color: COLOR_WHITE,
    },
  },

  palette: {
    primary: {
      main: COLOR_PRIMARY,
    },
    secondary: {
      main: COLOR_SECONDARY,
    },
    text: {
      primary: COLOR_WHITE,
      dark: COLOR_DARK,
    },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "white",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBar />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
