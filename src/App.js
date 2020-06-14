import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';

import './css/vendor/bootstrap.min.css';
import './css/vendor/chosen.css';
import './css/vendor/fm.revealator.jquery.min.css';
import './css/vendor/font-awesome.css';

export default function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>
  );
}
