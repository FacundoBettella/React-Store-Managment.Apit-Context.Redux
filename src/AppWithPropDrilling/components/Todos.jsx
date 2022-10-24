import React, { Fragment } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = ({ description, setDescription, todos, setTodos }) => {

  return (
    <Fragment>
      <TodoList
          todos={todos}
          setTodos={setTodos}   
      />
      <TodoForm  
          description={description}
          setDescription={setDescription}
          setTodos={setTodos}
      />
    </Fragment>
  );
};

export default Todos;
