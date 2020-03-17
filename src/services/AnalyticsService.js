import AnalyticsProvider from '../infra/AnalyticsProvider';

const logEvent = (eventName, data = {}) => {
  AnalyticsProvider.logEvent(eventName, data);
};

export default {
  logEvent,
}