const fs = require('fs')

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
}

module.exports = nextConfig
