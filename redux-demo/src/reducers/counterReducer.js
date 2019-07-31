const initialState = {
  count: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_ADD":
      return { ...state, count: state.count + 1 };
    case "COUNT_DESC":
      return { ...state, count: state.count - 1 };
    case "COUNT_RESET":
      return { ...state, count: action.payload.count };
    default:
      return state;
  }
};
