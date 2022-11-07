import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Navbar} from "../components/Navbar";
import {AnimatePresence} from "framer-motion";

export default function App({Component, pageProps, router}: AppProps) {
    return (
        <div className={"py-16 px-12 lg:px-48"}>
            <Navbar/>
            <AnimatePresence initial={false}>
                <Component key={router.pathname} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}
