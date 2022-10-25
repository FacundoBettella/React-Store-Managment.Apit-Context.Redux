import React from "react";

const TodoForm = ({description, setDescription, setTodos}) => {

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
    
    setTodos((prev) => [...prev, newTodo]);
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
