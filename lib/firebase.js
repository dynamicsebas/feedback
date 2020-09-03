import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain:
            process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId:
            process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        databaseURL:
            'https://feedbackdemo-fba32.firebaseio.com',
        appId: '1:976114408931:web:79a11cb1b9eb9e4a2ed4d6',
    });
}

export const db = firebase.firestore();
export const usersDB = firebase
    .firestore()
    .collection('users');
export const sitesDB = firebase
    .firestore()
    .collection('sites');

// const firebaseConfig = {
//     apiKey: 'AIzaSyDpqalhRypUfi279eWmSgWGVOyJ0k3tNr8',
//     authDomain: 'feedbackdemo-fba32.firebaseapp.com',
//     databaseURL:
//         'https://feedbackdemo-fba32.firebaseio.com',
//     projectId: 'feedbackdemo-fba32',
//     storageBucket: 'feedbackdemo-fba32.appspot.com',
//     messagingSenderId: '976114408931',
//     appId: '1:976114408931:web:79a11cb1b9eb9e4a2ed4d6',
// };

export default firebase;
