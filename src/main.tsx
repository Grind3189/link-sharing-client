import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import LinkContextProvider from "./context/LinkContextProvider.tsx";
import WidthContextProvider from "./context/WidthContextProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <WidthContextProvider>
        <LinkContextProvider>
          <App />
        </LinkContextProvider>
      </WidthContextProvider>
    </Router>
  </React.StrictMode>,
);
