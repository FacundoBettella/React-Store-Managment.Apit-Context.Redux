import React, { useState } from "react";
import { Title } from "./components/Title";
import Todos from "./components/Todos";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div style={containerStyle}>
      <Title todosLength={todos.length} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
