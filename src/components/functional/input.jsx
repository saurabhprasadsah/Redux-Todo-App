import React, { useState } from 'react'


export default function Input() {
  let [todo, setTodo] = useState(' ');

  const inputChange = (event) =>{
    setTodo(event.target.value)
  }

  const submit = (event) =>{
    event.preventDefault();

    console.log(todo);

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
