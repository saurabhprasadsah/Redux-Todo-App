import React, { useState } from 'react'
import { useDispatch } from 'react-redux';




export default function Input() {
  const dispatch = useDispatch();
  let [todo, setTodo] = useState(' ');
  const inputChange = (event) =>{
    setTodo(event.target.value)
  }
  const submit = (event) =>{
    event.preventDefault();
    dispatch({
        type:"ADD_TODO",
        payload: todo
    })
  }
  return (
    <form className="row" onSubmit={submit}>
      <div className="col-10">
        <input type="text"
         className="form-control"
         placeholder="Enter Todo"
         value={todo}
         onChange={inputChange}/>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">Add</button>
      </div>
    </form>
  )
}
