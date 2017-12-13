const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        app: resolve(__dirname, 'src/index.js')
    }, 
    output: {
        filename: '[name].[hash:6].js',                      
        path: resolve(__dirname, 'dist')
    },
    resolve:{
        alias: {
            'config':resolve(__dirname,'src/config')
        }
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