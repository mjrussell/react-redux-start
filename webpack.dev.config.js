'use strict';

var config = require('./webpack.base.config');
var webpack = require('webpack');
var argv = require('yargs').argv;

config.devServer = {
    contentBase: 'src/',
    inline: true,
    stats: {
        colors: true
    },
    hot: true,
    historyApiFallback: true
};
config.devtool = '#source-map';
config.debug = true;

config.module.loaders = config.module.loaders.concat([
    {test: /\.js$/, loaders: [ 'react-hot', 'babel'], exclude: /node_modules/},
]);

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        __DEBUG__: true,
        __DEV__: !!argv.devmode,
        __DEV_PANEL__: !!argv.devpanel
    }),
]);

module.exports = config;
