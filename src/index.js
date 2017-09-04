import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { allReducers } from "./reducers/index";

ReactDOM.render(<h1>Hey boddy</h1>, document.getElementById("root"));
registerServiceWorker();
