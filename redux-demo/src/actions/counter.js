export const addCounter = {
  type: "COUNT_ADD",
  payload: {}
};

export const desCounter = {
  type: "COUNT_DESC",
  payload: {}
};

export const resetCounter = {
  type: "COUNT_RESET",
  payload: {
    count: 0
  }
};
