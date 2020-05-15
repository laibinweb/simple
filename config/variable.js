const path = require('path')
const ip = require('ip')

const {NODE_ENV, BUNDLE_ANNALYZE} = process.env

module.exports = {
    //入口文件夹
    appPath: path.join(process.cwd(), '/src'),
    //输出路径
    distDir: path.join(process.cwd(), '/dist'),
    //打包模式
    NODE_ENV,
    //打包分析
    BUNDLE_ANNALYZE,
    //是否开发环境
    isDev: NODE_ENV === "development",
    //是否需要打包分析
    isBundleAnalyze: BUNDLE_ANNALYZE === "analyze",
    //是否开启sourceMap， 默认开启
    shouldUseSourceMap: true,
    //端口号
    PORT: process.env.port || 8080,
    //协议
    PROTOCOL: process.env.HTTPS === 'true' ? 'https' : 'http',
    //开发环境IP地址
    HOST: "0.0.0.0",
    //本机IP地址
    ip: ip.address()
}