import React, {useState} from 'react';
import {Paper, Container, Grid} from '@material-ui/core';
import KegCrimenter from './KegCrimenter';

const Keg = ({type, brand, price, abv, id, pints}) => {
    const kegInformation =  
    <Container>
        <Paper>
            <h4>Type: {type} | Brand: {brand}</h4>
            <h5>Price: ${price} | ABV: {abv}%{id}</h5>
            <h5>Pints Remaining: {pints}</h5>
            <h5><KegCrimenter/></h5>
        </Paper>
    </Container>
    return(
       <div>
       {kegInformation}
       </div>
    );
}

export default Keg;
