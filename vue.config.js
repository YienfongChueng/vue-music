module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
    outputDir: 'dist',
    lintOnSave: 'error',
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
                target: '',
                ws:false,
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        
    },
}