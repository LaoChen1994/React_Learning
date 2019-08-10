import { observable, action, computed } from "mobx";
import { appStoreState, todoState, todoItem } from "../Interface/Interface";

class AppStore implements appStoreState {
  @observable todoItem = [{ id: 1, item: "Learn React", isDone: false }];
  @action
  addTodoItem(event: todoItem) {
    this.todoItem.push({
      ...event,
      id: this.id
    });
  }
  @computed get id() {
    return this.todoItem.length + 1;
  }
  @computed get unsolvedNumber() {
    return this.todoItem.filter(elem => !elem.isDone).length;
  }
  @action
  deleteTodo(event: todoState) {
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
