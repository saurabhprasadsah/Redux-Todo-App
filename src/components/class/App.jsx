import React, { Component } from 'react'
import List from './List'
import Input from './input'


export default class App extends Component {
  render() {
    return (
      <div  className='container mt-4'>
        <List/>
        <Input/>
      </div>
    )
  }
}
