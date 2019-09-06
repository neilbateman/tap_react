import React from 'react';

export default function KegProperties(props){
    return (
        <div> 
        <h4>{props.type}</h4>
        <h4>{props.brand}</h4>
        <h4>{props.pints}</h4>
        <h5>{props.price}</h5>
        <h5>{props.abv}</h5>
        </div>
    )
};