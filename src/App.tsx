import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { orange, red, yellow } from "@mui/material/colors";
import { useState } from "react";
import Home from "./pages/home";
import Navigation from "./components/Navigation";

const App = () => {
  const [toggleDark, setToggleDark] = useState<boolean>(true);
  const theme = createTheme({
    palette: {
      primary: {
        main: yellow.A400,
      },
      secondary: {
        main: yellow.A700,
      },
      warning: {
        main: orange[500],
      },
      error: {
        main: red.A400,
      },
      mode: toggleDark ? "dark" : "light",
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation setToggleDark={setToggleDark} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
