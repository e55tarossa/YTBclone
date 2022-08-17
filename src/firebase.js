// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPKfoUe2D5muIHPrEv8U-8K5DWIo-oJAM",
  authDomain: "video-bb422.firebaseapp.com",
  projectId: "video-bb422",
  storageBucket: "video-bb422.appspot.com",
  messagingSenderId: "74372025544",
  appId: "1:74372025544:web:7bf678e8c7db15572429fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;