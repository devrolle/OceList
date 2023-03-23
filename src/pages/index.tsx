import Head from 'next/head';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';

export default function Home() {
    const [file, setFile] = useState<any>();
    const { currentUser, githubData, currentUserData, logout } = useAuth();

    useEffect(() => {
        console.log('Current User: ', currentUser);
        console.log('Github Data: ', githubData);
        console.log('Current User Database Data: ', currentUserData);
    }, [currentUser, githubData, currentUserData]);

    return (
        <>
            <Head>
                <title>Landing</title>
                <meta name="description" content="Landing Page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Landing Page</h1>

                <div>
                    <a href={`/profile/${currentUserData?.login}`}>Profile</a>
                </div>
                <button onClick={logout}>Logout</button>
            </main>
        </>
    );
}
