const path = require('path')
const fs = require('fs')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const glob = require('glob')
const {appPath, distDir} = require('./variable')

const plugins = [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery'
    }),
    new ProgressBarPlugin(),
    new CopyWebpackPlugin([
        {
            from: path.resolve(appPath, 'libs/js/*.js'),
            to: path.resolve(distDir, 'js/libs/js'),
            flatten: true,
        },
        //还可以继续配置其它要拷贝的文件
    ])
];
function getEntry() {
    const entry = {};
    //读取src目录下所有page入口
    glob.sync('./src/pages/**/index.js')
        .forEach(function(filePath) {
            var name = filePath.match(/\/pages\/(.+)\/index.js/);
            name = name[1];
            entry[name] = filePath
        })
    return entry    
}

const entry = getEntry();
console.log('入口', entry)

function getHtmlWebpackPluginConfigs() {
    const res = [];
    for (let [entryName] of Object.entries(entry)) {
        const htmlFilePath = `${appPath}/pages/${entryName}/index.html`;
        if (!fs.existsSync(htmlFilePath)) {
            throw new Error(`file: ${htmlFilePath} not exist`);
        }
        const plugin = new HtmlWebpackPlugin({
            template: htmlFilePath,
            filename: `${entryName}.html`,
            chunks: [entryName, 'jquery'],
            minify: {
                removeAttributeQuotes: false,   // 是否
                collapseWhitespace: false, //是否折叠空白
            }
        });
        res.push(plugin);
    }
    return res;
}

module.exports = {
    entry,
    plugins: [...plugins, ...getHtmlWebpackPluginConfigs()]
}