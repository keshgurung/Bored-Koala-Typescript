import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import NewTodo from './components/NewTodo';
const App: React.FC = () => {
  const todos = [{'id': 1, "name": 'call mom'}]

  // we add a fn to point this to NewTodo component, to be called there.
  const todoAddHandler = (test:string) =>{

  }
  return <div className='app'>
    <MovieList items ={todos} />
    <NewTodo onAddTodo={todoAddHandler} />
  </div>

}

export default App;
