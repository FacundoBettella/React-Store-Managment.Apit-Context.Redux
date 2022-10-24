import React, { useContext } from "react";
import { TodoContext } from "../context/Context";

const TodoList = () => {
  
  const { todos, deleteTodo } = useContext(TodoContext);
  
  // Metodo para borrar una tarea
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
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
        
{/*           <TodoContext.Consumer>
            {
              ({todos, deleteTodo}) => {
                return (
                  todos.map((todo) => (
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
                )))}
            }
          </TodoContext.Consumer>  */} 
      </ul>
    </div>
  );
};

export default TodoList;
