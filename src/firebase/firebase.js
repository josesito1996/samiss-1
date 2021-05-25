import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFvcFaptou-4anyd9VomBtgL_9uZlGrkA",
  authDomain: "sami-b0ee9.firebaseapp.com",
  databaseURL: "https://sami-b0ee9-default-rtdb.firebaseio.com",
  projectId: "sami-b0ee9",
  storageBucket: "sami-b0ee9.appspot.com",
  messagingSenderId: "232127626321",
  appId: "1:232127626321:web:03a76fe401d1b83d3b4c70",
  measurementId: "G-ZZPEGFK8TF",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase;

// Initialize Cloud Firestore throungh Firebase

export const db = firebase.firestore();

//Servicio Storage
export const storage = firebase.storage();

