import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from './components/Main';

function App() {
  return (
      <Router>
        <Switch>
          <Route>
            <Main />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
