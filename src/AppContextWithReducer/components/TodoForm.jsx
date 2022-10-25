import React, { useContext, useState } from "react";
import { TodoContext } from "../context/Context";

const TodoForm = () => {
  const [description, setDescription] = useState("");
  const { dispatch } = useContext(TodoContext);

  // Metodo para actualizar el estado del input descripcion
  const onInputChange = (e) => {
    const todo = e.target.value;
    setDescription(todo);
  };

  // Metodo que se ejecuta al hacer submit del formulario
  const onFormSubmit = (e) => {
    e.preventDefault();
    
    if(description.length <= 0) return

    const newTodo = {
      id: crypto.randomUUID(),
      description: description,
    };
 
    dispatch({type:"addTodo", payload: newTodo})
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
