import React from 'react';
import { Link } from 'react-router-dom';
import {Paper, Container} from '@material-ui/core';
import componenttree  from '../assets/componenttree.jpg'
import { makeStyles } from '@material-ui/core/styles';


const style = {

    height: '60vmin',
    
    // border: 0,
     borderRadius: '3',

};

const About = () => (
  <div style={style}>
  <Container> <img src={componenttree} style ={style}/>
  </Container>

  </div>
);

export default About;
