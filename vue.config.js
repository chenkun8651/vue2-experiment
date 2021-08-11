module.exports = {
  // 基本路径
  publicPath: "./",
  // html输入路径
  indexPath: "index.html",
  // 输出目录
  outputDir: "dist",
  // 静态资源目录
  assetsDir: "",
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
