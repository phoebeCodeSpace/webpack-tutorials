const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//     entry: {
//         page1: resolve(__dirname, './pages/page-1.js'),
//         page2: resolve(__dirname, './pages/page-2.js')
//     },
//     output: {
//         filename: '[name].[hash:6].js',
//         path: resolve(__dirname, 'dist')
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'page1.html',
//             template: resolve(__dirname, 'index.html'),
//             chunks:['page1']
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'page2.html',
//             template: resolve(__dirname, 'index.html'),
//             chunks: ['page2']
//         })
//     ]
// }

const entris = ['./pages/page-1.js','./pages/page-2.js']

let webpackConfig = {
    entry:{},
    output: {
        filename: '[name].[hash:6].js',
        path: resolve(__dirname, 'dist')
    },
    plugins:[]
}
entris.forEach((item,index)=>{
    webpackConfig.entry[item] = resolve(__dirname,item)
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        filename: `page${index+1}.html`,
        template: resolve(__dirname, 'index.html'),
        chunks: [item]
    }))
})

module.exports = webpackConfig;