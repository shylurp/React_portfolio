import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuHugUOfQ8pCOtDCvUqPKqHr4Fi6dqXUM",
  authDomain: "my-personal-portfolio-7a1cc.firebaseapp.com",
  databaseURL:
    "https://my-personal-portfolio-7a1cc-default-rtdb.firebaseio.com",
  projectId: "my-personal-portfolio-7a1cc",
  storageBucket: "my-personal-portfolio-7a1cc.appspot.com",
  messagingSenderId: "350809015397",
  appId: "1:350809015397:web:a9605215c89f2dcc69f28c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const timestamp = new firebase.firestore.Timestamp(42, 0);

export { db, timestamp };
