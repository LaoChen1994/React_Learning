import React, { Component, Fragment } from "react";
import { observer, Provider, inject } from "mobx-react";
import { TodoList } from "./Store";
import "./todo.scss";

@inject("Store")
@observer
class TodoListView extends Component {
  changeStatus(id) {
    this.props.Store.changeFinishStatus(id);
  }

  delEvent(id) {
    this.props.Store.delEvent(id);
  }

  render() {
    return (
      <Fragment>
        <ul className="todo-list">
          {this.props.Store.todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.finished}
                onChange={this.changeStatus.bind(this, todo.id)}
                id={`todoCheck-${todo.id}`}
              />
              <label for={`todoCheck-${todo.id}`}>{todo.title}</label>

              <button
                className="todo-btn"
                onClick={this.delEvent.bind(this, todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="total">
          <span className="total-title">Tasks left:</span>
          <span className="total-num">
            {this.props.Store.getUnifinishedToCount}
          </span>
        </div>
      </Fragment>
    );
  }
}

@inject("Store")
@observer
class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      newEvent: "",
      finished: false
    };
  }

  componentDidMount() {
    console.log(this.eventRef);
    this.eventRef.focus();
  }

  handleNewEventChange(e) {
    this.setState({ newEvent: e.target.value });
  }

  clearStatus() {
    this.setState(() => {
      return {
        id: "",
        newEvent: "",
        finished: false
      };
    });
  }

  addEvent() {
    if (!!this.state.newEvent) {
      this.props.Store.addEvent({
        id: Math.random(),
        title: this.state.newEvent,
        finished: this.state.finished
      });
      this.clearStatus();
    } else {
      alert("Please input the event message");
    }
  }

  ClearAllEvents() {
    this.props.Store.clearEvents();
  }

  render() {
    return (
      <Fragment>
        <div className="control">
          <input
            type="text"
            value={this.state.newEvent}
            onChange={this.handleNewEventChange.bind(this)}
            ref={input => (this.eventRef = input)}
          />
          <br />
          <button onClick={this.addEvent.bind(this)} className="todo-btn">
            Add Event
          </button>
          <button onClick={this.ClearAllEvents.bind(this)} className="todo-btn">
            Clear all Events
          </button>
        </div>
      </Fragment>
    );
  }
}

const appStore = new TodoList();

class App extends Component {
  constructor(props) {
    super(props);
    console.log(appStore);
    if (localStorage.getItem("todoStore")) {
      appStore.initializatodos(JSON.parse(localStorage.getItem("todoStore")));
      console.log(JSON.parse(localStorage.getItem("todoStore")));
    } else {
      appStore.initializatodos([]);
    }
  }

  render() {
    return (
      <Provider Store={appStore}>
        <div className="todoApp">
          <TodoListView />
          <ControlPanel />
        </div>
      </Provider>
    );
  }
}

export default App;
