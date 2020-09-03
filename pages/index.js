import Head from 'next/head';
import { useContextAuth } from '../lib/auth';

export default function Home() {
    const {
        handleGoogleAuth,
        handleGithubAuth,
        handleAnomAuth,
        handleSignOut,
        user,
    } = useContextAuth();

    return (
        <div>
            <Head>
                <title>Hey</title>
            </Head>
            <main>
                <h1>Hola !</h1>
                <button onClick={handleGoogleAuth}>
                    signIn Google
                </button>
                <button onClick={handleGithubAuth}>
                    signIn Github
                </button>
                <button onClick={handleAnomAuth}>
                    signIn Anom
                </button>
                <button onClick={handleSignOut}>
                    signOut
                </button>
                {user && user.isAnonymous ? (
                    'user is Anom '
                ) : (
                    <p>
                        {user
                            ? 'user ID: ' + user.uid
                            : 'no user'}
                    </p>
                )}
            </main>
        </div>
    );
}
