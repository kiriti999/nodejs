var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'public_html/assets/js/bundle.js'
    },
    resolveLoader: {
        modules: ["node_modules"]
    },

    module: {

        rules: [
            {
                enforce: 'pre',
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: 'riotjs-loader',
                query: {
                    //type: 'none'
//                    compact: true
                }
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
//                options: {
//                    presets: 'es2015'
//                }
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                        use: 
                        [{
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        }]
                })
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true}),
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new ExtractTextPlugin("public_html/assets/css/styles.css"),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
//        new UglifyJSPlugin()
    ]
};
