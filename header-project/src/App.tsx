import React, { useState } from "react";
import "./App.css";
import Drawer from "./component/Darwer";

const App: React.FC = () => {
  let [showDrawer, setShowDrawer] = useState(false);

  const handlerShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="App">
      <button onClick={handlerShowDrawer}>left</button>
      <Drawer showDrawer={showDrawer} changeDrawer={handlerShowDrawer} />
    </div>
  );
};

export default App;
