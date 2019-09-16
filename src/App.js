import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {KegProvider} from './context/KegContext';
import beer from './assets/beer.svg';
import { makeStyles } from '@material-ui/core/styles';
import barstool from './assets/barstool.jpg'
import {Paper, Container} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url(${imageUrl});',
    height: '5000',
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
