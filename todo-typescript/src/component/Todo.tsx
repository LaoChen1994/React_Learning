import { observer, inject } from "mobx-react";
import * as React from "react";
import { appStoreState, todoState } from "../Interface/Interface";
import "../scss/todo.scss";

export interface IAppProps {
  Store?: appStoreState;
}

@inject("Store")
@observer
export default class App extends React.Component<IAppProps> {
  changeStatus(todoItem: todoState) {
    const { Store } = this.props;
    if (Store) {
      Store.changeEventStatus(todoItem);
    }
  }

  removeItem(todoItem: todoState) {
    const { Store } = this.props;
    if (Store) {
      Store.deleteTodo(todoItem);
    }
  }

  renderTodoList = () => {
    const { Store } = this.props;
    if (Store) {
      console.log(Store.todoItem);
      return Store.todoItem.map((elem, index) => (
        <div className="list" key={`${index}`}>
          <div className="list-item">
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={elem.isDone}
              className="list-item__checkbox"
            />
            <span className="list-item__text">
              <span>{`${elem.item}`}</span>
            </span>
          </div>
          <div className="list-control">
            <button onClick={this.removeItem.bind(this, elem)}>Delete</button>
            <button onClick={this.changeStatus.bind(this, elem)}>
              {elem.isDone ? "Cancel" : "Completed"}
            </button>
          </div>
        </div>
      ));
    }
  };

  public render() {
    return this.renderTodoList();
  }
}
