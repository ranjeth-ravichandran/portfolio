// pages/_app.tsx
import Link from 'next/link';
import Image from "next/image";
import '../styles/global.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div id="main-container">
            <main>
                <Component {...pageProps} />
            </main>

            <footer>
                <p>© 2024 Ranjeth Ravichandran</p>
            </footer>
        </div>
    );
}
