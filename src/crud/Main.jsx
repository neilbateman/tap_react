import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{ Paper, Grid }from '@material-ui/core';
import Table from './Table';


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

export default function Main() {
  const classes = useStyles();
  const kegData = [
    { id: 1, type: 'Beer', brand: 'Tecate' },
    { id: 2, type: 'Tequila', brand: 'Mescale' },
    { id: 3, type: 'Cider', brand: 'Angry Orchard' },
  ]

  const [kegs, setKegs] = useState(kegData)

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Add Keg</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>View Kegs
          <Table kegs={kegs}/>
          </Paper>
        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
      </Grid>
    </div>
);
}
