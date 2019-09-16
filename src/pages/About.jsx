import React from 'react';
import {Container, Paper, Typography, makeStyles, Button} from '@material-ui/core';
import componenttree  from '../assets/componenttree.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  img: {
    height: '60vmin'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const About = () => {
const classes = useStyles();
  return (
  <div className={classes.paper}>
  <Paper><Typography>This website is an educational exercise in performant DOM manipulation. Created with React and Material-UI, this website is composed exclusively of functional components using hooks, effects and the context API, as opposed to older class component and state lifecycle methods.</Typography></Paper><br/>
  <Container>
  <img src={componenttree} className ={classes.img}/>
  </Container>
  <Button href="https://github.com/neilbateman">Check out my other projects</Button>
  </div>
);}
export default About;
