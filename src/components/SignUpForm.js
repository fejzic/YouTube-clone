import React,{useEffect,useState} from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import { Input } from '@material-ui/core';
import { useFormik } from 'formik';
import { validationSchema } from '../validation-schema/signup-validation-schema';
import useStores from '../hooks/useStores';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) =>({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form:{
    width:'500px'
  },

    fields:{
      margin:'10px',
     
    },
    error: {
      color: 'red',
    },
    
    buttonConteiner:{
      margin: '25px 10px',
    },
    alert:{
      width:'500px',
  
    },
    button:{
      alignItems: 'center',
      width:'485px',
      height: '40px'
    } 
   } ));

export default function SignUpForm() {
  const classes = useStyles();
  const { userStore } = useStores();
  const [errorMessage,setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (values) => {
    setLoading(true);
    const { success, error } = await userStore.signup(values);

    if (success) {
      history.push('/login');
    } else {
      setErrorMessage(error);
    }

    setLoading(false);
};


  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      surname: '',
      password: '',

    },
    onSubmit: onSubmit,
    validationSchema: validationSchema
  });

 



  
  
  return(
    <div className={classes.root}>
       {errorMessage && <Alert className={classes.alert} onClose={()=>{setErrorMessage(null);}} severity="error">{errorMessage}</Alert>}
    <h1>Please Sign up</h1>
    <form className={classes.form} onSubmit={formik.handleSubmit}>
    <div className={classes.fields}>
        
        <TextField 
         id="username"
         name="username"
         fullWidth
         type="text"
         label="Username"
         onChange={formik.handleChange}
         value={formik.values.username} 
         variant="outlined"/>
         {formik.errors.username && formik.touched.username ? (
             <div className={classes.error}>{formik.errors.username}</div>
           ) : null}
      </div>
      <div className={classes.fields}>
        <TextField 
         id="name"
         name="name"
         fullWidth
         type="text"
         label="Name"
         onChange={formik.handleChange}
         value={formik.values.name} 
         variant="outlined"/>
         {formik.errors.name && formik.touched.name ? (
             <div className={classes.error}>{formik.errors.name}</div>
           ) : null}
      </div>
      <div className={classes.fields}>
        
        <TextField 
         id="surname"
         name="surname"
         fullWidth
         type="text"
         label="Surname"
         onChange={formik.handleChange}
         value={formik.values.surname}
         variant="outlined"/> 
         {formik.errors.surname && formik.touched.surname ? (
             <div className={classes.error}>{formik.errors.surname}</div>
           ) : null}
      </div>
      <div className={classes.fields}>
        
        <TextField 
         id="password"
         name="password"
         fullWidth
         type="password"
         label="Password"
         onChange={formik.handleChange}
         value={formik.values.password}
         variant="outlined"/>
         {formik.errors.password && formik.touched.password ? (
             <div  >{formik.errors.password}</div>
           ) : null}
      </div>
         
      <div className={classes.buttonConteiner}>
        {!loading && <Button className={classes.button} variant="contained" color="primary" onClick={formik.handleSubmit} >Submit</Button>}
        {!!loading && <Button className={classes.button} variant="contained" color="primary" onClick={formik.handleSubmit} ><CircularProgress color="white" disableShrink /></Button>}
      </div>
    </form>
  </div>
  )
}
