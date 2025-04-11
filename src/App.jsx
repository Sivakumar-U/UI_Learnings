import React, { Component } from 'react'

class Test extends Component {
  render() {
    return (
      <h2>I am from Child Component</h2>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h2>I am from main Component</h2>
        <Test/>
      </div>
      
    )
  }
}


export default App
