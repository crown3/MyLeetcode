const { resolve } = require('path')
const sidebarArr = require('./generateSidebar')

module.exports = {
  // CI
  dest: 'gh-pages',
  base: '/MyLeetcode/',
  // base setting
  title: "Crown's Leetcode",
  description: 'My Leetcode solutions with js & go',
  serviceWorker: true,
  head: [['link', { rel: 'icon', href: `/favicon.png` }]],
  // Set to true if you are only targeting evergreen browsers
  evergreen: true,
  // custom markdown setting
  markdown: {
    lineNumbers: true,
  },
  chainWebpack: (config, isServer) => {
    // Image Compression
    config.module
      .rule('imgCompression')
      .test(/\.(jpe?g|png|gif|svg)$/)
      .pre()
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
  },
  // custom theme config
  themeConfig: {
    sidebar: sidebarArr,
  },
}
