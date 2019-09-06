import React from 'react';
import KegProperties from './KegProperties';
import Paper from '@material-ui/core/Paper';
import { kegstore } from '../kegstore';


export default function KegLoop() {
    return(
        <div>
            {kegstore.map((keg, index) =>
            <Paper>
                <KegProperties type={keg.type}
                brand={keg.brand}
                pints={keg.pints}
                price={keg.price}
                abv={keg.abv}
                key={index} />
            </Paper>
            )}
        </div>
    );
}