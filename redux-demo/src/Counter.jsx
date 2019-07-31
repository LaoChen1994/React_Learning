import React, { Component } from "react";
import { Store } from "./Store/index";
import { CounterAction } from "./actions/index";

export default class Counter extends Component {
  addCounter() {
    Store.dispatch(CounterAction.addCounter);
    console.log(Store.getState().counter);
  }
  descCounter() {
    Store.dispatch(CounterAction.desCounter);
    console.log(Store.getState().counter);
  }
  render() {
    // let { count } = Store.getState().counter;
    return (
      <div>
        现在的数字是: {Store.getState().counter.count}
        <button onClick={this.addCounter}>数字+1</button>
        <button onClick={this.descCounter}>数字-1</button>
      </div>
    );
  }
}
