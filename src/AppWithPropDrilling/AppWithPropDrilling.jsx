import React, { useState } from "react";
import ContainerTodos from "./components/ContainerTodos";
import { Title } from "./components/Title";
import Todos from "./components/Todos";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const AppWithPropDrilling = () => {
 
  // State de Todos
  const [todos, setTodos] = useState([]);

  // State para guardar la descripcion de la tarea que el usuario escriba
  const [description, setDescription] = useState("");

  return (
      <div style={containerStyle}>
        <Title todos={todos}/>
        <ContainerTodos 
          description={description}
          setDescription={setDescription}
          todos={todos}
          setTodos={setTodos}     
        />
      </div>
  );
};

export default AppWithPropDrilling;
