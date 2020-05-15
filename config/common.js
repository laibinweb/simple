const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {NODE_ENV, isDev, distDir, appPath} = require('./variable');
const {entry} = require('./plugins')
const cssRules = require('./cssRules')


module.exports = {
    mode: NODE_ENV,
    entry,
    output: {
        //输出文件的文件名
        filename: isDev ? "js/[name].[hash].js" : "js/[name].[chunkhash].js",
        //非入口打包出的文件名称
        chunkFilename: isDev ? "js/[name]_[hash].min.js" : "js/[name]_[chunkhash].min.js",
        //输出文件的绝对路径
        path: distDir,
        //文件中静态资源的引用路径(一般是CDN路径)
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /jquery/,
                    name: 'jquery',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/  //排除node_modules目录
            },
            // {
            //     test: /\.(html)$/,
            //     use: {
            //         loader: 'html-loader',
            //         options: {
            //             attrs: ['img:src', 'img:data-src', 'audio:src'],
            //             minimize: true
            //         }
            //     }
            // },
            {
                test: /\.ejs$/,
                use: ['ejs-loader']
            },
            {
                test: /\.(png|jpg|gif|webp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]_[hash:5].[ext]',
                            // 图片输出的实际路径(相对于dist)
                            outputPath: "images",
                            // 当小于10KB时转为base64
                            limit: 10240
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    }
                },
                exclude: /node_modules/
            },
            ...cssRules
        ]
    },
    resolve: {
        alias: {
            '@': appPath //这个包名是我随便写的哈
        },
        extensions: ['.js', '.json', '.scss', '.css']
    }
} 