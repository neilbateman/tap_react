import React, {useContext} from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {KegContext} from '../context/KegContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [kegs, setKegs] = useContext(KegContext);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Home</Link> |
            <Link to="/kegs"> Kegs</Link> |
            <Link to="/crud"> CRUD</Link> |
            <Link to="/order"> Order</Link> |  
            <Link to="/about"> About</Link><br/>
             # of kegs in store:  {kegs.length}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
