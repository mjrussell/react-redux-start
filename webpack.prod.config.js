'use strict';

var config = require('./webpack.base.config.js');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

config.debug = false;

config.output = {
    path: './dist',
    filename: '[name].[hash].min.js',
    chunkFilename: '[id].js'
};

config.module.loaders = config.module.loaders.concat([
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
]);

config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
        __DEBUG__ : false,
        __DEV__ : false,
        __DEV_PANEL__: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['require', 'export', '$super']
        },
        compress: {
            warnings: false,
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
        },
        output: {
            comments: false
        }
    }),
    new CompressionPlugin({
        asset: '{file}.gz',
        algorithm: 'gzip',
        regExp: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    })
]);

module.exports = config;
