import React, { useContext } from "react";
import { TodoContext } from "../context/Context";

export const Title = () => {

  const { todos } = useContext(TodoContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tareas por resolver: {todos.length}</h1>
    </div>
  );
};
