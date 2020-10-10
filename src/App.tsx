import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import { Sidebar } from './components/Sidebar';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route path="/">
            <h1>Hello, world!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
