import React from "react";


const TodoList = ({todos, setTodos}) => {

  // Metodo para borrar una tarea
  const deleteTodo = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
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
              onClick={() => deleteTodo(todo.id)}
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
