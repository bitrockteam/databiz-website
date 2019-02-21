module.exports = {
  title: 'Databiz Group',
  description: 'Technological Innovation Holding Group.',

  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Group', link: '/group' },
      { text: 'Philosophy', link: '/philosophy' },
      { text: 'Partners', link: '/partners' },
      { text: 'Contact', link: '/contact/' },
    ]
  },

  head: [
    ['link', { rel: 'icon', href: '/logos/dbz.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0072bc' }]
  ],

  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-127386306-1'
    }],
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      'serviceWorker': true,
      // 'popupComponent': 'UpdatePopup',
      'updatePopup': true,
    }]
  ]
}