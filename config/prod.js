const merge = require('webpack-merge')
const common = require('./common')
const V = require('./variable')
const {plugins} = require('./plugins')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    // 方便追踪源代码错误
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css' //个人习惯将css文件放在单独目录下
        }),
        // CSS压缩
        new OptimizeCssPlugin(),
        ...plugins
    ]
});
