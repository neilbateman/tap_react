import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import UserGreeting from '../components/UserGreeting';
import 'typeface-roboto';
import '../App.css';
import beer from '../assets/beer.svg';


const useStyles = makeStyles({
  root: {
    // textAlign: 'center',
    // width: '100%',
    // maxWidth: 500,
  },
});

export default function Home() {
  const classes = useStyles();
        return (
          <div className="App">
          <UserGreeting/>
            <Typography variant="h3" component="h2" gutterBottom>
              Welcome to the React Tap Room!
            </Typography><br/><br/>
            <img src={beer} className="App-logo" alt="logo" />
          </div>
        )};
