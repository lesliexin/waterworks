import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, UWMap, Mobile } from "./pages";

function App() {
  return (
    <>
    <BrowserView>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/map">
          <UWMap />
        </Route>
      </Switch>
    </Router>
    </BrowserView>
    <MobileView>
      <Mobile />
    </MobileView>
    </>
  );
}

export default App;
