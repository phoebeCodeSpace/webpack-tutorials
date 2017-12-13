const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        app: resolve(__dirname, 'index.js')
    }, 
    output: {
        filename: '[name].[hash:6].js',                      
        path: resolve(__dirname, 'dist')
    },
    // more opts : https://doc.webpack-china.org/configuration/dev-server/
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 8080,
        open: true,
        openPage: ''
    },
    plugins:[

        new HtmlWebpackPlugin({
            filename:'index.html',
            template: resolve(__dirname, 'index.html'),
            // more opts : https://github.com/kangax/html-minifier#options-quick-reference
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
}