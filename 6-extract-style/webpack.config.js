const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:{
        app: resolve(__dirname, 'index.js')
    }, 
    output: {
        filename: '[name].[hash:6].js',                      
        path: resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins:[
        // more opts : https://www.npmjs.com/package/extract-text-webpack-plugin
        new ExtractTextPlugin({
            filename:'[name].[hash].css'
        }),
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