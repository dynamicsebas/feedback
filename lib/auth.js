import React, {
    useState,
    useEffect,
    useContext,
    createContext,
} from 'react';

import firebase from './firebase';

const authContext = createContext();

// export function AuthProvider({ children }) {
//     const auth = useProvideAuth();
//     return (
//         <authContext.Provider value={auth}>
//             {children}
//         </authContext.Provider>
//     );
// }

// export const useAuth = () => {
//     return useContext(authContext);
// };

// function useProvideAuth() {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const handleUser = async rawUser => {
//         if (rawUser) {
//             const user = await formatUser(rawUser);
//             const { token, ...userWithoutToken } = user;

//             createUser(user.uid, userWithoutToken);
//             setUser(user);

//             cookie.set('fast-feedback-auth', true, {
//                 expires: 1,
//             });

//             setLoading(false);
//             return user;
//         } else {
//             setUser(false);
//             cookie.remove('fast-feedback-auth');

//             setLoading(false);
//             return false;
//         }
//     };

//     const signinWithEmail = (email, password) => {
//         setLoading(true);
//         return firebase
//             .auth()
//             .signInWithEmailAndPassword(email, password)
//             .then(response => {
//                 handleUser(response.user);
//                 Router.push('/sites');
//             });
//     };

//     const signinWithGitHub = redirect => {
//         setLoading(true);
//         return firebase
//             .auth()
//             .signInWithPopup(
//                 new firebase.auth.GithubAuthProvider()
//             )
//             .then(response => {
//                 handleUser(response.user);

//                 if (redirect) {
//                     Router.push(redirect);
//                 }
//             });
//     };

//     const signinWithGoogle = redirect => {
//         setLoading(true);
//         return firebase
//             .auth()
//             .signInWithPopup(
//                 new firebase.auth.GoogleAuthProvider()
//             )
//             .then(response => {
//                 handleUser(response.user);

//                 if (redirect) {
//                     Router.push(redirect);
//                 }
//             });
//     };

//     const signout = () => {
//         Router.push('/');

//         return firebase
//             .auth()
//             .signOut()
//             .then(() => handleUser(false));
//     };

//     useEffect(() => {
//         const unsubscribe = firebase
//             .auth()
//             .onAuthStateChanged(handleUser);

//         return () => unsubscribe();
//     }, []);

//     return {
//         user,
//         loading,
//         signinWithEmail,
//         signinWithGitHub,
//         signinWithGoogle,
//         signout,
//     };
// }
