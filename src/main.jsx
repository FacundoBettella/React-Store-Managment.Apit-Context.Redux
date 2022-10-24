import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import AppWithPropDrilling from "./AppWithPropDrilling/AppWithPropDrilling";
import AppStateWithContext from "./AppStateWithContext/AppStateWithContext"; 
import AppContextWithReducer from "./AppContextWithReducer/AppContextWithReducer";
import AppReRenders from "./AppReRenders/AppReRenders";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
      <AppWithPropDrilling />
      {/* <AppStateWithContext /> */}
      {/* <AppContextWithReducer /> */}
      {/*  <AppReRenders /> */}
  </Fragment>
);
