import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import useStores from "../hooks/useStores";
import { Button, TextField } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2%",
  },
  form: {
    width: "500px",
    marginTop: "4%",
  },
  inputField: {
    marginBottom: "6%",
    width: "100%",
  },
  button: {
    width: "130px",
    
    margin: "2px 240px",
    height: "40px",
  },
  linkButton:{
    width: "130px",
    fontSize : 18,
    height: "35px",
    margin: "2px 0px",
    textDecoration: 'none'
  },
  conteinerLink:{
    margin: "0 0px",
  },
  conteiner:{
    display: "flex",
    width: "500px",
    height:"200px"
    
  }
}));

const Login = () => {
  const classes = useStyles();
  const { userStore } = useStores();
  const [errorMessage, setErrorMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    const { success, error } = await userStore.login(values);

    if (success) {
      history.push('/');
    } else {
      setErrorMessage(error);
    }

    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: onSubmit,
  });

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClick = (errorMessage) => {
    !!errorMessage && setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorMessage(null);
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <h1>Please Log In</h1>

      {!!errorMessage && (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>
      )}

      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            className={classes.inputField}
            id="username"
            name="username"
            type="username"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.username}
            label="Username"
          />
        </div>
        <div>
          <TextField
            className={classes.inputField}
            id="password"
            name="password"
            type="password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.password}
            label="Password"
          />
        </div>
        <div className={classes.conteiner}>
          
          <div className={classes.conteinerLink}>
          <Link
          className={classes.linkButton}
          component="button"
          variant='body2'
          onClick={() => {
            history.push('/signup');
          }}>Create Account</Link>
            </div>
            <div>
            <Button
            className={classes.button}
            onClick={handleClick}
            variant="contained"
            color="primary"
            type="submit"
            disableElevation
          >
            {loading ? <CircularProgress color="white"  /> : "Submit"}
          </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
