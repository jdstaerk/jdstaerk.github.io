/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "articles/blogs-to-follow-in-2019.html",
    "revision": "303fb28553ca15bd4b219d9ef7f8c75b"
  },
  {
    "url": "articles/how-this-website-is-built.html",
    "revision": "5a13fec4fc1b169699891788f5200f92"
  },
  {
    "url": "articles/robin-hood-strategy.html",
    "revision": "9b63643f50f3fef3f1ff3364b4f486da"
  },
  {
    "url": "articles/the-faang-race.html",
    "revision": "44253e2fbde64a41913753a17e655e56"
  },
  {
    "url": "index.html",
    "revision": "6f10c2830b4dc323fccab1c04f419145"
  },
  {
    "url": "pages/datenschutz.html",
    "revision": "010c6053a6518d3ea2b7d9f8f97fa94d"
  },
  {
    "url": "pages/impressum.html",
    "revision": "149cb13a6dbb4f9f54b2918b5924ec9f"
  },
  {
    "url": "pages/newsletter.html",
    "revision": "b73638823195349a9cf4958415351374"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:js|css|html)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.staleWhileRevalidate(), 'GET');
