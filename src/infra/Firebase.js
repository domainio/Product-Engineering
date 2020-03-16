import * as firebase from 'firebase';
import FirebaseConfig from '../consts/FirebaseConfig';

const firebaseInstance = firebase.initializeApp(FirebaseConfig);
firebase.analytics();


// navigator.serviceWorker 
//   .register('/my-sw.js')
//   .then((registration) => {
//     firebaseInstance.messaging().useServiceWorker(registration);
//   });

// const askForPermissioToReceiveNotifications = async () => {
//   try {
//     const messaging = firebaseInstance.messaging();
//     await messaging.requestPermission();
//     const token = await messaging.getToken();
//     console.log('token:', token);
//     return token;
//   } catch (error) {
//     console.error(error);
//   }
// }

// askForPermissioToReceiveNotifications();

export default firebaseInstance;

// import firestore from 'firebase/firestore'
// const settings = {timestampsInSnapshots: true};
// firebaseInstance.firestore().settings(settings);