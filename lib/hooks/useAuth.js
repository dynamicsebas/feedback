import { useState, useEffect } from 'react';
import firebase from '../firebase';
import cookie from 'js-cookie';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState(null);

    useEffect(() => {
        return firebase
            .auth()
            .onAuthStateChanged(firebaseUser => {
                if (firebaseUser) {
                    setUser(firebaseUser);
                } else {
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

    const handleGithubAuth = async () => {
        const provider = new firebase.auth.GithubAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            setAuthError(error);
        }
    };

    const handleAnomAuth = async () => {
        try {
            await firebase.auth().signInAnonymously();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = () => {
        firebase.auth().signOut();
    };

    return {
        user,
        authError,
        handleGoogleAuth,
        handleSignOut,
        handleGithubAuth,
        handleAnomAuth,
    };
};
