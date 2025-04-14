import React, { Component } from 'react'

export default class Counter2 extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }

    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h4>Counter Example: </h4>
        <h5>Count value:{this.state.count}</h5>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
