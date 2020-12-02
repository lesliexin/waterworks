import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UWMap } from "./pages";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <UWMap />
          </Route>
          <Route path="/map">
            <div>Other route</div>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;