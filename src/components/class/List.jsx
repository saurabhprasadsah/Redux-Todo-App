import React, { Component } from 'react'
import { connect } from 'react-redux'

 class List extends Component {
    componentDidMount(){
        // console.log(this.props);
    }
  render() {
    return (
        <ul className="list-group">
            {
                this.props.todos.length > 0 ? this.props.todos.map((todo, index)=>(
                    <li className="list-group-item d-flex justify-content-between" key={index}>
                      <div>{todo}</div>
                      <div>
                        <button className='btn btn-warning mx-2' onClick={() => this.props.editTodo(index, todo)}>Edit</button>
                        <button className='btn btn-danger'  onClick={() => this.props.deleteTodo(todo)}>Delete</button>
                      </div>
                        </li>
                )): <li className="list-group-item">No todo </li>

            }
        </ul>
    )
  }
}


const mapStateToProps = (state) =>{
    return {
        todos:state.todos
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        editTodo :(index,todo) => dispatch({type: "EDIT_TODO",
         payload:{
            index: index,
            data: data
        }
        }),
        deleteTodo :(todo) => dispatch({type: "DELETE_TODO", payload: todo})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)