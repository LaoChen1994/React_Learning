import React from "react";
import "./App.css";
import Context from "./Context";
import DynamicContent from "./DynamicContext";
// import HOCBtn from "./HOCWithContext";

function App() {
  return (
    <div className="App">
      <Context />
      <DynamicContent />
      {/* <HOCBtn /> */}
    </div>
  );
}

export default App;
