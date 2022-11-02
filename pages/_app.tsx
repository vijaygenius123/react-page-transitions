import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Navbar} from "../components/Navbar";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className={"py-16 px-12 lg:px-48"}>
            <Navbar/>
            <Component {...pageProps} />
        </div>
    )
}
