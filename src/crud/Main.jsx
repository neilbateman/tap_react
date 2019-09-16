import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{ Paper, Grid, Container, Typography, Card }from '@material-ui/core';
import Table from './Table';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import {KegContext} from '../context/KegContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    padding: theme.spacing(2),
    background: theme.palette.text.secondary,
  },
}));

const Main = () => {
  const classes = useStyles();
  const [kegs, setKegs] = useContext(KegContext);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, type: '', brand: ''};
  const [currentKeg, setCurrentKeg] = useState(initialFormState);

  const editKeg = keg => {
    setEditing(true)
    setCurrentKeg({ id: keg.id, type: keg.type, brand: keg.brand})
  };

  const updateKeg = (id, updatedKeg) => {
    setEditing(false)
    setKegs(kegs.map(keg => (keg.id === id ? updatedKeg : keg)))
  };

  const addKeg = keg => {
    keg.id = kegs.length + 1;
    setKegs([...kegs, keg])
  };

  const deleteKeg = id => {
    setEditing(false)
    setKegs(kegs.filter(keg => keg.id !== id))
  };

  return (

    <div className={classes.root}>
    <br/>
      <Card className={classes.card}>
      <Container>
          <Paper className={classes.paper}><Typography  variant="body2" color="textSecondary" component="p"><h3>Welcome to the CRUD view, where you can create, read, update, and delete kegs. Refer to the Kegs page for more keg detail, and the order page to place a more specific order.</h3></Typography></Paper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={6}>
        {editing ? (
          <Paper className={classes.paper}>Edit Keg
          <EditKeg
          editing={editing}
          setEditing={setEditing}
          currentKeg={currentKeg}
          updateKeg={updateKeg}
          />
          </Paper>
        ) : (
          <Paper className={classes.paper}>Add Keg
          <AddKeg addKeg={addKeg} />
          </Paper>
        )}
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>View Kegs
          <Table kegs={kegs} editKeg={editKeg} deleteKeg={deleteKeg}/>
          </Paper>
        </Grid>
      </Grid>
      </Container>
    </Card>
    </div>
);
}
export default Main;
