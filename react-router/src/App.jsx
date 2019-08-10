import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Index from "./component/Index.jsx";
import User from "./component/User.jsx";
import Home from "./component/Home.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/User/">User</Link>
          </li>
          <li>
            <Link to="/Home/">Home</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/User/" component={User} />
          <Route path="/Home/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
