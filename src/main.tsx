import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import LinkContextProvider from "./context/LinkContextProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <LinkContextProvider>
        <App />
      </LinkContextProvider>
    </Router>
  </React.StrictMode>,
);
