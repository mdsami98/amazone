import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDp-_g2Mv_xC7c0NXzwleldvdxcqoHiJ8Y",
  authDomain: "e-1a792.firebaseapp.com",
  projectId: "e-1a792",
  storageBucket: "e-1a792.appspot.com",
  messagingSenderId: "761840475886",
  appId: "1:761840475886:web:f4d1f66ed3cda5a194ddff",
  measurementId: "G-8K8J7PFFET",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
