const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/main/js/index.js'
    ],

    output: {
        path: path.resolve('lib'),
        filename: 'FacebookSignIn.js',
        libraryTarget: 'umd',
        library: 'FacebookSignIn',
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                use: 'eslint-loader'
            }, {
                test: /\.jsx?$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                use: 'babel-loader'
            }, {
                test: /\.css?$/,
                include: [path.resolve('app')],
                exclude: [path.resolve('node_modules')],
                use: ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            }, {
                enforce: 'pre',
                test: /\.js$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                use: 'eslint-loader'
            }, {
                test: /\.js$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                use: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
};
