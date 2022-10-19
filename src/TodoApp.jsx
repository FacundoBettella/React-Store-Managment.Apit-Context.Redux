import { useEffect } from "react";
import { useForm } from "./hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, setTodos } from "./store/todo/todoSlice";

export const TodoApp = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  // Obtener info del localStorage
  useEffect(() => {
    dispatch(setTodos(JSON.parse(localStorage.getItem("todos")) || []));
  }, []);

  // Actualización del localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Acciones para modificar el estado
  const handleNewTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  // Hook para manipular el formulario
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  // Envio de formulario
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <div className="row">
        <div className="col-7">
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

        <div className="col-5">
          <h4>Agregar TODO</h4>
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

            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
