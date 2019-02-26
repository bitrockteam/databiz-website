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
    "revision": "528fa6cf061c4a009555ba261a128c9a"
  },
  {
    "url": "about/index.html",
    "revision": "a4837ece369404b92bdf780bf56b481d"
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
    "url": "assets/css/0.styles.68accf88.css",
    "revision": "143b32b7b830d9b98ebb45a9be2d1f45"
  },
  {
    "url": "assets/js/10.2f52e0a7.js",
    "revision": "27461f0642b33036569737fefc385082"
  },
  {
    "url": "assets/js/11.91876dd6.js",
    "revision": "e1a6206d8a87c898e79f06d1afc47c04"
  },
  {
    "url": "assets/js/12.19695535.js",
    "revision": "8c0a2e13e9ceead0f72dce6f589cbe70"
  },
  {
    "url": "assets/js/13.dc26059c.js",
    "revision": "0671eec11f917fd2a9db188a8645016f"
  },
  {
    "url": "assets/js/14.c498c49a.js",
    "revision": "0f5612ab3b410c16fe3470c48276bdb4"
  },
  {
    "url": "assets/js/15.8473e244.js",
    "revision": "104bf9349e23b53a8efb7ad8562748e1"
  },
  {
    "url": "assets/js/16.020a937f.js",
    "revision": "2ec5c74672926adc40dcf22903e01ab9"
  },
  {
    "url": "assets/js/17.76acce13.js",
    "revision": "2a174d15cc10b7d6c2bd0c19c4abaea6"
  },
  {
    "url": "assets/js/6.f0cc6c61.js",
    "revision": "7515fdb1616a453e6dbb960e0dd5fbd6"
  },
  {
    "url": "assets/js/7.635d09eb.js",
    "revision": "26a24d0b8b9225c425eba52eb324adb9"
  },
  {
    "url": "assets/js/8.4c1cae00.js",
    "revision": "106daf1eebe4cf038cb92b65613d50fa"
  },
  {
    "url": "assets/js/9.2f34a475.js",
    "revision": "80d3337c9137cb089e13a67de9bf751f"
  },
  {
    "url": "assets/js/app.da2d8b89.js",
    "revision": "e1d0a74ae2b8d08d78e7840b248bd2cd"
  },
  {
    "url": "assets/js/dom.fdd9f1ba.js",
    "revision": "dc568a9c76a9d573f1abefe7281bf493"
  },
  {
    "url": "assets/js/timeline.492696bb.js",
    "revision": "63d1306c80c24e905bd5f77f42fc9073"
  },
  {
    "url": "assets/js/vendors~lightslider.434a4acd.js",
    "revision": "06bf2666a57cfb8687f30a08237fe4b8"
  },
  {
    "url": "assets/js/vendors~particles.7b11cf4b.js",
    "revision": "0380d3871843dbdb32a18fb1b0c23f92"
  },
  {
    "url": "consuntivazione/index.html",
    "revision": "e682ac825f65864c79ddf719cb2b7e2c"
  },
  {
    "url": "group/bitrock/index.html",
    "revision": "faded0faf6153edac564f98274fd76c4"
  },
  {
    "url": "group/radicalbit/index.html",
    "revision": "1f8737155cdec07fc5da8c91be865a9b"
  },
  {
    "url": "hero/index.html",
    "revision": "7d33887fb211e5149e4911b47e353f8f"
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
    "revision": "4167affdd3f253a39d2c53517553e5f3"
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
    "revision": "5adee307e74d2df981fe1332770c70f9"
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
