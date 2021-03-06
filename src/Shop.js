import "./index.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import { Outlet } from "react-router-dom";

function Shop() {
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

export default Shop;
