import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
