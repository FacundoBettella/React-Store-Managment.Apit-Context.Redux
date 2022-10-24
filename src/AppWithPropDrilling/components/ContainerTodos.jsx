import React, { Fragment } from 'react'
import Todos from './Todos'

const ContainerTodos = ( {todos, setTodos, description, setDescription} ) => {
  return (
    <Fragment>     
      <Todos 
        description={description}
        setDescription={setDescription}
        todos={todos}
        setTodos={setTodos}     
      />
      {/* MORE CODE ... */}
    </Fragment>
  )
}

export default ContainerTodos