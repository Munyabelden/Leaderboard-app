const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Belden Leaderboard',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
}