// vue.config.js
module.exports = {
    outputDir: 'dist', // 打包的目录
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "后台管理系统";
                return args;
            })
    },
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        overlay: { // 错误信息展示到页面
            warnings: true,
            errors: true
        },
        host: '0.0.0.0',
        port: 8066, // 服务端口
        https: false,
        hotOnly: false,
        // proxy: { // 设置代理
        //   '/api': {
        //     target: host,
        //     changeOrigin: true,
        //     pathRewrite: {
        //       '/api': '/',
        //     }
        //   },
        // },
    },
}