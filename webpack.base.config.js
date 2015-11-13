'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/js/App.js'
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnError: true
    },
    output: {
        path: './dist',
        filename: 'assets/js/[name].js',
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
        ],
        loaders: [
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                loader:'url-loader?limit=1024&name=assets/images/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=assets/fonts/[name].[ext]'
            },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.html$/, loader: 'file?name=[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        })
    ]
};
