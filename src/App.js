import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import KegLoop from './components/KegLoop';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
   
        
         <BrowserRouter>
      <NavBar/>
     
      <Routes/>
      </BrowserRouter>

    </div>
  );
}

export default App;
