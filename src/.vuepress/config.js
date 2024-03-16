const { description } = require('../../package')

module.exports = {
/**
  dest: '../../../www/expertmultimedia.com/usingpython',
  */
  dest: '../../../usingpython',
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Expert Multimedia - Using Python - Official Page',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Python 2 (+Panda3D)',
        link: '/py2/',  // formerly config
      },
      {
        text: 'Python 3',
        link: '/py3/',  // formerly guide
      },
    ],
    sidebar: {
      '/py3/': [ // formerly guide
        {
          title: 'Python 3',
          collapsable: false,
          children: [
            '',
            'installing-kivy',  // formerly using-vue
            'kivy-pycharm',
            'pygame-geany',
            'tutorials',
          ]
        }
      ],
      '/py2/': [ // copy, formerly not here
        {
          title: 'Python 2',
          collapsable: false,
          children: [
            '',
            'tutorials',
            'installing',
            'installing-pygame',
            'installing-wxpython',
            'installing-panda3d',
            'distributing',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
