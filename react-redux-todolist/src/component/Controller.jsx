import React, { Component } from "react";
import { connect } from "react-redux";
import { todoAction } from "../Action";
import { Button, Input } from "antd";

export class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemValue: ""
    };
    this.inputChange = this.inputChange.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
  }

  inputChange(e) {
    this.setState({
      itemValue: e.target.value
    });
  }

  addTodoItem() {
    const { addTodoItem, store } = this.props;
    const { nextId } = store;
    addTodoItem({
      id: nextId,
      todoItem: this.state.itemValue,
      isCompleted: false
    });
  }

  render() {
    return (
      <>
        <Input
          onChange={this.inputChange}
          value={this.state.itemValue}
          className="addInput"
          style={{ width: "500px" }}
        />
        <Button onClick={this.addTodoItem} style={{ marginLeft: "10px" }}>
          添加
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

export default connect(
  mapStateToProps,
  todoAction
)(Controller);
