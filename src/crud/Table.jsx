import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    content: 'justify-center',
    padding: "theme.spacing(2)",
    textAlign: 'right',
    color: 'theme.palette.text.secondary',
  },
}));
const Table = props => {
  const classes = useStyles();
        return (
    <table className={classes.paper}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Brand</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {props.kegs.length > 0 ? (
        props.kegs.map(keg => (
          <tr key={keg.id}>
          <td>{keg.type}</td>
          <td>{keg.brand}</td>
          <td>
            <Button onClick={() => {props.editKeg(keg)}}>Edit</Button>
            <Button onClick={() => props.deleteKeg(keg.id)}>Delete</Button>
          </td>
          </tr>
        ))
            ) : (
              <tr>
    <td colSpan={3}>No kegs</td>
    </tr>
      )}
      </tbody>
    </table>
  )};
export default Table;
