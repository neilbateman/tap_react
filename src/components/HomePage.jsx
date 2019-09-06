import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => (
  <div>
    
    Home!<br/>
    <Link to='/kegs'>Kegs</Link><br/>
    <Link to='/about'>About</Link><br/>
    <Link to='/expansion'>Try Me!</Link>
  </div>
);

export default Home;