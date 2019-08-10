import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function UserHobby(routeParam) {
  console.log(routeParam);
  return <h2>This is Router Params: {routeParam.match.params.id}</h2>;
}

export default function User(routeParam) {
  return (
    <Router>
      <div>
        <Link to="/User/Hobby">Hobby</Link>
      </div>
      <div>
        <Link to="/User/Friends">Friends</Link>
      </div>
      <Route path="/User/:id" component={UserHobby} />
      <Route exact path={routeParam.url} render={() => <h3>User Page</h3>} />
    </Router>
  );
}
