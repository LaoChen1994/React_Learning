import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { get } from "axios";
import thunk from "redux-thunk";
// 第一个reduceder
const counterReduser = (state = { count: 1 }, action) => {
  console.log(action);

  switch (action.type) {
    case "COUNT_ADD":
      return {
        ...state,
        count: state.count + 1
      };
    case "COUNT_REDUCE":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};
// 第二个reducer
const initialState = {
  list: [{ title: "你好！" }]
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_POSTS":
      return { ...state, list: payload };

    default:
      return state;
  }
};

// 通过combineReducers对多个reducer进行合并

const rootReducer = combineReducers({
  counter: counterReduser,
  post: postReducer
});

// redux中使用异步请求要加一个异步的中间件thunk
const store = createStore(rootReducer, compose(applyMiddleware(...[thunk])));

console.log(store.getState());

// type: 进行什么操作, payload传递的参数
export const action = {
  type: "COUNT_ADD",
  payload: {}
};

const getJson = () => {
  return get("http://jsonplaceholder.typicode.com/posts");
};

store.dispatch(action);
// 当添加异步的中间件之后 在dispatch中添加一个dispatch变量
store.dispatch(async function(dispatch) {
  const res = await getJson();
  console.log(res);
  dispatch({
    type: "LOAD_POSTS",
    payload: {
      res: res.data
    }
  });
});
console.log(store.getState());
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
