import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import KegList from './context/KegList'
import AddKeg from './context/AddKeg';
import Main from './crud/Main';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/kegs" component={KegList} />
    <Route path="/about" component={About} />
    <Route path="/crud" component={Main}/>
    <Route path="/order" component={AddKeg} />
  </Switch>
);

export default Routes;
