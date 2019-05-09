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
    "revision": "4b816c87af65d0f522b873629fe76000"
  },
  {
    "url": "about/index.html",
    "revision": "80263622f75512f1fb6ba62e66ab9465"
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
    "url": "assets/css/0.styles.5b656ff1.css",
    "revision": "53bce801510fd27b495f392043896fa8"
  },
  {
    "url": "assets/js/10.8ea8cb0f.js",
    "revision": "1e1a5f0d183564e3d7f8e0b35020868f"
  },
  {
    "url": "assets/js/11.56274518.js",
    "revision": "1fc863ad263b9f5ffb0fcbaf3c59ae5f"
  },
  {
    "url": "assets/js/12.8af6bdf9.js",
    "revision": "41035ccd8700b0e45181eca9058be2b1"
  },
  {
    "url": "assets/js/13.ce097895.js",
    "revision": "4f84300e77ad0e8470954a4befd52447"
  },
  {
    "url": "assets/js/14.42ff9adc.js",
    "revision": "2af00229b7fbed726a9168a99ea5743b"
  },
  {
    "url": "assets/js/15.c39072e6.js",
    "revision": "8219fc9f31c421a24646d185984680e5"
  },
  {
    "url": "assets/js/16.a725a483.js",
    "revision": "8cb92fc126783a320a2b078bd27d1e00"
  },
  {
    "url": "assets/js/17.7fe89ac4.js",
    "revision": "f3b27bb74e44a7debc77d2f889f5ad71"
  },
  {
    "url": "assets/js/6.23ec5138.js",
    "revision": "a1de577e5411409dfbcb04efe698635a"
  },
  {
    "url": "assets/js/7.55549720.js",
    "revision": "07a1c7f5080bfe5d825d2638e292f279"
  },
  {
    "url": "assets/js/8.86adf7d7.js",
    "revision": "fed7582651fafea1a089f97c09c3981d"
  },
  {
    "url": "assets/js/9.9e5937a4.js",
    "revision": "6ccd7b1d847e5ac3749391dbeae32884"
  },
  {
    "url": "assets/js/app.3f178a56.js",
    "revision": "43f09fce7e73ffc5a6e4bfce9921dbc8"
  },
  {
    "url": "assets/js/dom.aec5bb58.js",
    "revision": "be334486f81a1b6300a841af6a1a1343"
  },
  {
    "url": "assets/js/timeline.16ce8a6f.js",
    "revision": "53b8ace10cf7978d56b9837bbad3eecd"
  },
  {
    "url": "assets/js/vendors~lightslider.083b935e.js",
    "revision": "a77f69f3f5606c003e5dc5648d0ff49e"
  },
  {
    "url": "assets/js/vendors~particles.153f64b3.js",
    "revision": "7a8c5c731d431ca91ff68305e7a9bcb0"
  },
  {
    "url": "consuntivazione/index.html",
    "revision": "e682ac825f65864c79ddf719cb2b7e2c"
  },
  {
    "url": "group/bitrock/index.html",
    "revision": "be12a3228fd708057cf1cddd7adc9cf0"
  },
  {
    "url": "group/radicalbit/index.html",
    "revision": "6fafb2fa2e09554b9a05f49d09d8fb80"
  },
  {
    "url": "hero/index.html",
    "revision": "b1090a4a4501c59cc86e4f73b2ed3b8d"
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
    "url": "img/img-about.jpg",
    "revision": "c127c719393181817346ea4bd58e125a"
  },
  {
    "url": "img/img-philosophy.jpg",
    "revision": "0f8227a70bc3dff7868e912af6127917"
  },
  {
    "url": "index.html",
    "revision": "901099314732c095f9846c1523527084"
  },
  {
    "url": "logos/BitrockLogo.svg",
    "revision": "fee4520569431f74cefa9b455dd96b12"
  },
  {
    "url": "logos/DatabizLogo.svg",
    "revision": "52a450070c4d29e9cfae6e729eaa72e7"
  },
  {
    "url": "logos/DatabizLogo.white.svg",
    "revision": "acf05d09eee40606cbf990a918c13f6e"
  },
  {
    "url": "logos/dbz.png",
    "revision": "afdaae51a59c0bce73c8a9a7f73f084a"
  },
  {
    "url": "logos/HeroBubbles.svg",
    "revision": "a19f5918aee9d112ac5edd12035d1384"
  },
  {
    "url": "logos/RadicalbitLogo.svg",
    "revision": "1a4a167ffe8dc137c7e3919f5cf89dac"
  },
  {
    "url": "partners/logo-cloudera.png",
    "revision": "cca9dbd0f6d7af88e0fb556a6b79f4a9"
  },
  {
    "url": "partners/logo-confluent.png",
    "revision": "35dbf77e3faaa3b8d3d256f63ae951ad"
  },
  {
    "url": "partners/logo-datastax.png",
    "revision": "c476740446029838026df2ddd611ca35"
  },
  {
    "url": "partners/logo-lightbend.png",
    "revision": "9926086c4b4db3d2e924c627c849fcaf"
  },
  {
    "url": "partners/logo-mesosphere.png",
    "revision": "37c7188f135382641bd44d9ff1f402a2"
  },
  {
    "url": "partners/logo-webtrekk.png",
    "revision": "d1691a3a2ac38c5c3cc109e7ceea2dbb"
  },
  {
    "url": "philosophy/index.html",
    "revision": "afde82b4fb1b2b6b13614408c21e9e15"
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
