import RemoteConfig from '../infra/RemoteConfig';

const isToggleOn = (key) => {
  const isToggle = !!RemoteConfig?.data[key];
  return isToggle;
};

export default {
  isToggleOn,
}