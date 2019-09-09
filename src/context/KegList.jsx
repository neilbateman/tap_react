import React, {useState, useContext} from 'react';
import Keg from './Keg';
import {KegContext} from './KegContext';

const KegList = () => {
    const [kegs, setMovies] = useContext(KegContext);
    return(
        <div>
         {kegs.map(keg => (
            <Keg type={keg.type} brand={keg.brand} price={keg.price} abv={keg.abv} key={keg.id} />
        ))} 
        </div>
    );
};

export default KegList;
