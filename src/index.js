import React from "react";
import ReactDOM from "react-dom/client";

import { AppContextProvider } from "./context/app-context";
import App from "./views/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
