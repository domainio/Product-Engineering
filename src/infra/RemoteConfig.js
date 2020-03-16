import firebase from './Firebase';
import _ from 'lodash';

const _remoteConfigAPI = firebase.remoteConfig();
let _remoteConfigData = null;

_remoteConfigAPI.settings = {
  minimumFetchIntervalMillis: 36000,
}

const fetch = async () => {
  try {
    await _remoteConfigAPI.ensureInitialized();
    const activated = await _remoteConfigAPI.fetchAndActivate();
    console.log('remote config status: ', activated);
    // const json = await _remoteConfigAPI.getValue('i18n_en')._value;
    const jsonAll = await _remoteConfigAPI.getAll();
    const data = _.reduce(jsonAll, (res, item, key) => {
      console.log('key =', key);
      let value;
      try {
        value = JSON.parse(item._value);
      } catch (e) {
        value = item._value;
      }
      console.log('value = ', value);
      res[key] = value;
      return res;
    }, {});
    console.log(data);
    return _remoteConfigData = data;
  } catch (err) {
    console.log(err);
  }
};

const getByKey = (key) => {
  if (!_remoteConfigData) {
    return null;
  }
  return _remoteConfigData['feature_toggle'];
}

export default {
  fetch,
  get data() {
    return _remoteConfigData;
  },
  getByKey
};