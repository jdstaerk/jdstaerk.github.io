module.exports = {
  "globDirectory": "src/",
  "globPatterns": [
    "**/*.{html,}"
  ],
  "swDest": "sw.js",
  
  runtimeCaching: [{
    urlPattern: /\.(?:js|css|html)$/,
    handler: 'staleWhileRevalidate'
  }, {
    urlPattern: /^https:\/\/fonts\.googleapis\.com/,
    handler: 'staleWhileRevalidate'
  }]
};