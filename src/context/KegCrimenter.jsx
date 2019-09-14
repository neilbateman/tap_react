import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';

import {KegContext} from './KegContext';

const KegCrimenter = () => {
    const [pints, setPints] = useContext(KegContext);

    const Increment = () => {
      let increment = pints +1;
        setPints(increment)
    }

    const Decrement = () => {
      let decrement = pints - 1;
        setPints(decrement)
    }
    return(
        <div>
            <Button>Take a pint</Button>
            <Button>Leave a pint</Button>

        </div>
    );
};

export default KegCrimenter;
