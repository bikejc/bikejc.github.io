// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "./resources/useful-links.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
