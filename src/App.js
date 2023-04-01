import "./App.css";
import Body from "./components/Home/Body";
import TopBar from "./components/Home/TopBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Segoe UI Emoji", // set your desired font family
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" overflow-x="hidden">
        <TopBar />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
