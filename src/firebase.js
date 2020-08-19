import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAx9IVm1AAw_I2UiJNHDCENJQhjnw8JF2U",
  authDomain: "instagram-reels-631ee.firebaseapp.com",
  databaseURL: "https://instagram-reels-631ee.firebaseio.com",
  projectId: "instagram-reels-631ee",
  storageBucket: "instagram-reels-631ee.appspot.com",
  messagingSenderId: "638299956748",
  appId: "1:638299956748:web:d19929ba0076c9a05bf029"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const bd = firebaseApp.firestore();

export default bd;