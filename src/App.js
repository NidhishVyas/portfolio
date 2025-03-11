import { Suspense } from "react";
import GlobalStyles from "./GlobalStyles";
import { DarkTheme, LightTheme } from "./Theme";
import { ThemeProvider } from "styled-components";
import NavBar from "./Components/Common/NavBar";
import Footer from "./Components/Common/Footer";
import Home from "./Pages/Home";

function App() {
  // const [isDarkTheme, setDarkTheme] = useState(true);
  const GlobalTheme = true ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyles />
      <Suspense>
        <NavBar />
        <Home />
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
