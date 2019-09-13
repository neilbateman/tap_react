import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';


const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    width: '100%',
    maxWidth: 500,
  },
});

export default function Home() { 
        return (
          <div>  
            <Typography variant="h3" component="h2" gutterBottom>
              Welcome to the React Tap Room!
            </Typography>
          </div>
        )};


