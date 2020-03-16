import React, { useEffect, useState } from 'react';
import { Container, Button } from '@material-ui/core';
import AnalyticsSection from '../components/AnalyticsSection';
import PerformanceSection from '../components/PerfSection';
import LangSelect from '../components/LangSelect';
import CoronaAlert from '../components/CoronaAlert';
import PushService from '../services/PushService';
import RemoteConfig from '../infra/RemoteConfig';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../components/Spinner';
import AuthService from '../services/AuthService';
import { useHistory } from "react-router-dom";

const MainPage = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState('en');
  const classes = useStyles();
  const history = useHistory();
  
  useEffect(() => {
    const isAuth = AuthService.isAuth();
    if (!isAuth) {
      history.push('/');
    }
    PushService.init();
    const fetchData = async () => {
      await RemoteConfig.fetch()
      console.log('RemoteConfig = ', RemoteConfig.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  
  const signOut = async () => {
    setIsLoading(true)
    await AuthService.signOut();
    setIsLoading(false);
    history.push('/');
  };
  
  if (isLoading) {
    return <Spinner/>
  }
  
  return (
    <Container maxWidth="lg">
      <Button
        variant="contained"
        color="secondary"
        style={{ display: 'flex', alignSelf: 'flex-start' }}
        onClick={signOut}>
        Logout
      </Button>
      <LangSelect
        lang={lang}
        onChange={(val) => setLang(val)}
      />
      <div className={classes.wrapper}>
        <CoronaAlert/>
        <AnalyticsSection lang={lang}/>
        <PerformanceSection/>
      </div>
    </Container>
  )
};

const useStyles = makeStyles(theme => ({
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
}));

export default MainPage;