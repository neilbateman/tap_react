import React, {useContext} from 'react';
import {KegContext} from './KegContext';

const KegCrimenter = () => {
    const [pints, setPints] = useContext(KegContext);

    const Increment = (e) => {
        e.preventDefault();
        setPints(prevKegs => [...prevKegs, {pints: pints++}])
    }

    const Decrement = (e) => {
        e.preventDefault();
        setPints(prevKegs => [...prevKegs, {pints: pints--}])
    }
    return(
        <div>
            <div onClick={Increment}>Add a keg</div>
            <div onClick={Decrement}>Take a keg</div>
        </div>
    );
};

export default KegCrimenter;
