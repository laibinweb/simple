const {isDev, shouldUseSourceMap} = require('./variable')
const PostCssPresetEnv = require('postcss-preset-env')
const PostcssFlexBugsfixes = require('postcss-flexbugs-fixes')

const postCssLoaderConfig = {
    loader: "postcss-loader",
    options: {
        ident: 'postcss',
        plugins: () => [
            PostcssFlexBugsfixes,
            PostCssPresetEnv({
                autoprefixer: {
                    flexbox: 'no-2009',
                    overrideBrowserslist: [
                        "last 100 version"
                    ]
                },
                stage: 3,
            })
        ],
        sourceMap: !isDev && shouldUseSourceMap,
    },
}

module.exports = postCssLoaderConfig