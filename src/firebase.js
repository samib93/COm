import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCG7asixTaYDTFkgdKpPsWTK1BWwFv3txk",
  authDomain: "fresh-site-ab8fa.firebaseapp.com",
  projectId: "fresh-site-ab8fa",
  storageBucket: "fresh-site-ab8fa.appspot.com",
  messagingSenderId: "53011584605",
  appId: "1:53011584605:web:093eb40e62dfe10e89dfb4",
  measurementId: "G-WM4ZSZTC6P"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };





// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//     apiKey: "AIzaSyBb1b-h8GLOuowD_W95fT8i3q9rjA4ZQ-0",
//     authDomain: "flutter-medica.firebaseapp.com",
//     projectId: "flutter-medica",
//     storageBucket: "flutter-medica.appspot.com",
//     messagingSenderId: "990097588146",
//     appId: "1:990097588146:web:3062b7227f39a2a05d2eab",
//     measurementId: "G-ZZXJ407E58"
//   };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };




