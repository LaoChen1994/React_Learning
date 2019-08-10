import React, { Component } from "react";
import { CounterAction } from "./actions/index";
import { connect } from "react-redux";
// import { CounterAction } from "./actions/index";

class Counter extends Component {
  addCounter() {
    this.props.dispatch(CounterAction.addCounter);
  }

  descCounter() {
    this.props.dispatch(CounterAction.desCounter);
  }

  render() {
    let { count } = this.props.count;
    // console.log(this.props.count.count);
    return (
      <div>
        现在的数字是: {count}
        <button onClick={this.addCounter.bind(this)}>数字+1</button>
        <button onClick={this.descCounter.bind(this)}>数字-1</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter,
  post: state.post
});

//通过connect连接组件和数据
export default connect(mapStateToProps)(Counter);
