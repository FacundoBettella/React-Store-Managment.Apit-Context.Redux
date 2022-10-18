// la idea es tener en un solo lugar todas
// las acciones que modifican mi state,
// todo lo que tiene que hacer un reducer es
// producir un nuevo estado basado en la accion que recibio

const initialState = [
  {
    id: 1,
    todo: "Tarea numero 1",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "TODO agregar tarea") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Tarea numero 2",
  done: false,
};

const addTodoAction = {
  type: "TODO agregar tarea",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

// console.log(todos);
