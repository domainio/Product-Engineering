import PushProvider from '../infra/PushProvider';

const init = async () => {
  const res = await PushProvider.askNotificationsPermission();
  if (!!res) {
    const payload = await PushProvider.onMessage();
    console.log('Message received. ', payload);
  }
};

export default {
  init
}



