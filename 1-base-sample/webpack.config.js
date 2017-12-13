const webpack = require('webpack')
const {resolve} = require('path')

module.exports = {
    entry:resolve(__dirname,'index.js'),
    output:{
        filename:'bundle.js',
        // filename: '[name].js',  
        // filename: '[name][hash:6].js',                      
        path:resolve(__dirname,'dist'),
        // publicPath
    }
}