import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import UserGreeting from '../components/UserGreeting';
import beer from '../assets/beer.svg';
import 'typeface-roboto';
import '../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: 'lightblue',
  },
}));

const Home = () => {
  const classes = useStyles();
        return (
          <div className="App">
          <UserGreeting/>
            <Typography className={classes.paper}>
              <h2>React Tap Room!</h2>
            </Typography><br/><br/>
            <img src={beer} className="App-logo" alt="logo" />
          </div>
        )};
export default Home;
