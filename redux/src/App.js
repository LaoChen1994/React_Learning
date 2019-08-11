import React from "react";
import "./App.css";
import { Store } from "./Store";
import { Button } from "antd";
import { increase, decrease } from "./Action";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
    this.addNumber = this.addNumber.bind(this);
    this.decreaseNumber = this.decreaseNumber.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    Store.subscribe(this.handlerChange);
  }

  addNumber = () => {
    Store.dispatch(increase);
  };

  decreaseNumber = () => {
    Store.dispatch(decrease);
  };

  handlerChange = () => {
    this.setState(() => Store.getState());
  };

  render() {
    return (
      <div className="App">
        <div>Count: {this.state.count}</div>
        <Button onClick={this.addNumber} type="primary">
          +1
        </Button>
        <Button onClick={this.decreaseNumber} type="danger">
          -1
        </Button>
      </div>
    );
  }
}

export default App;
