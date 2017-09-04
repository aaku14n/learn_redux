import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./component/home";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers/index";

const store = createStore(allReducers);
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
