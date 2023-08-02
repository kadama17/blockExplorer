import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import BlockNumber from "./BlockNumber";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/block/:blockHash" component={BlockNumber} />
      </Switch>
    </Router>
  );
}

export default App;
