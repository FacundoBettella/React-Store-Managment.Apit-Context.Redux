import React from "react";
import ContainerTodos from "./components/ContainerTodos";
import { Title } from "./components/Title";
import { TodoProvider } from "./context/Context";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const AppStateWithContext = () => {

  return (
    <TodoProvider>
      <div style={containerStyle}>
        <Title/>
        <ContainerTodos/>
      </div>
    </TodoProvider>
  );
};

export default AppStateWithContext;
