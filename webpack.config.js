const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js', // adjust entry point if needed
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // adjust path if necessary
            filename: 'index.html',
            chunks: ['main'], // specify which chunks to include if using multiple entry points
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/*.html', to: '[name].[ext]' }, // copy all HTML files from src folder
                { from: 'src/*.css', to: '[name].[ext]' }, // copy all CSS files from src folder
                { from: 'src/*.jpg', to: '[name].[ext]' }, // copy all JPG files from src folder
                { from: 'src/*.png', to: '[name].[ext]' }, // copy all PNG files from src folder
            ],
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
