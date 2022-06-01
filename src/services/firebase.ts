import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoFBd_-IPpXrwCpNgqPIF-MKx0U93cH2A",
  authDomain: "letmeask-f1179.firebaseapp.com",
  databaseURL: "https://letmeask-f1179-default-rtdb.firebaseio.com",
  projectId: "letmeask-f1179",
  storageBucket: "letmeask-f1179.appspot.com",
  messagingSenderId: "131799125699",
  appId: "1:131799125699:web:f97751524356cb97871c76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export {app}