import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type"></meta>
                <link href="/favicon.ico" rel="shortcut icon"></link>
                <meta content="false" httpEquiv="ImageToolbar"></meta>
                <meta className="foundation-mq-small"></meta>
                <meta className="foundation-mq-medium"></meta>
                <meta className="foundation-mq-large"></meta>

                {/* Apparently this is a good way to inject arbitrary 3rd-party JS in next.js, cf. https://stackoverflow.com/a/65349130/544236 */}
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryJsFromFile || 'console.error("failed to load jquery.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryExtendJsFromFile || 'console.error("failed to load jquery-extend-3.4.0.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryOnceJsFromFile || 'console.error("failed to load jquery-once.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryNivoJsFromFile || 'console.error("failed to load jquery.nivo.slider.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.nivoJsFromFile || 'console.error("failed to load nivo_slider.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.drupalSettingsJsFromFile || 'console.error("failed to load drupal-settings.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.foundationJsFromFile || 'console.error("failed to load foundation.min.js from env")' }}></script>
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </Head>
            <body className="html front not-logged-in one-sidebar sidebar-second page-node page-node- node-type-home-page">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
