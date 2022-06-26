import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeslAojGddL4jDFaoDEQKBpKQC25c-9EE",
    authDomain: "todoapp-9bd43.firebaseapp.com",
    projectId: "todoapp-9bd43",
    storageBucket: "todoapp-9bd43.appspot.com",
    messagingSenderId: "243933857578",
    appId: "1:243933857578:web:fd1849628596edda9c4053",
  };
  // Initialize Firebase
  export const App = initializeApp(firebaseConfig);
  export const Auth = getAuth();
  export const DB = getFirestore(App);