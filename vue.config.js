const webpack = require('webpack')
module.exports = {
  lintOnSave: false, // 禁用eslint
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ]
  }
}
