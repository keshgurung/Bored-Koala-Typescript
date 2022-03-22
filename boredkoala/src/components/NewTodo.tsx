import React from 'react'

const NewTodo: React.FC = () => {
  const todoSubmitHandler = (e: React.FormEvent) =>{
  e.preventDefault()
  }

  return (
    <form onSubmit={todoSubmitHandler} >
    <div>
      <label htmlFor='todo-text'>Todo Text</label>
      <input type="text" id='todo-text' />
    </div>
    <button type='submit'>ADD TODO</button>
    </form>
  )

}

export default NewTodo