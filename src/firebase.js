import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbdDMygJXyrMB4NWkSjj30NKVZcqB-Huk",
    authDomain: "ecommerce-c7f25.firebaseapp.com",
    projectId: "ecommerce-c7f25",
    storageBucket: "ecommerce-c7f25.appspot.com",
    messagingSenderId: "57684612284",
    appId: "1:57684612284:web:7cea2fc3be7b8d46c9ecb9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 