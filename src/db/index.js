import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyD496o83DGtb1XMdEO-z1fzR8vyOsy6KOI",
  authDomain: "store-ece73.firebaseapp.com",
  projectId: "store-ece73",
  storageBucket: "store-ece73.appspot.com",
  messagingSenderId: "866141875666",

});

export function getFirebase() {
    if (!firebase.apps.length) {
        return app;
    }else {
        return firebase.app(); 
    }
    
}

export function getFirestore() {
    return firebase.firestore(app);
}

