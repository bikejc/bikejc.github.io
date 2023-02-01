const fs = require('fs')

const redirects = {
  // "/events/jersey-city-ward-tour": "/ward-tour",
  "/events/jersey-city-ward-tour/volunteer":  "/ward-tour-2022/volunteer",
  "/events/jersey-city-ward-tour/ward-tour-route":  "/ward-tour-2022/ward-tour-route",
  "/events/jersey-city-ward-tour/finish-line-festival":  "/ward-tour-2022/finish-line-festival",
  "/events/jersey-city-ward-tour/ward-tour-sponsors":  "/ward-tour-2022/ward-tour-sponsors",
  "/events/jersey-city-ward-tour/ward-tour-faqs":  "/ward-tour-2022/ward-tour-faqs",
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    jqueryJsFromFile: fs.readFileSync('./public/files/jquery.js').toString(),
    jqueryExtendJsFromFile: fs.readFileSync('./public/files/jquery-extend-3.4.0.js').toString(),
    jqueryOnceJsFromFile: fs.readFileSync('./public/files/jquery.once.js').toString(),
    jqueryNivoJsFromFile: fs.readFileSync('./public/files/jquery.nivo.slider.js').toString(),
    nivoJsFromFile: fs.readFileSync('./public/files/nivo_slider.js').toString(),
    drupalSettingsJsFromFile: fs.readFileSync('./public/files/drupal-settings.js').toString(),
    drupalJsFromFile: fs.readFileSync('./public/files/drupal.js').toString(),
    foundationJsFromFile: fs.readFileSync('./public/files/foundation.min.js').toString(),
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
