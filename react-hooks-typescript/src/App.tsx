import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Index } from './component/Index';
import { Counter } from './component/Counter';
import { DataList } from './component/DataList';
import { CommentList } from './component/Comment';

// 给定一个初始值
export const Context = React.createContext({ name: '' });

export const App: React.FC = () => {
  return (
    <div className="App">
      <Context.Provider value={{ name: 'Context Name' }}>
        <Router>
          <nav>
            <Link to="/">Index</Link>/<Link to="/counter">Counter</Link>/
            <Link to="/commentList">todoList</Link>/
            <Link to="dataList">DataList</Link>
          </nav>
          <Route path="/" component={Index} exact></Route>
          <Route path="/counter" component={Counter}></Route>
          <Route path="/commentList" component={CommentList}></Route>
          <Route path="/dataList" component={DataList}></Route>
        </Router>
      </Context.Provider>
    </div>
  );
};
