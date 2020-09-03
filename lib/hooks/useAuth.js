import { useState, useEffect } from 'react';
import firebase from '../firebase';
import cookie from 'js-cookie';
import { formatUser } from '../util/formatUser';
import { createUser } from '../db';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState(null);

    const handleUser = async rawUser => {
        if (rawUser) {
            const user = await formatUser(rawUser);
            const { token, ...userWithoutToken } = user;

            createUser(user.uid, userWithoutToken);
            setUser(user);

            cookie.set('fast-feedback-auth', true, {
                expires: 1,
            });

            return user;
        } else {
            setUser(false);
            cookie.remove('fast-feedback-auth');

            return false;
        }
    };

    const handleGoogleAuth = () => {
        return firebase
            .auth()
            .signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            .then(response => {
                handleUser(response.user);
            });
    };

    const handleGithubAuth = () => {
        return firebase
            .auth()
            .signInWithPopup(
                new firebase.auth.GithubAuthProvider()
            )
            .then(response => {
                handleUser(response.user);
            });
    };

    const handleAnomAuth = async () => {
        try {
            await firebase.auth().signInAnonymously();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => handleUser(false));
    };

    useEffect(() => {
        return firebase
            .auth()
            .onAuthStateChanged(handleUser);
    }, []);

    return {
        user,
        authError,
        handleGoogleAuth,
        handleSignOut,
        handleGithubAuth,
        handleAnomAuth,
    };
};
