import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TodoProvider } from "./context";
import { AppContextPractice } from "./re-renderExample/ExampleApp";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <AppContextPractice /> */}
    <TodoProvider>
      <App />
    </TodoProvider>
  </BrowserRouter>
);
