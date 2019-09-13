import React, {useState} from 'react';

const Keg = ({type, brand, price, abv}) => {
    
    return(
        <div>
            <h3>{type}</h3>
            <h3>{brand}</h3>
            <h3>{price}</h3>
            <h3>{abv}</h3>
        </div>
    );
}

export default Keg;
