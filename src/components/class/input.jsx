import React, { Component } from 'react'
import { connect } from 'react-redux';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            error:false
        }
    }

    onInputChange = (event) => {
        this.setState({
            todo: event.target.value
        })

        if(event.target.value.length > 0){
            this.setState({
                todo: false
            })
        }else{
            this.setState({
                todo: true
            })
    
        }
    }

    submit = (event) => {
        event.preventDefault()

        if(this.state.todo.length > 0){
            if (this.props.editData.index !== '') {

                this.props.updateTodo(this.props.editData.index, this.state.todo);
    
            } else {
                this.props.addTodo(this.state.todo);
            }
        }else{
            this.setState({
                error:true
            })
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.editData.index !== this.props.editData.index) {
            this.setState({
                todo: this.props.editData.data
            })
        }
    }

    render() {
        return (
            <form className="row" onSubmit={this.submit}>
                <div className="col-10">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter Todo"
                        value={this.state.todo}
                        onChange={this.onInputChange} />
                        {
                           this.state.error && <p className='text-danger'>Please enter Todo</p>
                        }
                </div>
                <div className="col-2">
                    <button type="submit"
                     className="btn btn-primary mb-3"
                     disabled={this.state.todo.length > 0 ? false: true}>
                            {
                                this.props.editData.index === '' ? 'Add' : 'update'
                            }
                    </button>
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        editData: state.editData

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch({ type: "ADD_TODO", payload: todo}),
        updateTodo: (index, data) => dispatch({
            type: "UPDATE_TODO", payload: {
                index: index, data: data
            }
        })

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);