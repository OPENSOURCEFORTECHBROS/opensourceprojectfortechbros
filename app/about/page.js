import Head from 'next/head';
import Header from '../components/navbar';

export default function Home() {
    return (
        <div>
            <Head>
                <title>SA TECH COMMUNITY</title>
            </Head>
            <Header />
            <main style={{ textAlign: 'center', padding: '20px', paddingTop: '120px' }}>
                <h1>Welcome to mission page</h1>
            </main>
        </div>
    );
}