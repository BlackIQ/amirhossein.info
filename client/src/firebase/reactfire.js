// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    getAuth,
    signOut,
    signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBykG9rAT7lZ3kxcrsDjob6zOtRupUX1_Y",
    authDomain: "amirhossein-info.firebaseapp.com",
    projectId: "amirhossein-info",
    storageBucket: "amirhossein-info.appspot.com",
    messagingSenderId: "121988486564",
    appId: "1:121988486564:web:657afe28039b5d605d1d31",
    measurementId: "G-18LFB4FXZ7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const googleAuth = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        alert(error.message);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        alert(error.message);
    }
}

const logout = () => {
    try {
        signOut(auth);
    } catch (error) {
        alert(error.message);
    }
}

export {
    googleAuth,
    logout,
    login,
    auth
}