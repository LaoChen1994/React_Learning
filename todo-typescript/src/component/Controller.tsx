import React, { Component, ChangeEvent } from "react";
import { observer, inject } from "mobx-react";
import { appStoreState } from "../Interface/Interface";
import "../scss/controller.scss";

export interface IProps {
  Store?: appStoreState;
}

@inject("Store")
@observer
export default class Controller extends Component<IProps> {
  state = {
    itemValue: ""
  };

  inputChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ itemValue: event.target.value });
  }

  addTodoList() {
    const { Store } = this.props;
    if (Store && this.state.itemValue) {
      Store.addTodoItem({
        item: this.state.itemValue,
        isDone: false,
        id: 1
      });
    } else {
      alert("The todo items is null");
    }
  }

  renderController() {
    return (
      <div className="controller">
        <div className="controller__input">
          Items:{" "}
          <input
            type="text"
            value={this.state.itemValue}
            onChange={this.inputChange.bind(this)}
          />
        </div>
        <button
          className="controller__btn"
          onClick={this.addTodoList.bind(this)}
        >
          Add
        </button>
      </div>
    );
  }

  render() {
    return this.renderController();
  }
}
