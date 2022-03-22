import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import NewTodo from './components/NewTodo';
const App: React.FC = () => {
  const todos = [{'id': 1, "name": 'call mom'}]
  return <div className='app'>
    <MovieList items ={todos} />
    <NewTodo />
  </div>

}

export default App;
