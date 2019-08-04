import { observable, action } from "mobx";
import { appStoreState, todoState, todoItem } from "../Interface/Interface";

class AppStore implements appStoreState {
  id = 1;
  @observable todoItem = [{ id: 1, item: "Learn React", isDone: false }];
  @action
  addTodoItem(event: todoItem) {
    this.todoItem.push({
      ...event,
      id: ++this.id
    });
  }
  @action
  deleteTodo(event: todoState) {
    // console.log(1);
    this.todoItem.splice(
      this.todoItem.findIndex(elem => elem.id === event.id),
      1
    );
  }
  @action
  changeEventStatus(event: todoState) {
    let target = this.todoItem.find(elem => elem.id === event.id);
    if (target) {
      target.isDone = !target.isDone;
    }
  }
}

export { AppStore };
