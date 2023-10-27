import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Input() {
  const dispatch = useDispatch();

  let [todo, setTodo] = useState(' ');
  let [error, setError] = useState(false);


  const inputChange = (event) =>{
    setTodo(event.target.value)


  }

  const submit = (event) =>{
    event.preventDefault();

    if(todo.length > 0){
      dispatch({
        type:"ADD_TODO",
        payload: todo

      })
      setTodo('');

    } else{


    }




  }


  return (
    <form className="row" onSubmit={submit}>
      <div className="col-10">
        <input type="text"
         className="form-control"
         placeholder="Enter Todo"
         value={todo}
         onChange={inputChange}/>

           {
              error &&  <p className='text-danger'>Please enter todo</p>
           }

      </div>

      <div className="col-2">

        <button type="submit" className="btn btn-primary mb-3">Add</button>
      </div>
    </form>
  )
}
