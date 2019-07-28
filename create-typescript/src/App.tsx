import React from "react";
import "./App.css";
import { First } from "./FirstComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <First color="red" />
    </div>
  );
};

export default App;
