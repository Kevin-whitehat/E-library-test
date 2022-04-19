import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAckscX7k-2SpRSMp-A4rxQzRIoiHIPL_k",
  authDomain: "qr-code-scanner-41372.firebaseapp.com",
  databaseURL: "https://qr-code-scanner-41372-default-rtdb.firebaseio.com",
  projectId: "qr-code-scanner-41372",
  storageBucket: "qr-code-scanner-41372.appspot.com",
  messagingSenderId: "965957757405",
  appId: "1:965957757405:web:d1d607c00f6575b1bb6e34",
  measurementId: "G-56E2XV5JM4"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
