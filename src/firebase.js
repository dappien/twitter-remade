import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDY3ILIo_ZDwLavwb_TDEAMeDK79TfQtEA",
    authDomain: "twitter-remade.firebaseapp.com",
    projectId: "twitter-remade",
    storageBucket: "twitter-remade.appspot.com",
    messagingSenderId: "364758758422",
    appId: "1:364758758422:web:6cd961228e96a9e14f7137"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage=firebase.storage();
const db = firebaseApp.firestore();

export { storage,auth,db };