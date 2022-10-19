import React, { Fragment } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = ({ todos, setTodos }) => {
  return (
    <Fragment>
      <TodoList _todos={todos}/>
      <TodoForm _setTodos={setTodos}/>
    </Fragment>
  );
};

export default Todos;
