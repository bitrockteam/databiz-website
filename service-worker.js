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
    "url": "404.html",
    "revision": "25a09a649522cdb05256c0d2f49962af"
  },
  {
    "url": "apriporta/index.html",
    "revision": "c93200ee890e10211d06bac5666e12ca"
  },
  {
    "url": "apriporta/token/index.html",
    "revision": "620b590b3f0fb5b07b0267cb181fc52a"
  },
  {
    "url": "assets/css/0.styles.fd0b5982.css",
    "revision": "69685af1c26c1fdfd46e93d0964f04d1"
  },
  {
    "url": "assets/js/3.9e037c4f.js",
    "revision": "dbfb3cbb5bb479275afe0dc85d91ed96"
  },
  {
    "url": "assets/js/4.0618e993.js",
    "revision": "986b17e307b1c620c9abaae93103fd27"
  },
  {
    "url": "assets/js/5.506dbd5d.js",
    "revision": "e679db5fc0c7f7d253326292fb30004d"
  },
  {
    "url": "assets/js/6.e38afdb8.js",
    "revision": "81763826de17e7dd5492591f3dbe7744"
  },
  {
    "url": "assets/js/7.6d3f3d07.js",
    "revision": "5058fadc80980cc3061787493de9c070"
  },
  {
    "url": "assets/js/app.84eab42f.js",
    "revision": "c811cf5665a5b5384eb37f2a20aa10d5"
  },
  {
    "url": "assets/js/vendors~particles.eab54928.js",
    "revision": "588554ca86666d22b4c28c8bb823c684"
  },
  {
    "url": "consuntivazione/index.html",
    "revision": "e682ac825f65864c79ddf719cb2b7e2c"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "b73e5344e6dd9b20e6100a5d729fedf4"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "1b747b846b97ee4827310eb103c903e8"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "8e1919b0acb804819d9a5a57a83e69d9"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "3de028c1080fb1620b2b07dbedbd11b0"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "cb010fb347ed16a75c5faf71073198fc"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "58093ee7ad0b551c7f85eb004d32f0be"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "5be012e43bffec85e477935d146114ab"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "bbaeaae8fdf7025d0b9b917675a0ded7"
  },
  {
    "url": "img/meta-image.jpg",
    "revision": "236234a1c5a0aab15c7d1771367d5fcf"
  },
  {
    "url": "img/wehaveevolved-2x.jpg",
    "revision": "6deb69cba3e7463f1872673a15e3da8e"
  },
  {
    "url": "img/wehaveevolved.jpg",
    "revision": "a41ab941d1274276c34e9ac6021a994a"
  },
  {
    "url": "index.html",
    "revision": "0e48d5dd4eddeade7e42285c084c3d88"
  },
  {
    "url": "logos/DatabizLogo.svg",
    "revision": "52a450070c4d29e9cfae6e729eaa72e7"
  },
  {
    "url": "logos/dbz.png",
    "revision": "afdaae51a59c0bce73c8a9a7f73f084a"
  },
  {
    "url": "logos/fortitude-logo.png",
    "revision": "8db2cd5bf671b7631cb298c02de7a5b5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
