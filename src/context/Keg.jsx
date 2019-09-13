import React, {useState, useContext} from 'react';
import {Paper, Container, Grid} from '@material-ui/core';
import {KegContext} from './KegContext';
import { Link } from 'react-router-dom';

const Keg = ({type, brand, price, abv, id, pints, index}) => {
    const [kegs, setKegs] = useContext(KegContext);
    const kegInformation =  
    <Container>
        <Paper>
            <h4>Type: {type} | Brand: {brand}</h4>
            <h5>Price: ${price} | ABV: {abv}%{id}</h5>
            <h5>Pints Remaining: {pints}</h5>
            <h5><Link to={'/selectedkeg/'+index}>Edit Keg</Link></h5>
        </Paper>
    </Container>
    return(
       <div>
       {kegInformation}
       </div>
    );
}

export default Keg;
