import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import AnalyticsSection from './components/AnalyticsSection';
import PerformanceSection from './components/PerfSection';
import LangSelect from './components/LangSelect';
import CoronaAlert from './components/CoronaAlert';
import RemoteConfig from './infra/RemoteConfig';
import PushService from './services/PushService';
import Title from './components/Title';
import Spinner from './components/Spinner';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState('en');
  const classes = useStyles();

  useEffect(() => {
    PushService.init();
    const fetchData = async () => {
      await RemoteConfig.fetch()
      console.log('RemoteConfig = ', RemoteConfig.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className={classnames("App", classes.app)}>
      <Title />
      <Container maxWidth="lg">
        <div>
          <LangSelect
            lang={lang}
            onChange={(val) => setLang(val)}
          />
        </div>
        <div className={classes.root}>
          <CoronaAlert />
          <AnalyticsSection lang={lang} />
          <PerformanceSection />
        </div>
      </Container>
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
  title: {
    marginTop: '0px',
    paddingTop: '20px',
    color: 'white'
  },
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
}));

export default App;