import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import KegLoop from './components/KegLoop';
import About from './pages/About';



const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/kegs" component={KegLoop} />
    <Route path="/about" component={About} />

  </Switch>
);

export default Routes;
