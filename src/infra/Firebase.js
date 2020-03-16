import * as firebase from 'firebase';
import FirebaseConfig from '../consts/FirebaseConfig';

const firebaseInstance = firebase.initializeApp(FirebaseConfig);
firebase.analytics();

export default firebaseInstance;

// import firestore from 'firebase/firestore'
// const settings = {timestampsInSnapshots: true};
// firebaseInstance.firestore().settings(settings);