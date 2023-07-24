import React from "react";
import ReactDOM from "react-dom/client";
// import { KeycloakProvider } from "@react-keycloak/web";
import "./index.css";
import App from "./App";
// import keycloak from "./keycloak";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <KeycloakProvider keycloak={keycloak}> */}
    <App />
    {/* </KeycloakProvider> */}
  </React.StrictMode>
);
