import React, { Component } from 'react';
import List from './todoList';
import TForm from './form';

class todoListApp extends Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    };
    this.addTodoList = this.addTodoList.bind(this);
  }

  addTodoList(content) {
    let t = this.state.todoList;
    t.push(content);
    this.setState({ content: [].concat(t) });
  }

  render() {
    return (
      <div>
        <h1>TODO</h1>
        <List content={this.state.todoList}/>
        <TForm number={this.state.todoList.length} addTodoList={this.addTodoList} />
      </div>
    );
  }
}

export default todoListApp;
