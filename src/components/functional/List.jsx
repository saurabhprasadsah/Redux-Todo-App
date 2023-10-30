import React from 'react'

import { useSelector } from 'react-redux'

export default function List() {
  const todos = useSelector(state => state.todos);

  return (
    <ul className="list-group">

      {
        todos.length > 0 ? todos.map((todo, index) => (
          <li className='list-group-item' key={index}>{todo}</li>
  
        )):<li className='list-group-item'> No Todo in List </li>

      }

    </ul>
  )
}
