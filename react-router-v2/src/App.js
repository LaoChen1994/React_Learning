import React, { Component } from 'react'
import './App.css'
import { Route, Router, Link } from 'react-router'

class Index extends Component {
  render() {
    return <div>index</div>
  }
}

class Counter extends Component {
  render() {
    return <div>Counter</div>
  }
}

function App() {
  return (
    <div className="App">
      <Link to="/counter">to Counter</Link>
      <Router>
        <Route path="/" component={Index}></Route>
        <Route path="/counter" component={Counter}></Route>
      </Router>
    </div>
  )
}

export default App
