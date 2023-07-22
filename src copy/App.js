import React, { createContext, useState } from "react";
import PageContainer from "./components/PageContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <div id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <PageContainer />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
