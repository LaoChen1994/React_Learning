export const todoAction = dispatch => {
  return {
    addTodoItem: data => {
      return dispatch({
        type: "ADD_TODO",
        data
      });
    },
    removeTodoItem: data => {
      return dispatch({
        type: "DEL_TODO",
        data
      });
    },
    changeStatus: data => {
      return dispatch({
        type: "CHANGE_STATUS",
        data
      });
    }
  };
};
