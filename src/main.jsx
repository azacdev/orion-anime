import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { animeApi } from "./features/apiSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={animeApi}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
