/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath:
    process.env.DEPLOY_ENV === 'GH_PAGES' ? '/pihole-admin-pro/' : '/',

  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          reactivityTransform: true
        }
      })
  },

  // Remove moment.js from chart.js
  configureWebpack: (config) => {
    return {
      plugins: [
        require('unplugin-vue-components/webpack')({
          dts: 'src/components.d.ts',
          directoryAsNamespace: false
        })
      ],
      externals: {
        moment: 'moment'
      }
    }
  }
}
