import React from "react";
import { Title } from "./components/Title";
import Todos from "./components/Todos";
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
        <Todos/>
      </div>
    </TodoProvider>
  );
};

export default AppStateWithContext;
