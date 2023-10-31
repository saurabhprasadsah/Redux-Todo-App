import React, { Component } from 'react'
import List from './List'
import Input from './input'

export default class App extends Component {
  render() {
    return (
      <div>
        <List/>
        <Input/>
      </div>
    )
  }
}
