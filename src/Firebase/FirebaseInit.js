import firebase from "firebase";


export const app = firebase.initializeApp({
    apiKey: "AIzaSyBymc1ZQ08dlr1HgZG-GfWwFpJ1PAXFFjI",
    authDomain: "nexvent-cc6d5.firebaseapp.com",
    projectId: "nexvent-cc6d5",
    storageBucket: "nexvent-cc6d5.appspot.com",
    messagingSenderId: "632194265206",
    appId: "1:632194265206:web:e0244f90ff22d413b3af57",
    measurementId: "G-HYVPYL1MX6",
});

export const auth = app.auth();

export const firestore = app.firestore();

export const storage = app.storage();

export const increment = firebase.firestore.FieldValue.increment(1);