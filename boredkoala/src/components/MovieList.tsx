import React from 'react'
// import { useState, useEffect } from 'react'


interface MovieListProps {
  items: {id: number, name: string} [];
}
const MovieList : React.FC <MovieListProps> = props => {

  return (
    <ul>
      {props.items.map(todo => 
        <li key={todo.id}>{todo.name}</li>
      )}
    </ul>
  )
}

export default MovieList