import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Header from "./UIMainComponent/Header.jsx";
import { HashRouter } from "react-router";



createRoot(document.getElementById("root")).render(
  <HashRouter>
    <StrictMode>
      <Header />
      <App />
    </StrictMode>
    </HashRouter>
  
);
