import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { todoStore } from "./Store";
import TodoList from "./component/TodoList";
import Controller from "./component/Controller";

function App() {
  return (
    <Provider store={todoStore}>
      <div className="App">
        <Controller />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
