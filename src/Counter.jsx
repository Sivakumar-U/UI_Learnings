{/*Counter with class component */}
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state= { count:0 }
    }
  render() {
    return (
      <div className='main'>
        <p>you clicked {this.state.count} times</p>
        <button onClick={()=> this.setState({count:this.state.count+1})}>Click Me</button>
      </div>
    )
  }
}

