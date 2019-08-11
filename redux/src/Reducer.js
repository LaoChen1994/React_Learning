const defaultState = {
  count: 0
};
// reducer可以接收一个state但是不能修改state
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "increase":
      newState.count += 1;
      return newState;
    case "decrease":
      newState.count -= 1;
      return newState;
    default:
      break;
  }

  return newState;
};
