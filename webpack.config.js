const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buidFolderName = 'dist';

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, buidFolderName)
    },
    plugins: [
        //清空dist目录
        new CleanWebpackPlugin(),
        // 设置html模板生成路径
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            chunks: ['index']
        }),

    ],
    devServer: {
        contentBase: buidFolderName,
        port: 8080,
        hot: true
    },
    // 方便追踪源代码错误
    devtool: 'source-map',
}