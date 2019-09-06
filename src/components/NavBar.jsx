import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Home</Link> | <Link to="/kegs">Kegs</Link> | <Link to="/about">About</Link>| <Link to="/add">Order</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
