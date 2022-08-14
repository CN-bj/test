const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //打包时自动去除map文件
  transpileDependencies: true,
  //忽略所有 node_modules 中的文件
  productionSourceMap: true,
  /* 关闭 eslint 语法检查 */
  lintOnSave: true,
  /* 代理跨域 */
  devServer: {
    proxy: {
      '/api': {
        //目标服务器地址，就是从哪台服务器可以获取到数据就写谁
        target: 'https://www.fastmock.site/mock/e97cebd812d30aea48c58e63dae2759b/api',
        /* 'api/':{ }就是告诉node，接口只是要'/api'开头才用代理，
        所以api/xx最后代理路径就是http://xxx.xx.com/api/xx，
        Network里查看到的请求路径是http://localhost:3000/api/xx。
        可是正确的接口路径并没有/api，所以就需要pathWrite修改代理路径，
        用'^api/':''，把'/api'去掉，这样既能正确标识，又能在请求接口时去掉'api'。*/
        pathRewrite: { '^/api': '' },
      }
    },
    //开启mock数据
    //after:require('./mock/mock-server'),
  }
})
