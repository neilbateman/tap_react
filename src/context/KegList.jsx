import React, {useState, useContext} from 'react';
import Keg from './Keg';
import {KegContext} from './KegContext';

const KegList = () => {
    const [kegs, setKegs] = useContext(KegContext);
    return(
        <div>
         {kegs.map(keg => (
            <Keg type={keg.type} brand={keg.brand} price={keg.price} abv={keg.abv} pints={keg.pints} imageUrl={keg.imageUrl} key={keg.id} />
        ))}
        </div>
    );
};

export default KegList;
