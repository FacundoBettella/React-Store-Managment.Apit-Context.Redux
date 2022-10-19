import React, { useContext } from "react";
import { TodoContext } from "../context";

export const Title = ({ todosLength }) => {
  const { todos } = useContext(TodoContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tareas por resolver: {todos.length}</h1>
    </div>
  );
};
