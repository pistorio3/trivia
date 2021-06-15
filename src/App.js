import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Login from './components/Login';
import Game from './components/Game';
import Settings from './pages/Settings';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/game" component={ Game } />
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
      </Switch>
    </div>
  );
}
