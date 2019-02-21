module.exports = {
  "globDirectory": "src/",
  "globPatterns": [
    "**/*.{html,}"
  ],
  "swDest": "sw.js",
  
  runtimeCaching: [{
    urlPattern: /\.(?:js|css)$/,
    handler: 'staleWhileRevalidate'
  }, {
    urlPattern: /^https:\/\/fonts\.googleapis\.com/,
    handler: 'staleWhileRevalidate'
  }]
};