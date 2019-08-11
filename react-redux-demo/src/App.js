import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Store } from "./Store";
import Counter from "./component/Counter";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
