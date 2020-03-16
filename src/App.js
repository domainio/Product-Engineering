import React from 'react';
import './App.css';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Title from './components/Title';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';

function App() {
  const classes = useStyles();
  return (
    <div className={classnames("App", classes.app)}>
      <Title/>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  app: {
    backgroundColor: 'black',
    height: '100%',
    margin: 0,
    padding: 0,
  },
}));

export default App;