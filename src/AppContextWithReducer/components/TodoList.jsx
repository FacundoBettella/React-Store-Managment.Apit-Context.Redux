import React, { useContext } from "react";
import { TodoContext } from "../context/Context";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  // Metodo para borrar una tarea
  const handleDeleteTodo = (id) => {
    dispatch({type: "deleteTodo", payload: id }) 
  };

  return (
    <div className="col-5 mt-5">
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span className={`align-self-center`}>{todo.description}</span>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
