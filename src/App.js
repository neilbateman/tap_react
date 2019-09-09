import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import UserGreeting from './components/UserGreeting';
import {KegProvider} from './context/KegContext';
import KegList from './context/KegList'
import AddKeg from './context/AddKeg';

function App() {
  return (
    <KegProvider>
    <div className="App">  
      <BrowserRouter>
      <NavBar/>
      <UserGreeting/>

      <Routes/>
      </BrowserRouter>
    </div>
    </KegProvider>
  );
}

export default App;
