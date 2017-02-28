import { join } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: [
        join(__dirname, '..', 'src', 'index')
    ],
    output: {
        filename: 'slider.js',
        path: join(__dirname, '..', 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    devtool: '#source-map',
    plugins: [
        new ExtractTextPlugin({
            filename: 'slider.css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: join(__dirname, '..', 'src', 'index.html'),
            inject: 'head'
        })
    ]
};