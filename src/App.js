import "./App.css";
import Body from "./components/home/Body";
import TopBar from "./components/home/TopBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "cursive", // set your desired font family
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
