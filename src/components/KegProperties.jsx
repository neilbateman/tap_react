import React from 'react';
import CountButton from '../buttons/CountButton';

export default function KegProperties(props){
    return (
        <div> 
        <h4>Type: {props.type}</h4>
        <h4>Brand: {props.brand}</h4>
        
        <h5>Price: ${props.price}</h5>
        <h5>ABV: {props.abv}%</h5>
        <h4> <CountButton/></h4>
       
        </div>
    )
};