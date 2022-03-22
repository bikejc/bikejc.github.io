import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"></meta>
                <link href="/misc/favicon.ico" rel="shortcut icon"></link>
                <meta content="width=device-width, maximum-scale = 1.0" name="viewport"></meta>
                <meta content="false" http-equiv="ImageToolbar"></meta>
                <meta
                    content="Coming soon: step by step instructions on how to get a bike rack installed at your place of business for your bike-riding customers to use and appreciate! For now, please make use of the following form in your request to the city: Bike rack request form"
                    name="description"></meta>
                <meta content="Drupal 7 (https://www.drupal.org)" name="generator"></meta>
                <link href="/resources/bike-racks-businesses" rel="canonical"></link>
                <link href="/resources/bike-racks-businesses" rel="shortlink"></link>
                <meta content="bikejc" property="og:site_name"></meta>
                <meta content="article" property="og:type"></meta>
                <meta content="/resources/bike-racks-businesses" property="og:url"></meta>
                <meta content="Bike Racks for Businesses" property="og:title"></meta>
                <meta
                    content="Coming soon: step by step instructions on how to get a bike rack installed at your place of business for your bike-riding customers to use and appreciate! For now, please make use of the following form in your request to the city: Bike rack request form"
                    property="og:description"></meta>
                <meta content="2016-10-02T16:48:26-04:00" property="og:updated_time"></meta>
                <meta content="summary" name="twitter:card"></meta>
                <meta content="/resources/bike-racks-businesses" name="twitter:url"></meta>
                <meta content="Bike Racks for Businesses" name="twitter:title"></meta>
                <meta
                    content="Coming soon: step by step instructions on how to get a bike rack installed at your place of business for your bike-riding customers to use and appreciate! For now, please make use of the following"
                    name="twitter:description"></meta>
                <meta content="2016-09-13T19:02:48-04:00" property="article:published_time"></meta>
                <meta content="2016-10-02T16:48:26-04:00" property="article:modified_time"></meta>
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
                <meta className="foundation-mq-small"></meta>
                <meta className="foundation-mq-medium"></meta>
                <meta className="foundation-mq-large"></meta>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryJsFromFile || 'console.error("failed to load jquery.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryExtendJsFromFile || 'console.error("failed to load jquery-extend-3.4.0.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryOnceJsFromFile || 'console.error("failed to load jquery-once.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryNivoJsFromFile || 'console.error("failed to load jquery.nivo.slider.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.nivoJsFromFile || 'console.error("failed to load nivo_slider.js from env")' }}></script>
                <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.drupalSettingsJsFromFile || 'console.error("failed to load drupal-settings.js from env")' }}></script>
                {/*<script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.drupalJsFromFile || 'console.error("failed to load drupal.js from env")' }}></script>*/}
            </Head>
            <body className="html front not-logged-in one-sidebar sidebar-second page-node page-node- page-node-45 node-type-home-page">
            <Main />
            <NextScript />
            {/*<Script src="/files/end.js"></Script>*/}
            </body>
        </Html>
    )
}
