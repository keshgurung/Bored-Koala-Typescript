import React ,{ useRef} from 'react'

interface newTodoProps {
 onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<newTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null)
  const todoSubmitHandler = (e: React.FormEvent) =>{
  e.preventDefault()
  const enteredText = textInputRef.current!.value 
  //current is used with useRef and ! says it is okay to ts. 
  props.onAddTodo(enteredText)
}

  return (
    <form onSubmit={todoSubmitHandler} >
    <div>
      <label htmlFor='todo-text'>Todo Text</label>
      <input type="text" id='todo-text' ref={textInputRef} />
    </div>
    <button type='submit'>ADD TODO</button>
    </form>
  )

}

export default NewTodo