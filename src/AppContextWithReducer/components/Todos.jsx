import React, { Fragment } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <Fragment>
      <TodoList/>
      <TodoForm/>
    </Fragment>
  );
};

export default Todos;
