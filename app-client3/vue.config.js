module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100, // 1rem等于多少px
          })
        ]
      }
    }
  },
  lintOnSave: false, // 关闭eslint语法检查
  devServer: {
    proxy: {
      '/topic': {
        target: 'https://m.you.163.com/', // 目标地址
        changeOrigin: true // 是否进行跨域
        // pathRewrite: {
        //   '^/api': '', // rewrite path
        // }
      },
      '/xhr': {
        target: 'https://m.you.163.com/', // 目标地址
        changeOrigin: true // 是否进行跨域
        // pathRewrite: {
        //   '^/api': '', // rewrite path
        // }
      },
      // 处理/api开头地址
      '': {
        target: 'http://localhost:9527/', // 目标地址
        changeOrigin: true // 是否进行跨域
        // pathRewrite: {
        //   '^/api': '', // rewrite path
        // }
      },

    }
  }
}