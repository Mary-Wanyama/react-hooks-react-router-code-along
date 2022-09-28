import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter} from "react-router-dom";
import App from "./App"

/* Add basic styling for NavLinks */

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById("root")
);
