import React from 'react';
import KegProperties from './KegProperties';
import {Paper, Container, Grid, makeStyles } from '@material-ui/core';
import { kegstore } from '../kegstore';
import KegForm from '../pages/KegForm';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function KegLoop() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Container>
            <Grid item xs={12}><Paper>Welcome to the TAPROOM</Paper></Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}><Paper><KegForm/></Paper></Grid>
            </Container>
        </Grid>
        </div>
    );
}