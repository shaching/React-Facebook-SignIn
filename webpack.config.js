const webpack = require('webpack');
const path = require('path');

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
                loader: 'eslint-loader'
            }, {
                test: /\.jsx?$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                loader: 'babel-loader'
            }, {
                enforce: 'pre',
                test: /\.js$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                loader: 'eslint-loader'
            }, {
                test: /\.js$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                loader: 'babel-loader'
            }
        ]
    },

    externals: {
        is: 'is_js',
        react: 'react',
        ReactDOM: 'react-dom',
        PropTypes: 'prop-types'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
    ],
};
