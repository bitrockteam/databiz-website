module.exports = {
  title: 'Databiz Group',
  description: 'Starting January 2021, Databiz Group has become Fortitude Group. We didn’t change just our naming and logo: we started a new phase of our story.  Discover our new brand-identity.',

  head: [
    ['script', {}, `var _iub = _iub || [];
    _iub.csConfiguration = {"whitelabel":false,"lang":"en","siteId":1410308,"cookiePolicyId":15812422, "banner":{ "slideDown":false,"applyStyles":false,"position":"bottom" }};
    `],
    ['script', { src: '//cdn.iubenda.com/cs/iubenda_cs.js'}],
    ['link', { rel: 'icon', href: '/logos/dbz.png' }],
    ['link', { rel: 'manifest', href: '/app.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#0072bc' }],
    ['meta', { name: 'og:title', content: 'Databiz Group'}],
    ['meta', { name: 'og:image', href: '/img/meta-image.jpg'}],
    ['meta', { name: 'og:description', content: 'Starting January 2021, Databiz Group has become Fortitude Group. We didn’t change just our naming and logo: we started a new phase of our story.  Discover our new brand-identityStarting January 2021, Databiz Group has become Fortitude Group. We didn’t change just our naming and logo: we started a new phase of our story.  Discover our new brand-identity.'}]
  ],

  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-127386306-1'
    }],
    ['@vuepress/pwa', {
      'serviceWorker': true,
      // 'popupComponent': 'UpdatePopup',
      'updatePopup': true,
    }]
  ]
}