import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjKKpAzXkzUpY2OejaWnMuaPSxUQRi3U8",
  authDomain: "login-513da.firebaseapp.com",
  projectId: "login-513da",
  storageBucket: "login-513da.firebasestorage.app",
  messagingSenderId: "665194353052",
  appId: "1:665194353052:web:36ac1a658211bc899cb859"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);