import React, {useState} from 'react';
import {Paper, Container, Grid} from '@material-ui/core';

const Keg = ({type, brand, price, abv, id}) => {
    const kegInformation =  
        <Paper>
            <h4>Type: {type} | Brand: {brand}</h4>
            <h5>Price: ${price} | ABV: {abv}%{id}</h5>
        </Paper>
    return(
       <div onClick={() => {alert('you clicked this type: ' + {type})}}>
       {kegInformation}
       </div>
    );
}

export default Keg;
