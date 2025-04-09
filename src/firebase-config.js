// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANXlUk4C3ZjFRVuIsPDCVlOy94OEoi20Y",
  authDomain: "simple-tourism-916aa.firebaseapp.com",
  projectId: "simple-tourism-916aa",
  storageBucket: "simple-tourism-916aa.appspot.com",
  messagingSenderId: "770227613632",
  appId: "1:770227613632:web:c161bad99f694834282225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth