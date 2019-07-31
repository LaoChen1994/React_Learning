const initialState = {
  list: [{ title: "你好!" }]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_POSTS":
      return { ...state, list: payload };

    default:
      return state;
  }
};
