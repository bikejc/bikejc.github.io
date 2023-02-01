import type { AppProps } from 'next/app'

import "../styles/system.base.css"
import "../styles/system.messages.css"
import "../styles/system.theme.css"
import "../styles/book.css"
import "../styles/comment.css"
import "../styles/field.css"
import "../styles/node.css"
import "../styles/search.css"
import "../styles/user.css"

import "../styles/calendar_multiday.css"
import "../styles/ckeditor.css"
import "../styles/classic-10_7.css"
import "../styles/custom.css"
import "../styles/date.css"
import "../styles/date_repeat_field.css"
import "../styles/nivo-slider.css"
import "../styles/nivo-slider-light.css"
import "../styles/normalize.css"
import "../styles/fonts0.css"
import "../styles/fonts1.css"
import "../styles/fonts2.css"
import "../styles/views.css"

import "./resources/useful-links.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
