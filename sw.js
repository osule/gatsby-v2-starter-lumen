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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-36ccf86df49d22780d94.js"
  },
  {
    "url": "app-d9b1b14b1da21e1bfa9a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c5cb64bc0edabf3c9d7d.js"
  },
  {
    "url": "index.html",
    "revision": "bb7c0a92eeb420ea91fb41f5bcb6c5bd"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4a0c310f140b1a686db945a203cf7e40"
  },
  {
    "url": "2.eac03220ef9302b061c7.css"
  },
  {
    "url": "component---src-pages-index-jsx.69a945a11e23dfafac91.css"
  },
  {
    "url": "component---src-pages-index-jsx-254430456b0d8c23f099.js"
  },
  {
    "url": "1-deeb871e12479340903a.js"
  },
  {
    "url": "0-67c09113654780576fac.js"
  },
  {
    "url": "3-449755f3954bae9e5e9a.js"
  },
  {
    "url": "2-968c68199d9244a7f53f.js"
  },
  {
    "url": "static/d/263/path---index-6a9-eAznpd1jRNhCqkXuS2LuV1gvFSE.json",
    "revision": "6e3ebb45c39fb920eb86192d10d4565e"
  },
  {
    "url": "component---src-pages-404-jsx-5b972697965951a2c5b7.js"
  },
  {
    "url": "static/d/837/path---404-html-516-62a-rWg9X4d393mFznlUzc8yGq3AQ.json",
    "revision": "46344845218c5109b6038845b92f301c"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});