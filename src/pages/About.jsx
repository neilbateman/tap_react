import React from 'react';
import {Container} from '@material-ui/core';
import componenttree  from '../assets/componenttree.jpg'
import { makeStyles } from '@material-ui/core/styles';


const style = {
  padding: '10px',
  height: '60vmin',
  borderRadius: '3',
};

const About = () => (
  <div style={style}>
  <Container>
  <img src={componenttree} style ={style}/>
  </Container>
  </div>
);

export default About;
