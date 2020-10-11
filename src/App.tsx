import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';

import { Sidebar } from './components/Sidebar';
import { About } from './pages/About';
import { New } from './pages/New';
import { History } from './pages/History';
import { View } from './pages/View';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="page">
          <Switch>
            <Route path="/new">
              <New />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/:id">
              <View />
            </Route>
            <Route path="/">
              <Redirect to="/new" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
