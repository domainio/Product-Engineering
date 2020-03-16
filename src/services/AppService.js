import RemoteConfig from '../infra/RemoteConfig';

const initRemoteConfig = async () => {
  return await RemoteConfig.fetch();
};


export default {
  initRemoteConfig
}