const fs = require('fs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    jqueryJsFromFile: fs.readFileSync('./public/files/jquery.js').toString(),
    drupalJsFromFile: fs.readFileSync('./public/files/drupal.js').toString(),
  },
}

module.exports = nextConfig
