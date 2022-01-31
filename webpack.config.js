const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
const {HotModuleReplacementPlugin} = require('hot-module-replacement')

module.exports = {
    context: path.resolve(__dirname, 'source'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './js/analitycs.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'source/models'),
            '@': path.resolve(__dirname, 'source'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './build'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html', inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.(png|jpe?g|gif|svg|webp|woff|woff2|ttf|eot|ico)$/,
                type: 'asset/resource'
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ],
    },
};