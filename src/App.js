import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, UWMap, Mobile } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/map">
          <UWMap />
        </Route>
        <Route path="/mobile">
          <Mobile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
