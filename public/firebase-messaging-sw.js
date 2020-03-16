// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey: "AIzaSyATGDJxcZeIKf6Wrw5mrnpkpcj1T4mFCAY",
  authDomain: "test1-a1924.firebaseapp.com",
  databaseURL: "https://test1-a1924.firebaseio.com",
  projectId: "test1-a1924",
  storageBucket: "test1-a1924.appspot.com",
  messagingSenderId: "1021171396229",
  appId: "1:1021171396229:web:f2b218f6d89c25619b43ec",
  measurementId: "G-JSQ511ZKNS"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();