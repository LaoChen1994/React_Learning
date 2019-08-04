import React from "react";
import "./App.css";
import { Provider } from "mobx-react";
import { AppStore } from "./Store/Store";
import Todo from "./component/Todo";
import Controller from "./component/Controller";

const appStore = new AppStore();

const App: React.FC = () => {
  return (
    <Provider Store={appStore}>
      <div className="App">
        <Controller />
        <Todo />
      </div>
    </Provider>
  );
};

export default App;
