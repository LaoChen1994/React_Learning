const defaultClockStatus = {
  count: 0
};

export const clockReducer = (state = defaultClockStatus, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case "increase":
      newState.count = newState.count + 1;
      break;
    case "decrease":
      newState.count = newState.count - 1;
      break;
    case "addSpecfic":
      const { data } = action;
      try {
        newState.count = newState.count + parseFloat(data);
      } catch (error) {
        console.log(error);
      }
      break;
    case "reset":
      newState.count = 0;
      break;
    default:
      break;
  }
  return newState;
};
