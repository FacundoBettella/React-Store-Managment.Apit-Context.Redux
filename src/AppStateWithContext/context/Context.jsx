import { createContext, useState } from "react";

// Crea el context
export const TodoContext = createContext();

// Componente Provider para comunicar la data hacia sus componentes hijos
export const TodoProvider = (props) => {
  console.log(props.children)
  const [todos, setTodos] = useState([]);

  // Metodo para agregar una tarea
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Metodo para borrar una tarea
  const deleteTodo = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };

  const values = {
    todos,
    addTodo,
    deleteTodo
  }

  return (
    <TodoContext.Provider value={values}>
      {props.children}
    </TodoContext.Provider>
  );
};
