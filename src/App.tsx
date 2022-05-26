import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navigation from "./components/Navigation";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ff951c",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
