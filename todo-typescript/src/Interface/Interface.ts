export interface todoState {
  id: number;
  item: string;
  isDone: boolean;
}

export interface todoItem {
  item: string;
  isDone: boolean;
}

export interface appStoreState {
  id: number;
  todoItem: Array<todoState>;
  addTodoItem: (event: todoState) => void;
  deleteTodo: (event: todoState) => void;
  changeEventStatus: (event: todoState) => void;
}
