const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
    outputDir: 'dist',
    lintOnSave: false,
    runtimeCompiler: true,
    productionSourceMap: process.env.NODE_ENV !== 'production',
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions:{
            css: {},
        }
    },
    devServer:{
        host: '0.0.0.0',
        port: '8080',
        https: false,
        proxy: {
            '/api':{
                target: ' http://mock.youzhej.cn/mock/5d824be3ed97a2001f36f7a4',
                ws:false,
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@api': path.resolve(__dirname,'./src/api')
            }
        }
    },
}