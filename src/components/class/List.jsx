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
                    <li className="list-group-item" key={index}>{todo}</li>

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

export default connect(mapStateToProps,)(List)