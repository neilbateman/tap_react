import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import KegLoop from './components/KegLoop';
import About from './pages/About';
import ExpansionPanelKegs from './pages/ExpansionPanelKegs';
import NewKegForm from './components/NewKegForm';
import KegList from './context/KegList'
import AddKeg from './context/AddKeg';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/kegs" component={KegList} />
    <Route path="/about" component={About} />
    <Route path="/expansion" component={ExpansionPanelKegs} />
    <Route path="/order" component={AddKeg} />
  </Switch>
);

export default Routes;
