import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

//这是redux的原始state
const triger = 10000;

//这是action
const increase = {
  type: "涨工资"
};
const decrease = {
  type: "扣工资"
};

//这是reducer
const reducer = (state = triger, action) => {
  switch (action.type) {
    case "涨工资":
      return (state += 100);
    case "扣工资":
      return (state -= 100);
    default:
      return state;
  }
};

//创建store
const store = createStore(reducer);
console.log(store);

// 通过subscribe来订阅事件，事件状态发生变化的时候执行的函数

store.subscribe(() => {
  console.log(store.getState());
});

// 派发事件
store.dispatch(increase);
store.dispatch(decrease);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
