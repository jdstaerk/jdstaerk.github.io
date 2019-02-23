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
    "revision": "26ef5d8400c91e5c5c9d8751c122dc02"
  },
  {
    "url": "articles/how-this-website-is-built.html",
    "revision": "902f9a19a481a2bd802b8c6487933a38"
  },
  {
    "url": "articles/the-faang-race.html",
    "revision": "d9a9d7034840f0a67b507ef36fd0d187"
  },
  {
    "url": "index.html",
    "revision": "ed30a675549ddd942fe5201e0615b1ce"
  },
  {
    "url": "pages/datenschutz.html",
    "revision": "25a7141c4cb2881289bce29d3ecc8079"
  },
  {
    "url": "pages/impressum.html",
    "revision": "358c3f452232528f03a4147d47293e9e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:js|css|html)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.staleWhileRevalidate(), 'GET');
