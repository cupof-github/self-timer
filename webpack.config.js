const webpack = require('webpack');

const resource = __dirname + '/assets/react';

// moement + timeago
module.exports = {
    entry: {

        bundle: resource + '/bundle.js',
    },
    output: {
        path: __dirname + '/assets/js/',
        filename: "[name].min.js"
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          },
          output: {
            comments: false
          }
        })

    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }

};
