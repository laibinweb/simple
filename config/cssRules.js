const {isDev} = require('./variable')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssRule = [
    {
        // test: /\.(c|sc)ss$/,
        test: /\.css|scss$/,
        use: [
            isDev ? 'style-loader': {loader: MiniCssExtractPlugin.loader, options: {publicPath : "../"}},
            'css-loader',
            {
                loader: 'postcss-loader'
            },
            'sass-loader'
        ],
        // exclude: /node_modules/
    }
]

module.exports = cssRule