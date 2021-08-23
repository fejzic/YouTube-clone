import React from 'react';
import SignUpForm from '../components/SignUpForm';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'10px'
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container spacing={2}>
    <Grid item xs={12}>
  <div><SignUpForm></SignUpForm></div>
  </Grid>
  </Grid>
  </div>
  );
};
