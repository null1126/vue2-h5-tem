module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // chainWebpack: config => {
    //     config.module
    //         .rule('less')
    //         .test(/\.less$/)
    //         .oneOf('vue')
    //         .resourceQuery(/\?vue/)
    //         .use('px2rem')
    //         .loader('px2rem-loader')
    //         .options({
    //           remUnit: 100  // 1rem = 100px
    //         })
    // },
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              require('postcss-pxtorem')({ // 把px单位换算成rem单位
                rootValue: 100, // vant官方使用的是37.5
                selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
                propList: ['*']
              })
            ]
          }
        }
    },
}