import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { TodoApp } from "./TodoApp";
import { Provider } from "react-redux";
import { store as Store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </Provider>
);
