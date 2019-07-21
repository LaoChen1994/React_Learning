import { observable, computed, action } from "mobx";

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
}

class TodoList {
  @observable todos = [
    { id: 1, title: "Learn React", finished: false },
    { id: 2, title: "Learn Mobx", finished: false }
  ];

  changeStorage() {
    localStorage.setItem("todoStore", JSON.stringify(this.todos));
  }

  @computed get getUnifinishedToCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
  @action
  changeFinishStatus(id) {
    let changeItem = this.todos.find(elem => elem.id === id);
    changeItem.finished = !changeItem.finished;
    // this.todos = [].concat(this.todos);
    this.changeStorage();
    // console.log(this.todos[0].finished, this.todos[1].finished);
  }
  @action
  addEvent(data) {
    this.todos.push(data);
    this.changeStorage();
  }
  @action
  initializatodos(data) {
    this.todos = [...data];
  }
  @action
  clearEvents() {
    this.todos = [];
    localStorage.removeItem("todoStore");
  }
  @action
  delEvent(id) {
    const curElem = this.todos.find(elem => elem.id === id);
    // const _this = this;
    this.todos.splice(this.todos.indexOf(curElem), 1);
    this.changeStorage();
  }
}

export { Todo, TodoList };
