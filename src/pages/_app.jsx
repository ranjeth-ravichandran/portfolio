// pages/_app.tsx
import React from 'react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <main>
            <link rel="icon" href="./images/favicon.png" />
            <title>Portfolio</title>
            <Component {...pageProps} />
        </main>
    );
}
