importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");
firebase.initializeApp({
      apiKey: "AIzaSyCERyCtmmYJw1qsI2DimwKlbvRWDgitTyM",
      authDomain: "duzzy-delivery.firebaseapp.com",
      projectId: "duzzy-delivery",
      storageBucket: "duzzy-delivery.appspot.com",
      messagingSenderId: "21594410699",
      appId: "1:21594410699:web:1acfc96b4fa645452cd54e",
      measurementId: "G-3CX2TGK63C"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});