import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Index from './component/Index'
import { Counter } from './component/Counter'
import TodoList from './component/TodoList'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Index</Link>/<Link to="/counter">Counter</Link>/
          <Link to="/todoList">todoList</Link>
        </nav>
        <Route path="/" component={Index} exact></Route>
        <Route path="/counter" component={Counter}></Route>
        <Route path="/todoList" component={TodoList}></Route>
      </Router>
    </div>
  )
}

export default App
