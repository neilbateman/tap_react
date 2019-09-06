import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import KegLoop from './components/KegLoop';



const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/kegs" component={KegLoop} />

  </Switch>
);

export default Routes;
