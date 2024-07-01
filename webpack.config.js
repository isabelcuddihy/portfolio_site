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
        new HtmlWebpackPlugin({
            template: './src/home.html', // adjust path if necessary
            filename: 'home.html',
            chunks: ['main'], // specify which chunks to include if using multiple entry points
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html', // adjust path if necessary
            filename: 'contact.html',
            chunks: ['main'], // specify which chunks to include if using multiple entry points
        }),
        new HtmlWebpackPlugin({
            template: './src/projects.html', // adjust path if necessary
            filename: 'projects.html',
            chunks: ['main'], // specify which chunks to include if using multiple entry points
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/styles.css', to: 'styles.css' },
                // add more patterns as needed for other assets
            ],
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
