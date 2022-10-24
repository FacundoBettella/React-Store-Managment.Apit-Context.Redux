import { createContext, useReducer } from "react";

const initialState = []

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, action.payload]
    case "deleteTodo":
      return state.filter(todo => action.payload !== todo.id)
    default:
      return state
  }
}

// Crea el context
export const TodoContext = createContext();

// Componente Provider para comunicar la data hacia sus componentes hijos
export const TodoProvider = (props) => {
  const [todos, dispatch] = useReducer(reducer, initialState)

  const values = {
    todos,
    dispatch,
  }

  return (
    <TodoContext.Provider value={values}>
      {props.children}
    </TodoContext.Provider>
  );
};
