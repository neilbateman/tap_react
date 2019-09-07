import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">  
    
      <BrowserRouter>
      <NavBar/>
      <UserGreeting/>
      <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
