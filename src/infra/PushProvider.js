import CloudProvider from '../infra/CloudProvider';

let _messaging;

const askNotificationsPermission = async () => {
  try {
    console.log('push service askNotificationsPermission');
    _messaging = CloudProvider.messaging();
    await _messaging.requestPermission();
    const token = await _messaging.getToken();
    console.log('push service notifications token:', token);
    return token;
  } catch (error) {
    console.error('push service error: ', error);
  }
};

const onMessage = async () => {
  if (_messaging) {
    return _messaging.onMessage
  }
};

export default {
  askNotificationsPermission,
  onMessage
}