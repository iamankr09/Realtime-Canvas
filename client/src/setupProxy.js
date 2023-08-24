const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://realtime-canvas-application.netlify.app',
            changeOrigin: true
        })
    )
}