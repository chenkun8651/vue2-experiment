module.exports = {
  // 生成环境
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 10501,
  },
  // Webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
}
