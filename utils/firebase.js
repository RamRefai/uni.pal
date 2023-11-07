import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-2ZczE9LEiQoP9BGZf3_BC3UUdnUJko4",
  authDomain: "unipal-2ace7.firebaseapp.com",
  projectId: "unipal-2ace7",
  storageBucket: "unipal-2ace7.appspot.com",
  messagingSenderId: "324685972171",
  appId: "1:324685972171:web:3a03c4158eb046e88c514e",
  measurementId: "G-TPSP49XM83"
};



// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };


