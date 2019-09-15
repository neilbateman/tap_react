import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{ Paper, Grid }from '@material-ui/core';
import Table from './Table';
import AddKegForm from './AddKegForm';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';

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

const Main = () => {
  const classes = useStyles();
  const kegData = [
    { id: 1, type: 'Beer', brand: 'Tecate' },
    { id: 2, type: 'Tequila', brand: 'Mescale' },
    { id: 3, type: 'Cider', brand: 'Angry Orchard' },
  ]

  const [kegs, setKegs] = useState(kegData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, type: '', brand: ''};
  const [currentKeg, setCurrentKeg] = useState(initialFormState);

  const editKeg = keg => {
    setEditing(true)
    setCurrentKeg({ id: keg.id, type: keg.type, brand: keg.brand})
  }

  const updateKeg = (id, updatedKeg) => {
    setEditing(false)
    setKegs(kegs.map(keg => (keg.id === id ? updatedKeg : keg)))
  }

  const addKeg = keg => {
    keg.id = kegs.length + 1;
    setKegs([...kegs, keg])
  };

  const deleteKeg = id => {
    setKegs(kegs.filter(keg => keg.id !== id))
  }

  return (
    <div className={classes.root}>

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
export default Main;
