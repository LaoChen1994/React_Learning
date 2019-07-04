import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

const users = [
  {
    username: 'Jerry',
    age: 21,
    gender: 'male'
  },
  {
    username: 'Tomy',
    age: 22,
    gender: 'male'
  },
  {
    username: 'Lily',
    age: 19,
    gender: 'female'
  },
  {
    username: 'Lucy',
    age: 20,
    gender: 'female'
  }
];

class App extends Component {
  render() {
    let userElem = [];
    for (const item of users) {
      userElem.push(
        <div>
          <div>姓名: {item.username}</div>
          <div>年龄：{item.age}</div>
          <div>性别：{item.gender}</div>
        </div>
      );
    }
    return <div>{userElem}</div>;
  }
}

export default App;
