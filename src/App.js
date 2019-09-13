import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import UserGreeting from './components/UserGreeting';
import {KegProvider} from './context/KegContext';
import KegList from './context/KegList'
import AddKeg from './context/AddKeg';
import beer from './assets/beer.svg';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(#e66465, #9198e5);',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 'auto',
    padding: '0 30px',
}
});

function App() {
  const classes = useStyles();
  return (

    <KegProvider>
    <div className="App">
    <div className={classes.root}>
      <BrowserRouter>
      <NavBar/>
      <UserGreeting/>
      <Routes/>
      </BrowserRouter><br/><br/><br/>
  <img src={beer} className="App-logo" alt="logo" /><br/><br/><br/></div>
    </div>

    </KegProvider>

  );
}

export default App;
