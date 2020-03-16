import Firebase from '../infra/Firebase';

let _messaging;

const askForPermissionToReceiveNotifications = async () => {
  try {
    console.log('askForPermissionToReceiveNotifications');
    _messaging = Firebase.messaging();
    await _messaging.requestPermission();
    const token = await _messaging.getToken();
    console.log('push notifications token:', token);
    return token;
  } catch (error) {
    console.error(error);
  }
};

const init = async () => {
  await askForPermissionToReceiveNotifications();
  if (_messaging) {
    _messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
    });
  }
};

export default {
  init
}



