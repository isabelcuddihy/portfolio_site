const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/home.html',
            filename: 'home.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/home.html',
            filename: 'home.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/script.js', to: 'script.js' },
                { from: 'src/slideshow.js', to: 'slideshow.js' },
            ],
        }),
    ],
};
