// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "web-build-a4a4a.firebaseapp.com",
  projectId: "web-build-a4a4a",
  storageBucket: "web-build-a4a4a.firebasestorage.app",
  messagingSenderId: "553259785678",
  appId: "1:553259785678:web:45a4dc9379627982649f9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth, provider};