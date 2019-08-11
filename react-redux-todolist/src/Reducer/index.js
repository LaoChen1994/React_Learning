const defaultState = {
  nextId: 2,
  todoItems: [{ id: 1, todoItem: "Learn React", isCompleted: false }]
};
export const todoReducer = (state = defaultState, action) => {
  const newState = Object.assign({}, state);
  const itemId = action.data
    ? newState.todoItems.findIndex(elem => elem.id === action.data.id)
    : -1;
  switch (action.type) {
    case "ADD_TODO":
      newState.todoItems.push(action.data);
      newState.nextId++;
      break;
    case "DEL_TODO":
      if (itemId !== -1) newState.todoItems.splice(itemId, 1);
      break;
    case "CHANGE_STATUS":
      if (itemId !== -1)
        newState.todoItems[itemId].isCompleted = !newState.todoItems[itemId]
          .isCompleted;
      break;
    default:
      break;
  }
  return newState;
};
