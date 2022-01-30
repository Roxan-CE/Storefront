import "./index.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import React, { useState, useEffect } from "react";
import Header from "./components/SmallerComponents/Header";
import Footer from "./components/SmallerComponents/Footer";
import { lightTheme, darkTheme } from "./components/SmallerComponents/Themes";
import { useDarkMode } from "./components/SmallerComponents/useDarkMode";
import { Outlet } from "react-router-dom";
import { CartProvider } from "react-use-cart";

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
  const [cart, setCart] = useState([]);

  //END CART LOGIC

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <CartProvider>
            <Header theme={themeMode} onClick={themeToggler} />
            <Outlet />
            <Footer />
          </CartProvider>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
