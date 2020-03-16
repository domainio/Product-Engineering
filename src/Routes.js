import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AuthService from './services/AuthService';
import Spinner from './components/Spinner';

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  
  useEffect(() => {
    const silentLogin = async () => {
      const res = await AuthService.silentLogin();
      if (res === true) {
        history.push("/main");
      } else {
        history.push("/");
      }
      setIsLoading(false);
    };
    silentLogin();
  }, [])
  
  if (isLoading) {
    return <Spinner/>
  }
  
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/login"/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/main" component={MainPage}/>
      </Switch>
    </div>
  )
};

export default Routes;