import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useAuth } from '../lib/hooks/useAuth';

export default function Home() {
    const {
        handleGoogleAuth,
        handleGithubAuth,
        handleSignOut,
        user,
    } = useAuth();
    return (
        <div className={styles.container}>
            <Head>
                <title>Hey</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Hola !</h1>
                <button onClick={handleGoogleAuth}>
                    signIn Google
                </button>
                {/* <button onClick={handleGithubAuth}>
                    signIn Github
                </button> */}
                <button onClick={handleSignOut}>
                    signOut
                </button>
                <p>{user ? user.email : 'no user'}</p>
            </main>

            <footer className={styles.footer}>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by{' '}
                    <img
                        src='/vercel.svg'
                        alt='Vercel Logo'
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    );
}
