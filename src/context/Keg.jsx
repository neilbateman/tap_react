import React, {useState, useContext} from 'react';
import {Paper, Container, Grid, Card, CardHeader, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {KegContext} from './KegContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Keg = ({type, brand, price, abv, id, pints, imageUrl}) => {
  const classes = useStyles();
  const [kegs, setKegs] = useContext(KegContext);
  let kegCount = kegs.length;
    const kegInformation =
    <Grid item xs={12}>
    {[kegCount].map(value=>(
      <Grid key={value} item>
    <Container>
        <Paper className={classes.paper}>
            <h4>Type: {type} | Brand: {brand}</h4>
            <h5>Price: ${price} | ABV: {abv}%{id}</h5>
            <h5>Pints Remaining: {pints}</h5>
        </Paper>
    </Container>
    </Grid>
    ))}
    </Grid>;
    return(
      <React.Fragment>
       <div>
       {kegInformation}
       </div>
       </React.Fragment>
    );
}

export default Keg;
