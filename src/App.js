import React from "react";
import "./App.css";
import Router from "./routes";
import { ThemeProvider } from "styled-components";
import Theme from "./utils/theme";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme.Light}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
