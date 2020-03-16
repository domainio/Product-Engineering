import RemoteConfig from '../infra/RemoteConfig';

const isToggleOn = (key) => {
  if (!!RemoteConfig && !!RemoteConfig.data) {
    const isToggle = !!RemoteConfig?.data[key];
    return isToggle;
  }
  return false;
};

export default {
  isToggleOn,
}