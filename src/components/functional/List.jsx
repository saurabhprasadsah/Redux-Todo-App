import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function List() {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  return (
    <ul className="list-group">

      {
        todos.length > 0 ? todos.map((todo, index) => (
          <li className='list-group-item d-flex justify-content-between' key={index}>
           <div>{todo}</div>
           <div>  

            <button className='btn btn-warning mx-2' onClick={()=> dispatch({
                type: "EDIT_TODO",
                payload:{
                  index: index,
                  data: todo
                }

            })}>Edit</button>

            <button  className='btn btn-danger'  onClick={()=> dispatch({
              type:"DELETE_TODO",
              payload: todo

            })}>Delete</button>
           </div>
          </li>
  
        )):<li className='list-group-item'> No Todo List </li>

      }

    </ul>
  )
}
