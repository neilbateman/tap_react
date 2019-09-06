import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import KegLoop from './components/KegLoop';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Container>     
        
         <BrowserRouter>
      <NavBar/>
     
      <Routes/>
      </BrowserRouter>
</Container>

    </div>
  );
}

export default App;
