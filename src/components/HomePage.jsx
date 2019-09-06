import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    Home!
    <Link to='/kegs'>Kegs</Link>
  </div>
);

export default Home;