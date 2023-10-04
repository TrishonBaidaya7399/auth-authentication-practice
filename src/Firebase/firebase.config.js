import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBKC4L9mxLKMKbxip7vpF43yAyfJ61RokE",
  authDomain: "auth-authentication-3eed7.firebaseapp.com",
  projectId: "auth-authentication-3eed7",
  storageBucket: "auth-authentication-3eed7.appspot.com",
  messagingSenderId: "211035097913",
  appId: "1:211035097913:web:e20843737599e7a416b6e8"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;