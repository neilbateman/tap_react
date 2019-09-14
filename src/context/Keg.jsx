import React, {useState, useContext} from 'react';
import {Paper, Container, Grid, Card, CardHeader} from '@material-ui/core';
import KegCrimenter from './KegCrimenter';
import {KegContext} from './KegContext';

const Keg = ({type, brand, price, abv, id, pints, imageUrl}) => {
  const [kegs, setKegs] = useContext(KegContext);
  let kegCount = kegs.length;
    const kegInformation =
    <Grid item xs={8}>
    {[kegCount].map(value=>(
      <Grid key={value} item>
    <Container>
        <Paper>
            <h4>Type: {type} | Brand: {brand}</h4>
            <h5>Price: ${price} | ABV: {abv}%{id}</h5>
            <h5>Pints Remaining: {pints}</h5>
            <h5><KegCrimenter/></h5>
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
