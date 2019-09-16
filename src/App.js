import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {KegProvider} from './context/KegContext';
import beer from './assets/beer.svg';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Container} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  root: {
    height: '5000',
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <KegProvider>
    <Container>
    <div className="App" >
      <BrowserRouter>
      <NavBar/>
      <Routes/>
      </BrowserRouter><br/><br/><br/>
  <br/><br/><br/>
      <Footer/>
    </div>
    </Container>
    </KegProvider>

  );
}

export default App;
