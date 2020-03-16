import React from 'react';
import RemoteConfig from '../infra/RemoteConfig';
import FeatureToggleService from '../services/FeatureToggleService';
import Alert from '@material-ui/lab/Alert';
import AnalyticsProvider from '../infra/AnalyticsProvider';
import AnalyticsEvents from '../consts/AnalyticsEvents';

const CoronaAlert = () => {
  const isToggleOn = FeatureToggleService.isToggleOn('feature_toggle');
  const coronaAlert = RemoteConfig.getByKey('feature_toggle');
  if (!isToggleOn) {
    return null;
  }
  AnalyticsProvider.logEvent(AnalyticsEvents.DisplayCoronaAlert)
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h2>Corona Alert</h2>
      <Alert severity="error">{coronaAlert}</Alert>
      <img
        style={{ 
          marginTop: '20px',
          width:'200px',
          // height:'100%',
          objectFit: 'cover',
          overflow: 'hidden' }}
        src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200108214800-coronavirus.jpg"
      />
    </div>
  )
}

export default CoronaAlert;