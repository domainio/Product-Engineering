import Firebase from '../infra/Firebase';
import { WebPushCertificates } from '../consts/FirebaseConfig';

let _messaging;

const askForPermissioToReceiveNotifications = async () => {
  try {
    console.log('askForPermissioToReceiveNotifications')
    _messaging = Firebase.messaging();
    await _messaging.requestPermission();
    console.log('get token');
    _messaging.getToken().then((res) => console.log('token:', res));
    // const token = await _messaging.getToken().then((res)=>console.log('token:',res));
    // _messaging.usePublicVapidKey(WebPushCertificates)
    // console.log('token:', token);
    // return token;
  } catch (error) {
    console.error(error);
  }
}

// const verifyServiceWorker = () => {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("./firebase-messaging-sw.js")
//       .then(function (registration) {
//         console.log("Registration successful, scope is:", registration.scope);
//       })
//       .catch(function (err) {
//         console.log("Service worker registration failed, error:", err);
//       });
//   }
// }



const init = async () => {
  await askForPermissioToReceiveNotifications();
  // verifyServiceWorker();
  if (_messaging) {
    _messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      // ...
    });
  }
};

export default {
  init
}



