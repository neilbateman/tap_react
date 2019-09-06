import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const About = () => (
  <div><Paper>   About
  <Link to='/'>Home</Link>
  <Link to='/kegs'>Kegs</Link></Paper>

  </div>
);

export default About;