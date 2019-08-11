export const Action = dispatch => {
  return {
    increase() {
      return dispatch({
        type: "increase"
      });
    },
    decrease() {
      return dispatch({
        type: "decrease"
      });
    },
    addSpecificNumber(data) {
      console.log(data);
      return () =>
        dispatch({
          type: "addSpecfic",
          data
        });
    },
    resetNumber() {
      return dispatch({
        type: "reset"
      });
    }
  };
};
