import React from "react";
import "./App.css";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { Store } from "./Store/index";

// 通过provider把redux和react连接在一起，store传递到react项目中
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export { App };
