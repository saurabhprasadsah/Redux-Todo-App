import React, { Component } from 'react'
import { connect } from 'react-redux';

class Input extends Component {
    constructor() {
         super();
         this.state ={
            todo : ''
         }
    }

    onInputChange =(event) =>{
        this.setState({
            todo: event.target.value
        })
    }

    submit = (event) =>{
        event.preventDefault()
        this.props.addTodo(this.state.todo);
    }

    componentDidMount(){
        console.log(this.props);
    }

    render() {
        return (
            <form className="row" onSubmit={this.submit}>
                <div className="col-10">
                    <input type="text" 
                    className="form-control"
                    placeholder="Enter Todo"
                    value={this.state.todo}
                    onChange={this.onInputChange}/>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-primary mb-3">Add</button>
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) =>{
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTodo :(todo) => dispatch({type: "ADD_TODO", payload: todo})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Input);