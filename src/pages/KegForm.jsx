import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function FilledInputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (

    <div className={classes.root}>
      <TextField
        id="filled-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Type"
        InputProps={{
          startAdornment: <InputAdornment position="start">Beer</InputAdornment>,
        }}
      />
      <TextField
        select
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Amount"
        value={values.weightRange}
        onChange={handleChange('weightRange')}
        InputProps={{
          startAdornment: <InputAdornment position="start">Pints</InputAdornment>,
        }}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="filled-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Brand"
        value={values.amount}
        onChange={handleChange('amount')}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      />
    </div>
  );
}
