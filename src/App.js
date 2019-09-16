import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {KegProvider} from './context/KegContext';
import KegList from './context/KegList'
import AddKeg from './context/AddKeg';
import beer from './assets/beer.svg';
import { makeStyles } from '@material-ui/core/styles';
import barstool from './assets/barstool.jpg'
import {Paper, Container, Grid} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { sizing } from '@material-ui/system';





const useStyles = makeStyles({
  root: {
    backgroundImage: 'url(${imageUrl});',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
     height: '5000',
    // padding: '0 30px',
}
});

const App = () => {
   const imageUrl = barstool;
  const classes = useStyles();
  return (
    <KegProvider>
    <Container>
    <div style={{backgroundImage: `url(${imageUrl})`}}>
    <div className="App" >
      <BrowserRouter>
      <NavBar/>
      <Routes/>
      </BrowserRouter><br/><br/><br/>
  <br/><br/><br/></div>
    </div>
    </Container>
    </KegProvider>

  );
}

export default App;
