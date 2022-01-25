import "./index.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import { Outlet } from "react-router-dom";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      themeToggler(savedTheme);
    } else if (prefersDark) {
      themeToggler("dark");
    }
  }, []);

  //CART LOGIC
  const [cart, setCart] = useState();

  useEffect(() => {
    commerce.cart.retrieve().then((res) => {
      setCart(res);
    });
  }, []);

  const addToCart = () => {
    setCart();
  };

  //END CART LOGIC

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header theme={themeMode} onClick={themeToggler} />
          <Outlet />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
