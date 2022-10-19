import React, { useContext, useState } from "react";
import { TodoContext } from "../context";

const TodoForm = ({ _setTodos }) => {
  const [description, setDescription] = useState("");

  const { addTodo } = useContext(TodoContext);

  const onInputChange = (e) => {
    e.preventDefault();
    const todo = e.target.value;
    setDescription(todo);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      description: description,
    };
    addTodo(newTodo);
    setDescription("");
  };

  return (
    <div className="col-5 mt-5">
      <h4>Agregar tarea</h4>
      <hr />
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-3">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
