import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/index";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";

import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
//import App from "./App";
import "assets/scss/index.scss";
//import "./assets/scss/index.scss";
import "./assets/scss/_abstracts.scss";
import "i18n";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
