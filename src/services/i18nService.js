import RemoteConfig from '../infra/RemoteConfig';

const get = (lang, key) => {
  if (!RemoteConfig || !RemoteConfig.data) {
    return '';
  }
  const i18n = RemoteConfig?.data[`i18n_${lang}`];
  if (!!i18n) {
    return i18n[key]
  }
  return '';
};

export default {
  get
}