import React, { Component } from "react";
import { connect } from "react-redux";
import { Action } from "../Action";
import { Button, Input } from "antd";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(e) {
    this.setState({ count: e.target.value });
  }
  render() {
    const {
      store,
      increase,
      decrease,
      addSpecificNumber,
      resetNumber
    } = this.props;
    const { count } = store;

    return (
      <>
        <div>Count: {count}</div>
        <Button
          onClick={increase}
          style={{ marginRight: "10px" }}
          type="primary"
        >
          add 1(+1)
        </Button>
        <Button onClick={decrease} type="danger">
          minux 1(-1)
        </Button>
        <br />
        <Input
          onChange={this.inputChange}
          style={{ width: "200px", margin: "20px 0" }}
        />
        <br />
        <Button
          onClick={addSpecificNumber(this.state.count)}
          value={this.state.count}
        >
          add number
        </Button>
        <Button onClick={resetNumber}>Reset</Button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

export default connect(
  mapStateToProps,
  Action
)(Clock);
