import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type"></meta>
                <link href="/misc/favicon.ico" rel="shortcut icon"></link>
                <meta content="false" httpEquiv="ImageToolbar"></meta>
                <link href="/files/nivo-slider.css" rel="stylesheet"></link>
                <link rel="stylesheet" href="/modules/system/system.base.css"></link>
                <link rel="stylesheet" href="/modules/system/system.messages.css"></link>
                <link rel="stylesheet" href="/modules/system/system.theme.css"></link>
                <link rel="stylesheet" href="/modules/book/book.css"></link>
                <link rel="stylesheet" href="/files/calendar_multiday.css"></link>
                <link rel="stylesheet" href="/modules/comment/comment.css"></link>
                <link rel="stylesheet" href="/files/date.css"></link>
                <link rel="stylesheet" href="/files/date_repeat_field.css"></link>
                <link rel="stylesheet" href="/modules/field/theme/field.css"></link>
                <link rel="stylesheet" href="/modules/node/node.css"></link>
                <link rel="stylesheet" href="/modules/search/search.css"></link>
                <link rel="stylesheet" href="/modules/user/user.css"></link>
                <link rel="stylesheet" href="/files/views.css"></link>
                <link rel="stylesheet" href="/files/ckeditor.css"></link>
                <link rel="stylesheet" href="/files/ctools.css"></link>
                <link rel="stylesheet" href="/files/css"></link>
                <link rel="stylesheet" href="/files/css(1)"></link>
                <link rel="stylesheet" href="/files/css(2)"></link>
                <link rel="stylesheet" href="/files/normalize.css"></link>
                <link rel="stylesheet" href="/files/custom.css"></link>
                <link rel="stylesheet" href="/sites/all/libraries/nivo-slider/themes/light/light.css"></link>
                <link rel="stylesheet" href="/files/classic-10_7.css"/>
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
            </Head>
            <body className="html front not-logged-in one-sidebar sidebar-second page-node page-node- node-type-home-page">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
