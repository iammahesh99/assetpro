import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import theme from "./config/theme";
import store from "./store";
import { Provider } from "react-redux";
import KeyCloakConfig from "./config/keycloak";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () =>
  root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  );
//renderApp();
KeyCloakConfig.initKeycloak(renderApp);
