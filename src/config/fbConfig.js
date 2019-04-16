import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCns6BzmPdTEQ9ddql_3TmVZa1YJKKDfD0",
    authDomain: "kevin-projectmanager.firebaseapp.com",
    databaseURL: "https://kevin-projectmanager.firebaseio.com",
    projectId: "kevin-projectmanager",
    storageBucket: "kevin-projectmanager.appspot.com",
    messagingSenderId: "1074247434093"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;

