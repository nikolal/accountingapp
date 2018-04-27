import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBsRkz8wkABsb8f49y2yoSIZ1t_8jNvr4A',
  authDomain: 'accountingapp-202314.firebaseapp.com',
  databaseURL: 'https://accountingapp-202314.firebaseio.com',
  storageBucket: 'accountingapp-202314.appspot.com',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
