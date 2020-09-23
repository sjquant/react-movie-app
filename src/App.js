import React from "react";
import { HashRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <div className="app"></div>
    </HashRouter>
  );
}

export default App;
