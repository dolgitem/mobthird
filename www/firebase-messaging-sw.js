importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAPmi--KjRxsO8-9ZHUEW4C0WgwdciW8U4",
    authDomain: "listokmobile-a4a7a.firebaseapp.com",
    projectId: "listokmobile-a4a7a",
    storageBucket: "listokmobile-a4a7a.appspot.com",
    messagingSenderId: "605044241888",
    appId: "1:605044241888:web:5b44ac1f464f86671ae785",
    measurementId: "G-MLS54SDB6G"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });