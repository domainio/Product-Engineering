import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthService from '../services/AuthService';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [suEmail, setSUEmail] = useState('');
  const [suPassword, setSUPassword] = useState('');
  const [suIsLoading, setSUIsLoading] = useState(false);
  const [suLoginStatus, setSULoginStatus] = useState(null);
  
  const [siEmail, setSIEmail] = useState('');
  const [siPassword, setSIPassword] = useState('');
  const [siIsLoading, setSIIsLoading] = useState(false);
  const [siLoginStatus, setSILoginStatus] = useState(null);
  
  const [success, setSuccess] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  
  const signIn = async () => {
    setSIIsLoading(true);
    try {
      const res = await AuthService.signIn({ email: siEmail, password: siPassword });
      if (res === true) {
        setSILoginStatus(true);
        console.log('sign-in success: ', res);
        history.push("/main");
      } else {
        console.log('sign-in failed: ', res);
        setSILoginStatus(false);
      }
    } catch (err) {
      setSILoginStatus(false);
      console.log('sign-in error: ', err);
    } finally {
      setSIIsLoading(false);
    }
  };
  
  const signUp = async () => {
    setSUIsLoading(true);
    try {
      const res = await AuthService.signUp({ email: suEmail, password: suPassword });
      if (res === true) {
        setSULoginStatus(true);
        console.log('sign-up success: ', res);
        history.push("/main");
      } else {
        console.log('sign-up failed: ', res);
        setSULoginStatus(false);
      }
    } catch (err) {
      setSULoginStatus(false);
      console.log('sign-up error: ', err);
    } finally {
      setSUIsLoading(false);
    }
  };
  
  return (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ color: 'lightskyblue' }}>Sign In</h1>
        <form className={classes.root} noValidate>
          <RedditTextField
            required
            label="Email"
            className={classes.margin}
            variant="filled"
            id="input-email"
            value={siEmail}
            onChange={(event) => {
              setSIEmail(event.target.value);
              setSILoginStatus(null);
            }}
          />
          <RedditTextField
            required
            label="Password"
            className={classes.margin}
            variant="filled"
            id="input-password"
            value={siPassword}
            onChange={(event) => {
              setSIPassword(event.target.value);
              setSILoginStatus(null);
            }}
          />
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={buttonClassname}
              disabled={siIsLoading}
              onClick={signIn}
            >
              Submit
            </Button>
            {siIsLoading && <CircularProgress size={24} className={classes.buttonProgress}/>}
          </div>
          {(siLoginStatus === false) &&
          <Alert severity="error">
            Failed to sign-in, wrong Email or Password
          </Alert>
          }
        </form>
      </div>
      <div style={{ flex: 1 }}>
        <h1 style={{ color: 'lightskyblue' }}>Sign Up</h1>
        <form className={classes.root} noValidate>
          <RedditTextField
            required
            label="Email"
            className={classes.margin}
            variant="filled"
            id="input-email"
            value={suEmail}
            onChange={(event) => {
              setSUEmail(event.target.value);
              setSULoginStatus(null);
            }}
          />
          <RedditTextField
            required
            label="Password"
            className={classes.margin}
            variant="filled"
            id="input-password"
            value={suPassword}
            onChange={(event) => {
              setSUPassword(event.target.value);
              setSULoginStatus(null);
            }}
          />
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={buttonClassname}
              disabled={suIsLoading}
              onClick={signUp}
            >
              Submit
            </Button>
            {suIsLoading && <CircularProgress size={24} className={classes.buttonProgress}/>}
          </div>
          {(suLoginStatus === false) &&
          <Alert severity="error">
            Failed to sign-up
          </Alert>
          }
        </form>
      </div>
    </div>
  );
};


const useStylesReddit = makeStyles(theme => ({
  root: {
    backgroundColor: '#87cefa',
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    // backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#b7e1fc',
    },
    '&$focused': {
      backgroundColor: '#dbf0fd',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();
  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    // backgroundColor: green[500],
    // '&:hover': {
    //   backgroundColor: green[700],
    // },
  },
  buttonProgress: {
    // color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default LoginPage;