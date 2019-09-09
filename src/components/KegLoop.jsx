import React from 'react';
import KegProperties from './KegProperties';
import {Paper, Container, Grid} from '@material-ui/core';
import { kegstore } from '../kegstore';


export default function KegLoop() {
    return(
        <div>
            <Container>
            <Grid item xs={12}>
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
            </Grid>
            </Container>
        </div>
    );
}