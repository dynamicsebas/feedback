import { useState, useEffect } from 'react';
import firebase from '../firebase';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState(null);

    useEffect(() => {
        return firebase
            .auth()
            .onAuthStateChanged(firebaseUser => {
                if (firebaseUser) {
                    console.log(firebaseUser);
                    setUser(firebaseUser);
                } else {
                    console.log('[no user]');
                    setUser(null);
                }
            });
    }, []);

    const handleGoogleAuth = async () => {
        const googleAuth = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase
                .auth()
                .signInWithPopup(googleAuth);
        } catch (error) {
            setAuthError(error);
        }
    };

    const handleGithubAuth = () => {
        const github = new firebase.auth.GithubAuthProvider();

        firebase
            .auth()
            .signInWithPopup(github)
            .then(user => console.log(user))
            .catch(error => setAuthError(error));
    };

    const handleSignOut = () => {
        firebase.auth().signOut();
    };

    return {
        user,
        authError,
        handleGoogleAuth,
        handleGithubAuth,
        handleSignOut,
    };
};
