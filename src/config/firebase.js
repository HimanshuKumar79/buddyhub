import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth,FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOtVTuvPdbed0tivXikQt4WNmSe4tXDp4",
  authDomain: "buddyhub-e2b1b.firebaseapp.com",
  projectId: "buddyhub-e2b1b",
  storageBucket: "buddyhub-e2b1b.appspot.com",
  messagingSenderId: "838243591250",
  appId: "1:838243591250:web:f28956e20cbc0bca82ab8b",
  measurementId: "G-C7W7SJ759B",
};

const app = new initializeApp(firebaseConfig);
export const auth = new getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

