

const devServer = {
    // host: 'localhost',
    host: "127.0.0.1",
    port: 8083, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/
    hotOnly: true, // 热更新
    //proxy: 'http://localhost:8000',   // 配置跨域处理,只有一个代理
    proxy: {
        '/login': {
            target: 'http://127.0.0.1:8000',   // 需要请求的地址
            changeOrigin: true,  // 是否跨域
            pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://127.0.0.1:8000/login'
                '^/login': '/login'
            }
        }

    },
    historyApiFallback: {
        rewrites: [
            { from: /\/index/, to: '/index.html' },
            { from: /\/toLogin/, to: '/login.html' },
        ]
    }
}
module.exports = devServer;