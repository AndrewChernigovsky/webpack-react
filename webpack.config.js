const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
console.log ('IS DEV:', isDev)

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
        extensions: ['.js', '.jsx', '.json', '.png', '.scss'],
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
    target: "web",
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, "build"),
        open: true,
        hot: isDev,
        compress: true,
        liveReload: false,
        port: 4200,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html', inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),


        new CopyWebpackPlugin({
            patterns: [
              { 
                from: path.resolve(__dirname, 'source/favicon.ico'),
                to:  path.resolve(__dirname, 'build') 
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
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
            },
            {
                test: /\.(js|jsx)?$/,
                use: ['babel-loader'],
            },
        ]
    }
};