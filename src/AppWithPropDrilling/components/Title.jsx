import React from "react";


export const Title = ({todos}) => {

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tareas por resolver:{todos.length}</h1>
    </div>
  );
};
