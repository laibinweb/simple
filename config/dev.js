const merge = require('webpack-merge');
const open = require('opn');
const chalk = require('chalk');
const common = require('./common');
const webpack = require('webpack')
const {plugins} = require('./plugins')
const {distDir, PORT, HOST, ip} = require('./variable.js');

module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map', //开发环境下使用
    // 动态监测并实时更新页面
    devServer: {
        host: HOST,
        historyApiFallback: true,
        // contentBase: distDir,
        overlay: true,
        // 默认端口8080，可不填
        port: PORT,
        // 热更新，无需刷新
        hot: true,
        //是否启用 gzip 压缩
        compress: true, 
        after() {
            open("http://localhost:" + PORT)
                .then(() => {
                    console.log(chalk.cyan(`成功打开链接: http://${ip}:${PORT}` ))
                })
                .catch((err) => {
                    console.log(chalk.red(err))
                })
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //热更新插件
        ...plugins
    ]
});
